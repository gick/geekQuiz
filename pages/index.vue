<template>
  <div>
    <div class="columns is-centered is-vcentered">
      <div class="column is-10">
        <Welcome style="margin-top:30px;" ref="welcome"></Welcome>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column">
        <EndGame :show-end="showEnd" ref="ends"></EndGame>
      </div>
    </div>

    <div class="columns is-centered is-vcentered is-gapless multiline is-mobile">
      <div class="column is-7">
        <Question v-show="started" v-if="getQuestion" :question="getQuestion" :class="anim"></Question>
        <b-message
          v-else
          title="Full run success"
          type="is-success"
          aria-close-label="Close message"
        >You completed a full run, congratulation!</b-message>
      </div>

      <CountDown class="column is-7" @finish="endRun" v-show="started" ref="countdown"></CountDown>

      <div :class="scoreanim">
        <div v-show="gain" class="win">
          <p>+ {{gain}}</p>
        </div>
        <div v-show="loss" class="lose">
          <p>- {{loss}}</p>
        </div>
      </div>
    </div>
    <div :class="'columns is-centered is-8 ' + showMessage">
      <b-message
        title="You reached a new level"
        type="is-success"
      >Congratulation, you reached level {{difficulty + 1}}! Your pause score is restarted!</b-message>
    </div>
  </div>
</template>
<style>
.hide {
  display: none !important;
}
.anim {
  animation-duration: 0.5s;
}
.win {
  background-color: green;
  color: white;
  border-radius: 5px;
  padding: 5px;
  width: 50px;
}
.lose {
  background-color: red;
  color: white;
  border-radius: 5px;
  padding: 5px;
  width: 50px;
}
</style>
<script>
import Welcome from "~/components/Welcome";
import Question from "~/components/Question";
import CountDown from "~/components/CountDown";
import EndGame from "~/components/EndGame";
import { mapMutations, mapState } from "vuex";
import { mapGetters } from "vuex";
import { setTimeout } from "timers";

export default {
  name: "HomePage",
  data() {
    return {
      showEnd: false,
      started: false,
      showMessage: "hide",
      q: null,
      anim: "",
      countDownClass: "countDown",
      opacity: 0,
      gain: 0,
      loss: 0,
      scoreanim: "display:none"
    };
  },
  mounted() {
    this.$root.$off("set-pause");
    this.$root.$off("welcome-close");
    this.$root.$on("set-pause", this.pauseCounter);
    this.$root.$on("welcome-close", this.firstRun);
    this.$root.$off("question-done");
    this.$root.$off("new-run");
    this.$root.$on("question-done", val => this.update(val));
    this.$root.$on("new-run", () => this.newRun());
  },
  components: {
    Welcome,
    Question,
    CountDown,
    EndGame
  },
  watch: {
    resetPause: function(v) {
      if (v == 0) return;
      this.restartPauseTime();
    },
    difficulty: function(v) {
      if (v > 0) {
        this.showMessage = "animated zoomIn";
        setTimeout(() => {
          this.showMessage = "animated zoomOut";
        }, 3500);
        setTimeout(() => {
          this.showMessage = "hide";
        }, 4500);
      }
    }
  },
  computed: {
    ...mapState([
      "runTime",
      "pauseTime",
      "resetPauseTime",
      "currentPauseTime",
      "difficulty",
      "paused"
    ]),
    ...mapGetters(["getQuestion", "getDone"]),
    resetPause() {
      let pause = Math.floor(this.getDone.length / this.resetPauseTime);
      return pause;
    }
  },
  methods: {
    pauseCounter() {
      // this.$toast.global.my_error()
      if (this.currentPauseTime >= this.pauseTime) {
        console.log("d");
        this.$notification.open({
          duration: 2000,
          message: `You already used your pause options!`,
          position: "is-bottom",
          type: "is-danger",
          hasIcon: true
        });
        return;
      }
      this.updatePauseTime();
      this.$refs.countdown.pause();
    },
    ...mapMutations([
      "shuffle",
      "restart",
      "updatePauseTime",
      "restartPauseTime"
    ]),
    newQuestion() {
      this.shuffle();
    },
    newRun() {
      this.$axios.post("/api/start");
      this.restart();
      this.showEnd = false;
      this.started = true;
      this.$refs.countdown.start();
      this.$refs.countdown.resetTime(this.runTime);
    },
    firstRun() {
      this.$axios.post("/api/start");
      this.started = true;
      this.$refs.countdown.resetTime(this.runTime);
      this.$refs.countdown.start();
    },
    endRun() {
      this.started = false;
      this.showEnd = true;
    },
    update(val) {
      console.log(this);
      this.anim = "";
      this.$refs.countdown.start();
      this.getQuestion.done = true;
      setTimeout(() => {
        this.anim = "animated flip anim";
      }, 10);
      this.gain = val.gain;
      this.loss = val.loss;
      this.scoreanim = "animated lightSpeedIn";
      setTimeout(() => {
        this.scoreanim = "animated lightSpeedOut";
      }, 700);

      this.$refs.countdown.updateValue(this.gain - this.loss);
    }
  }
};
</script>

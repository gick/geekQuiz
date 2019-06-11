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

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <div class="tile is-parent">
          <div class="tile is-8 is-child">
            <Question v-show="started" v-if="getQuestion" :question="getQuestion" :class="anim"></Question>
            <b-message
              v-else
              title="Full run success"
              type="is-success"
              aria-close-label="Close message"
            >You completed a full run, congratulation!</b-message>
          </div>
          <div class="tile is-child">
            <div class="columns is-vcentered is-gapless">
              <div class="column is-10">
                <CountDown @finish="endRun" v-show="started" ref="countdown"></CountDown>
              </div>
              <div class="column">
                <div :class="'tile is-vertical ' + scoreanim">
                  <div v-show="gain>0" class="tile is-child win">
                    <p>+ {{gain}}</p>
                  </div>
                  <div v-show="loss>0" class="tile is-child lose">
                    <p>- {{loss}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="'columns is-centered is-8 ' + showMessage">
        <b-message title="You reached a new level" type="is-success">
        Congratulation, you reached level {{difficulty + 1}}!
        </b-message>
    </div>
  </div>
</template>
<style>
.hide{
  display: none!important;
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
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import { setTimeout } from "timers";

export default {
  name: "HomePage",
  data() {
    return {
      showEnd: false,
      started: false,
      showMessage:'hide',
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
    this.$root.$off("welcome-close");
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
  watch:{
    difficulty:function(v){
      if(v>0){
        this.showMessage='animated zoomIn'
        setTimeout(()=>{this.showMessage='animated zoomOut'},3500)
        setTimeout(()=>{this.showMessage='hide'},4500)
      }
    }
  },
  computed: {
    ...mapGetters(["getQuestion", "getDone"]),
    difficulty() {
      let diff = Math.floor(this.getDone.length / 5);
      if (diff > 2) {
        diff = 2;
      }
      this.$store.state.difficulty = diff;
      return diff;
    }
  },
  methods: {
    ...mapMutations(["shuffle", "restart"]),
    newQuestion() {
      this.shuffle();
    },
    newRun() {
      this.restart();
      this.showEnd = false;
      this.started = true;
      this.$refs.countdown.start()
      this.$refs.countdown.resetTime(30);
    },
    firstRun() {
      this.started = true;
      this.$refs.countdown.resetTime(30);
      this.$refs.countdown.start()
    },
    endRun() {
      this.started = false;
      this.showEnd = true;
    },
    update(val) {
      this.anim = "";

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

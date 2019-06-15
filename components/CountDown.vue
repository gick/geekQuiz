<template>
    <circular-count-down-timer
      :seconds-fill-color="'red'"
      :seconds-fill-opacity="opacity"
      @update="countDownUpdate"
      @finish="endRun"
      :paused="paused"
      :class="countDownClass"
      :initial-value="30"
      :steps="60"
      :size="200"
      :second-label="''"
      ref="countdown"
    ></circular-count-down-timer>
</template>
<style>
.countDown {
  text-align: center;
  color: aquamarine;
  margin-top:20px;
}
</style>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return { countDownClass: "countDown", opacity: 0 };
  },
  computed:{
    ...mapState(['runTime','paused'])
  },
  methods: {
    endRun(){
      console.log('end run')
      this.$emit('finish')
      this.$store.commit('setPause',true)
       },
    updateValue(val){
        let afterUpdate=this.$refs.countdown.value + val
        if(afterUpdate>this.runTime){
          this.$refs.countdown.resetTime(this.runTime)
          return
        }
        this.$refs.countdown.updateTime(val)
    },
    resetTime(val){
      this.$refs.countdown.resetTime(val)
    },
    pause(){
      this.$store.commit('setPause',true)
    },
    start(){
      this.$store.commit('setPause',false)
    },
    countDownUpdate(v) {
      this.opacity = 1 / (v.value + 1);
      this.countDownClass = "countDown animated pulse";
      setTimeout(() => {
        this.countDownClass = "countDown";
      }, 900);
    }
  }
};
</script>

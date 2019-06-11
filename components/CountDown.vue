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
export default {
  data() {
    return { countDownClass: "countDown", opacity: 0,paused:true };
  },
  methods: {
    endRun(){
      console.log('end run')
      this.$emit('finish')
      this.paused=true
       },
    updateValue(val){
        let afterUpdate=this.$refs.countdown.value + val
        if(afterUpdate>30){
          this.$refs.countdown.resetTime(30)
          return
        }
        this.$refs.countdown.updateTime(val)
    },
    resetTime(val){
      this.$refs.countdown.resetTime(val)
    },
    start(){
      this.paused=false
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

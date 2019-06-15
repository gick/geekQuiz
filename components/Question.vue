<template>
    <div class="tile is-parent">
        <article class="tile is-child notification has-background-grey	 has-text-white-ter		">
          <p v-html="question.q" style="font-family:Roboto;font-weight:300;text-align:center;" class="subtitle"></p>
          <div class="column centered">
            <Checkbox :response='response' v-for="response in question.r" v-bind:key="response.label"></Checkbox>
          </div>
          <div class="column centered">
          <b-button ref="button" @click="checkScore" type="is-dark">Answer</b-button>
          <b-button :disabled='!pauseAllowed && !paused' ref="button" @click="setPause" type="is-dark">Pause</b-button>

        </div>
        </article>
      </div>

</template>
<style>
.math {
  font-family: "stixgeneralregular";
  font-style: italic;
  border-color: aliceblue;
  text-decoration: none !important;
}
.quote{
  text-align: justify;
    font-size: 0.7em;
    font-style: italic;
}

.centered{
  text-align: center;
}
</style>
<script>
import Checkbox from './Checkbox'
import {mapGetters, mapState} from 'vuex'
export default {
  data(){
    return {inpause:false}
  },
  props:['question'],
  components:{
    Checkbox
  },
  computed:{
        ...mapGetters(['pauseAllowed']),
        ...mapState(['paused'])
  },
  mounted(){
  }
  ,
  methods:{
    setPause(){
      this.$store.commit('setPause',true)
    },
    checkScore(){
      this.$axios.post('/api/question',{question:this.question})
      let gain=0
      let loss=0
      for(let resp of this.question.r){
        if(!resp.checked){
          resp.checked=false
        }
        gain+= (resp.correct==resp.checked) ? resp.gain:0
        loss+= (resp.correct!=resp.checked) ? resp.loss:0
      }
      this.$root.$emit('question-done',{gain:gain,loss:loss})
    }
  }
}
</script>

<template>
<div class="columns is-mobile is-centered">
  <div style="margin-top:70px" class="column is-half">
        <b-message type="is-info" title="Best scores" :closable="false">
            <ul style="text-align:center;margin-left:10px;">
                <li v-for="score in scores"><b> {{score.name}}</b> reached score : <b> {{score.score}} </b>on {{score.date}}</li>
            </ul>
        </b-message>
  </div>
</div>
</template>
<script>
export default{
  data(){
    return {scores:{}}
  },
  mounted(){
    this.$axios.get('/api/score')
    .then(function(resp){
      this.scores=resp.data.sort((x,y)=>x.score-y.score)
    }.bind(this))
 }
}
</script>
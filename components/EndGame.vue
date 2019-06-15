    <template>
  <b-message
    type="is-danger"
    @close="dispatchClose"
    :active="showEnd"
    title="Time out!"
    aria-close-label="Close message"
  >
    During this run, you managed to answer
    <b>{{getDone.length}} questions</b>
    <br>Close this message to start a new run.
    <br><b>Enter a pseudo before closing to be in the top scores</b>
    <b-field label="Nickname">
      <b-input v-model="name"></b-input>
    </b-field>
  </b-message>
</template>
    <style>
.message-header {
  background-color: #8c8c8c;
}
</style>
    <script>
import { mapGetters } from "vuex";
export default {
    data(){
        return {name:null}
    },
  computed: {
    ...mapGetters(["getDone"])
  },
  props: ["showEnd"],
  methods: {
    dispatchClose() {
        if(this.name){
            this.$axios.post('/api/score',{name:this.name,score:this.getDone.length})
        }
      this.$root.$emit("new-run");
    }
  }
};
</script>
    
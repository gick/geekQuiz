    <template>
        <b-message type="is-danger" @close="dispatchClose" :active="showEnd" title="Time out!" aria-close-label="Close message">
            During this run, you managed to answer <b> {{getDone.length}} questions</b> <br>
            Close this message to start a new run.
        </b-message>
    </template>
    <style>
    .message-header{
    background-color: #8c8c8c;
    }
    </style>
    <script>

    import { mapGetters } from "vuex";
    export default {
        computed:{
         ...mapGetters(["getDone"])
        },
        props:['showEnd']
        ,
        methods:{
            dispatchClose(){
                this.$root.$emit('new-run')
            }
        }
    }
    </script>
    
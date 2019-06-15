    <template>
        <b-message @close="dispatchClose" title="Welcome to the quizz" aria-close-label="Close message">
            You've reached the quizz, <b>congratulations!</b> <br>
            Here are the rules :
            <ul style="list-style:inside;margin-left:10px;">
                <li>You start with <b>40 seconds</b></li>
                <li>Correct answer credit you time, wrong answer cost you time</li>
                <li>You can pause to stop the counter, <b>but you have only two pauses</b></li>
                <li><b>Close this message to start</b></li>
            </ul>
        </b-message>
    </template>
    <style>
    .message-header{
    background-color: #8c8c8c;
    }
    </style>
    <script>
    export default {
        methods:{
            dispatchClose(){
                this.$root.$emit('welcome-close',{p:1})
            }
        }
    }
    </script>
    
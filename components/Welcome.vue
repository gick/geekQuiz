    <template>
        <b-message @close="dispatchClose" title="Welcome to the quizz" aria-close-label="Close message">
            You've reached the quizz, <b>congratulations!</b> <br>
            Here are the rules :
            <ul style="list-style:inside;margin-left:10px;">
                <li>You start with 30 seconds</li>
                <li>Each correct answer credit you time</li>
                <li>Each incorrect answer cost you time</li>
                <li>The quizz is not fair</li>
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
    
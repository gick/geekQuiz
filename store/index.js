export const strict = false

import questions from './question.json'
export const state = () => ({
    questions: questions,
    difficulty:0,
    remainingTime:100,
  })
  
  export const mutations = {
    shuffle (state) {
        state.questions=_.shuffle(state.questions)
    },
    restart (state){
      for(let q of state.questions){
        q.done=false
        for(let r of q.r){
          r.checked=undefined
        }
      }
    }
  }
  
  export const getters = {
      getQuestion:(state)=>{
        state.questions=_.shuffle(state.questions)
        return state.questions.find(val=>val.done==false && val.difficulty==state.difficulty)
      },
      getDone:state=>{
        return state.questions.filter(val=>val.done==true)
      },
      
  }
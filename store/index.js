export const strict = false
import {RUN_TIME, PAUSE_TIME, GET_ANSWER,RESET_PAUSE_TIME} from '@/assets/constants'
import questions from './question.json'
import { startSession } from 'mongoose';
export const state = () => ({
    questions: questions,
    difficulty:0,
    runTime:RUN_TIME,
    pauseTime:PAUSE_TIME,
    getAnswer:GET_ANSWER,
    resetPauseTime:RESET_PAUSE_TIME,
    currentPauseTime:0,
    currentGetAnswer:0,
    currentResetPauseTime:0,
    paused:true,  
  })
  
  export const mutations = {
    shuffle (state) {
        state.questions=_.shuffle(state.questions)
    },
    updatePauseTime(state){
      state.currentPauseTime++
    },
    setPause(state,value){
      state.paused=value
    },
    restartPauseTime(state){
      state.currentPauseTime=0
    },
    restart (state){
      state.currentPauseTime=0  
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
        let done=state.questions.filter(val=>val.done==true)
        let diff = Math.floor(done.length / 5);
        if (diff > 2) {
          diff = 2;
        }
        state.difficulty=diff
        return done
      },
      pauseAllowed:state=>{
        return state.currentPauseTime<state.pauseTime
      }
      
  }
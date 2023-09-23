import { createSlice } from "@reduxjs/toolkit"
export const questionReducer=createSlice({

    name:'questions',
    initialState:{
        queue:[],
        answers:[],
        trace:0
    },

    reducers:{
        startExamAction:(state,action)=>{
            return{
                ...state,
                queue:action.payload
            }
        },
        moveNextQuestion:(state)=>{
                return{ 
                    ...state,
                    trace:state.trace+1
    }},
    movePrevQuestion:(state)=>{
        return{
          ...state,
            trace:state.trace-1
        }},

    resetQuestions:()=>{
         return{
            queue:[],
            answers:[],
            trace:0
         }
    },
    }
})

export const {startExamAction, moveNextQuestion,movePrevQuestion,resetQuestions}=questionReducer.actions;
export default questionReducer.reducer;

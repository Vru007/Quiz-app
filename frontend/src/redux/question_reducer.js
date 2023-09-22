import { createSlice } from "@reduxjs/toolkit"
export const questionReducer=createSlice({

    name:'questions',
    initialState:{
        queue:["1","2","3","4"],
        answers:[],
        trace:0
    },

    reducers:{
        startExamAction:(state,action)=>{
            return{
                ...state,
                queue:action.payload
            }
        }
    }
})

export const {startExamAction}=questionReducer.actions;
export default questionReducer.reducer;

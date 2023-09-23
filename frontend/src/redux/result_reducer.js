import { createSlice } from "@reduxjs/toolkit"
export const resultReducer= createSlice({
   
    name:'result',
    initialState:{
        userId:null,
        result:[]
    },
    reducers:{

        setUserId:(state,action)=>{
            state.userId=action.payload
        },

        pushResult:(state,action)=>{
            state.result.push(action.payload);
    },

        resetResult:()=>{
            return{
                userId:null,
                result:[]
            }
        },
}
})

export const {setUserId, pushResult,resetResult}=resultReducer.actions;

export default resultReducer.reducer;
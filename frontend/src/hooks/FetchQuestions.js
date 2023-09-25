import { useEffect, useState } from "react";
import data, {answers}from "../database/data";
import { useDispatch } from "react-redux";
/* redux actions*/

import * as Action from "../redux/question_reducer";
/* fecth questions hook*/
export const useFetchQuestion=()=>{
    
    const dispatch=useDispatch();
    const [getData,setGetData]=useState({isloading:false,apiData:[],serverError:null})

   useEffect(()=>{

    setGetData(prev=>({...prev,isloading:true}));
    
    (async()=>{

        try{
             let question=await data;
             if(question.length>0){
             setGetData(prev=>({...prev,isloading:false,apiData:{question,answers}}))
        
             /* Dispatch*/
             dispatch(Action.startExamAction({question,answers}));
            }
            else{
                throw new Error("No question there")
            }
    }
        catch(err){
            setGetData(prev=>({...prev,isloading:false,serverError:err}))
        }
    })();

},[dispatch]);

return[getData,setGetData];


}

export const MoveNextQuestion=()=>async(dispatch)=>{
  try{
        dispatch(Action.moveNextQuestion());
  }
  catch(err){
    console.log(err)
  }
 
}

export const MovePrevQuestion=()=>async(dispatch)=>{ 
   try{
     dispatch(Action.movePrevQuestion());
   }
   catch(err){
     console.log(err)
   }
}

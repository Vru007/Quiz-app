import { useEffect, useState } from "react";
import data from "../database/data";
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
             setGetData(prev=>({...prev,isloading:false,apiData:question}))
        
             /* Dispatch*/
             dispatch(Action.startExamAction(question));
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

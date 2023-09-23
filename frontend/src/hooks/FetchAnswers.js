
import * as Action from "../redux/result_reducer";
export const AnswersArray=(result)=> async(dispatch)=>{
    try{
         await dispatch(Action.pushResult(result))
    }
    catch(err){
        console.log(err);
    }
}
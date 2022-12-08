import { CALL_API } from "./constant";

export const callApi = (data) =>{
    return{
        type:CALL_API,
        data
    }
}
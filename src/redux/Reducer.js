import { CALL_API } from "./constant";


export const apiData = (data = [], action ) =>{
    switch (action.type) {
        case CALL_API:
        return[action.data, ...data]

        default:
            return data
    }
}
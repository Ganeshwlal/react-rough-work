import { BASE_URL } from "./BaseUrl";
import { commonRequest } from "./common Req";

export const register = async(body,header)=>{
    return await commonRequest("POST",`${BASE_URL}/register`,body,header)
}
import {
  User_Login_Request,
  User_Login_Success,
  User_Login_Fail,
  User_Register_Fail,
  User_Register_Request,
  User_Register_Success,
  User_logout_Success,
  User_logout_Fail
} from '../constants/userConstant';

export const userReducer=(state={user:{}},action)=>{
   switch(action.type){
       case User_Login_Request:
           case User_Register_Request:
           return {
               loading:true,
               ...state,
               isAuthenticated:false
           }
           case User_Login_Success:
               case User_Register_Success:
           return {
               ...state,
               loading:false,
               isAuthenticated:true,
               user:action.payload
           }
           case User_logout_Success:
               return {
                   loading:false,
                   isAuthenticated:false,
                   user:{}
               }
            case User_Login_Fail:
                case User_Register_Fail:
                    case User_logout_Fail:
                return {
                    loading:false,
                    error:action.payload,
                    isAuthenticated:false,
                    user:{}
                }
                default:
                    return state;
   }
}
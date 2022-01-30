import {
    All_Org_Fail,
    All_Org_Success,
    All_Org_Requests,
    Create_Org_Request,
    Create_Org_Success,
    Create_Org_Fail,
    Add_User_Request,
    Add_User_Success,
    Add_User_Fail,
    Get_Org_Requests,
    Get_Org_Succcess,
    Get_Org_Fail
} from '../constants/orgConstants';


export const orgReducer=(state={organisations:[]},action)=>{
    switch(action.type){
        case All_Org_Requests:
            return {
                loading:true,
                organisations:[]
            }
            case All_Org_Success:
            return {
                loading:false,
                organisations:action.payload
            }
          
             case All_Org_Fail:
                 return {
                     loading:false,
                     error:action.payload
                 }
                 default:
                     return state;
    }
 }

 
 export const orgCreateReducer=(state={organisation:{}},action)=>{
    switch(action.type){
        case Create_Org_Request:
            case Add_User_Request:
                case Get_Org_Requests:
            return {
                loading:true,
                organisation:{}
            }
            case Create_Org_Success:
                case Add_User_Success:
                    case Get_Org_Succcess:
            return {
                loading:false,
                organisation:action.payload
            }
          
             case Create_Org_Fail:
                case Add_User_Fail:
                    case Get_Org_Fail:
                 return {
                     loading:false,
                     error:action.payload
                 }
                 default:
                     return state;
    }
 }



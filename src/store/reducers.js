import * as actions from './actionsTypes';
export default (state={data:[],error:''},action)=>{
    console.log(action.payload);
    switch(action.type){
        case actions.FETCH_INFO:
            return {data:[action.payload,...state.data],error:'',loading:false}
        
        case actions.ERROR:
            return {...state,error:action.payload,loading:false}
        
        case actions.REMOVE_CITY:{
            const data= state.data.filter(data=>{
                return data.city.name !== action.payload
            });
            return {...state,data}
        }
        case "LOADING": 
            return {...state,loading:true}
        default:
        return state;
    }
    
}
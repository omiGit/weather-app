import * as actions from './actionsTypes';
import axios from 'axios';

const APP_KEY = '8c62c54995c130ced7f240889ba97d9f';


export const setError = e=>({type:actions.ERROR,payload:e});
export const fetchInfo=(city)=>{
    
     return dispatch=>{
        const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${APP_KEY}`;
        dispatch({type:"LOADING",loading:true});
        axios.get(`${url}&q=${city}`)
        .then(response=>{
            const data= response.data;
            dispatch({type:actions.FETCH_INFO,payload:data,loading:false});
        })
        .catch(error=>{
            console.log(error.response.data.message);
            dispatch(setError(error.response.data.message));
        });
    
    }
    
}

//export const setError = error=>({type:actions.ERROR, payload:error})

export const removeCity = city=>{
    return {
        type: actions.REMOVE_CITY,
        payload:city
    }
}
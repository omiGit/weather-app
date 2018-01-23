import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = (data)=>{
    const total = data.reduce((a,b)=>{let t = a+b; return t },0)
    return (total/data.length).toFixed(2);
}

export default (props) => {
    console.log(average(props.data));
  return (
   <div>
   <Sparklines data={props.data} height={120} width={180}>
    <SparklinesLine color={props.color}/>
    <SparklinesReferenceLine type="avg" />
   </Sparklines>
   <div>{average(props.data)} {props.units}</div>
   </div>
  )
}

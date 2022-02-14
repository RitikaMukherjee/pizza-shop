import React,{useState} from 'react';

const Quantity = (props) => {
    const [count,setCount] = useState(0);
    const handleIncrement = ()=>{
        setCount(count+1);
    }
    const handleDecrement = ()=>{
        setCount(count-1);
    }
    props.quantity(count);
  return <>
    <div style={{display:"inline-flex"}}>
    <button onClick={handleIncrement} style={{border:"none"}}><h6>+</h6></button>
    <h5 style={{margin:"3px"}}>{count}</h5>
    <button onClick={handleDecrement} style={{border:"none"}} disabled={count===0?true:false}><h6>-</h6></button>
    </div>
  </>;
};

export default Quantity;

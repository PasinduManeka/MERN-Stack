import React, {useState} from "react";
function CounterFunction(){
    let [count, setCount] = useState(0);

    function increment(){
         setCount(++count);
    }

    return(
        <div>
            <h3>Functional Component</h3>
            <h1>You have clicked {count} times.</h1>
            <button className="btn btn-outline-danger" onClick={e=>increment()}>Increased the Count</button>
        </div>
    )
}

export default CounterFunction;
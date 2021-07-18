import React from "react";

class CounterClass extends React.Component{
    constructor(){
        super();
        this.increment = this.increment.bind(this);
        this.state={
            number:0
        }
    }

    increment(){
        this.setState({
            number:this.state.number + 1
        })
    }

    render(){
        return(
            <div>
                <h1>Counter:{this.state.number}</h1>
                <button className="btn btn-outline-danger" onClick={this.increment}>Increase</button>
            </div>
        )
    }
}

export default CounterClass;
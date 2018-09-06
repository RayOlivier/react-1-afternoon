import React, {Component} from 'react';


class Sum extends Component{
    constructor(){
        super();

        this.state={
            num1: 0,
            num2: 0,
            sum: 0
        }

        this.handleChange1=this.handleChange1.bind(this)
        this.handleChange2=this.handleChange2.bind(this)
        this.add=this.add.bind(this)
    }

    handleChange1(x){
        console.log(x)
        this.setState({num1: parseInt(x,10)})
        console.log(this.state.num1);
    }

    handleChange2(x){
        this.setState({num2: parseInt(x,10)})
        console.log(this.state.num2)
    }

    add(x,y){
        let num = x+y;
        console.log(num);
        this.setState({sum: num})
        console.log(this.state.sum)
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine"
                type="number"
                onChange={(event)=>this.handleChange1(event.target.value)}></input>
                <input className="inputLine"
                type="number"
                onChange={(e)=> this.handleChange2(e.target.value)}></input>
                <button className="confirmationButton"
                onClick={() => this.add(this.state.num1, this.state.num2)}>Run</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}



export default Sum;
import React, {Component} from 'react';


class Palindrome extends Component{
    constructor(){
        super();

        this.state = {
            userInput: "",
            palindrome: "",
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)

    }

    handleChange(x){
        this.setState({userInput: x.target.value})
    }

    handleClick(){
        //solve here
        var arr = this.state.userInput.split('')
        var revArr = [];
        console.log(arr);
        arr.forEach((e)=>{
            revArr.unshift(e);
        })
        console.log(revArr);
        if(arr.join() === revArr.join()){
            this.setState({palindrome: true})
        }
        else this.setState({palindrome: false});

    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine"
                onChange={(event)=> this.handleChange(event)}
                ></input>
                <button className="confirmationButton"
                onClick={this.handleClick}>Run</button>
                <span className="resultsBox">Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}


export default Palindrome;
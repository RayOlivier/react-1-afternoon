import React, {Component} from 'react';

class EvenAndOdd extends Component{
    constructor(){
        super();
        
        this.state ={
            evenArray: [],
            oddArray: [],
            userInput: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(x){
        this.setState({userInput:x.target.value})
    }

    handleClick(){
        const{userInput}=this.state;
        let newArr = userInput.split(',');

        let arrEvens =[];
        let arrOdds=[];

        newArr.forEach((e,i,arr)=>{
            if(e%2===0.0){
                arrEvens.push(parseInt(e,10.0));
            }
            else{
                arrOdds.push(parseInt(e,10.0));
            }
        })
        //console.log(arrEvens);
        this.setState({evenArray: arrEvens});
        this.setState({oddArray: arrOdds});
        //console.log(this.state.evenArray)
    }



    render(){
        console.log(this.state.userInput);

        return(
            <div  className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine"
                onChange={(event)=> this.handleChange(event)}
                ></input>
                <button className="confirmationButton"
                onClick={this.handleClick}
                
                >Run</button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>

                


            </div>
        )
    }
}


export default EvenAndOdd;
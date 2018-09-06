import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super();

        this.state={
            unFilteredArray: [
                {name: "Ray", gender: null, hairColor: "blue" },
                {name: "Joe", gender: "male", age: 53},
                {name: "Jessica", gender: "female", age: 25},
                {name: "Gared", age: 21, hairColor: "blond"}
            ],
            userInput: "",
            filteredArray: []

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(x){
        this.setState({userInput: x.target.value})
    }

    handleClick(){
        //solve here
        const {unFilteredArray, userInput} = this.state;
        let newArr = unFilteredArray.filter((e,i,arr)=>{
            for(let key in e){
                console.log(key);
                if(key===userInput){
                    return true;
                }
                else return false
            }
            
        })
        //console.log(newArr);

        this.setState({filteredArray: newArr})
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine"
                onChange={(event)=> this.handleChange(event)}
                ></input>
                <button className="confirmationButton"
                onClick={this.handleClick}
                >Run</button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}


export default FilterObject;
import React, {Component} from 'react';


class FilterString extends Component{
    constructor(){
        super();

        this.state={
            unFilteredArray: ["Lucio", "Mercy", "Mei", "Pharah", "Moira", "McCree", "Soldier 76"],
            userInput: "",
            filteredArray: []

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }

    handleChange(x){
        this.setState({userInput: x.target.value})
    }

    handleClick(){
        //solve here
        const {unFilteredArray, userInput} = this.state;
        
        let newArr = [];
        
        newArr = unFilteredArray.filter((e)=>{
            // console.log(e)
            // console.log(e.includes(userInput))
            // console.log(userInput)
            return (e.includes(userInput))
            
        })
        //console.log(newArr)
        this.setState({filteredArray: newArr})

    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine"
                onChange={(event)=> this.handleChange(event)}
                ></input>
                <button className="confirmationButton"
                onClick={this.handleClick}
                >Run</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray, null, 10)}</span>
                
            </div>
        )
    }
}



export default FilterString;
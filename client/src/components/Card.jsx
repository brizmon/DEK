import React, {Component} from 'react';

class Card extends Component{
    constructor(){
        super();
        this.state = {
            didMount: false,
        }
    }
    componentDidMount(){
        this.setState({
            user_id: this.props.card.user_id, 
            question: this.props.card.question, 
            answer: this.props.card.answer, 
            correct: this.props.card.correct, 
            setTime: this.props.card.setTime, 
            timesRight: this.props.card.timesRight, 
            timesWrong: this.props.card.timesWrong, 
            deckNumber: this.props.card.deckNumber,
            didMount: true,
        })
    }



    handleInputChange = (e) => {
        const name=e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value,
        })
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('this is where we should put to /decks')
    }


    render(){
        if(this.state.didMount){
            return(
                <div className="cards-container-edit">
                    <div className="create-front">
                        <div className="create-front-side-card">
                            <p>Edit your question</p>
                            <form action="/decks" method='POST'>
                                <textarea onChange={e=>this.handleInputChange(e)} name="question" cols="30" rows="10" value={this.state.question}></textarea>
                            </form>
                        </div>
                    </div>
                    <div className="create-back">
                        <div className="create-back-side-card">
                            <p>Edit your answer</p>
                            <form action="/decks" method='POST'>
                                <textarea onChange={e=>this.handleInputChange(e)} name="answer" cols="30" rows="10" value={this.state.answer}></textarea>
                                <input onClick={e=>{this.handleFormSubmit(e)}}type="submit" class='save-back-side-card' value='save'/>
                            </form>
                        </div>
                    </div>

                    
                </div>
                
            )
        }
        return(
            <div>
                Loading...
            </div>    
        )
        
    }
}

export default Card;
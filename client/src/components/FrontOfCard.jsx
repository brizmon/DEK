import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class FrontOfCard extends Component{
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
            setTime: this.props.card.settime,
            timesRight: this.props.card.timesright,
            timesWrong: this.props.card.timeswrong,
            deckNumber: this.props.card.decknumber,
            didMount: true,
            id: this.props.card.id,
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
                <div>
                    <div className="cards-container">
                        <div className="create-front">
                            <div className="create-front-side-card">
                                <div>
                                <h1 className="quiz_question">{this.state.question}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="rotate_button" onClick={this.props.rotateCard}>Flip Card</button>
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

export default FrontOfCard;

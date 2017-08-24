import React, {Component} from 'react';
import axios from 'axios'
import moment from 'moment'



class BackOfCard extends Component{
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
    handleNextCard = e => {
        this.props.rotateCard();
        this.props.getNextCard();
    }

    handleIncorrect = e => {
        this.props.increaseNumberWrong();
        this.handleNextCard(e);
    }


    handleCorrect = e => {
        // using moment
        // if correct:true time: currentTime+7
        // current moment
        this.props.increaseNumberCorrect()
        let currentMoment = moment().format()
        let futureMoment = moment(currentMoment).add(5,'hour').format()
        if(this.state.correct){
            futureMoment = moment(currentMoment).add(2,'days').format()
        }
        // console.log(futureMoment);


        let stateCopy = this.state;
        stateCopy.setTime = futureMoment;
        stateCopy.correct = true;
        // needs to be a delay here
        // put to database with correct:true, time: currentTime+3h
        axios.put(`/decks/${this.state.id}`,stateCopy)
        // .then(res => {
        //     // have some animation here
            
        // })
        this.handleNextCard(e)
    }

    render(){
        if(this.state.didMount){
            return(
                <div className="cards-container">

                    <div className="create-back-quiz">

                        <div className="create-back-side-card">
                            <h1>{this.state.answer}</h1>
                        </div>

                        <div className='right-wrong'>
                            <button onClick={this.handleIncorrect} className='incorrect-button'>Incorrect</button>
                            {/* or http://fontawesome.io/icon/times-circle/*/}
                            <button onClick={this.handleCorrect} className='correct-button'>Correct</button>
                            {/* or http://fontawesome.io/icon/check-circle-o/*/}
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

export default BackOfCard;

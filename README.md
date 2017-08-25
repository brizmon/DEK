# Group Project 3 - DEK

Team members: Brandon Hew, Briseida Montiel, Daniel Beebe, Ivan Alvarian

![img1](./images/Welcome-page-shot.png)

![img1](./images/Main-menu-shot.png)

## User Story
'DEK' is an app which allows users to create their own unique stack of flash cards to aid in the learning process. This app can be used to learn a new language (foreign or programming) or any new subject which requires memorization.

When a new user visits the app, the first screen is a Welcome screen where the user can register to create a unique login. A registered user can simply login.

After loggging in, the user is directed to the main menu. At the main menus, the user can choose to create a new flash card, review all flash cards, use a spaced-repetition method of review (see below). 

A new user would want to begin by creating several flash cards. A button on the main menu directs the user to a form where the create can create a front side (with a question or word) and a back side for each flash card. 

There are 2 types of flach card reviews: (1) full review; and (2) spaced-repetition. A full-review quiz will review every card the user has created. The spaced-repetition quiz will review (1) cards the user got wrong the last time and (2) any cards the user has not reviewed recently (5 hour-delay first, then a 2-day delay for spaced-reptition of correct cards).

When the user is reviewing flash cards, the user will view the front side of a flash card. When the user is ready, the user can click to view other side and check whether the user was right or wrong. The user clicks on 'right' or 'wrong' buttons to record whether the user got it right. If the card is 'wrong', that information is saved in the database and the card will be re-reviewed in the difficult set of cards. A card that is right would only be reviewed in a full review of all cards.

Each card can also be deleted, or edited and updated.

DEK is deployed at:  https://dek-flashcards.herokuapp.com/

## Technologies

### React
The App uses React for the front-end file structure and routing between pages.

### Express
The Express-Backend handles the requests that the front end sends. This happens via routing requests. 

### Postgres/SQL
The App uses database tables that each set a certain point of time in the future when the card should prompt again for the 'curated' quiz option. 

### Auth
The app uses auth for unique user registration/login.

### Sample Code

Here is the code in client/src/App.js for routing/navigation through the App:

    <Router>
        <div className="App">
          <div className="main">
            <Route exact path="/" render={() => <Welcome />} />
            <Route exact path="/aboutapp" render={() => <AboutApp />} />
            <Route exact path="/main" render={() => <Main handleRedirect={this.handleRedirect} firstname={this.state.user.firstname}/>} />
            <Route exact path="/register" render={() => <Register handleRegisterSubmit={this.handleRegisterSubmit} />} />
            <Route exact path="/login" render={() => <Login handleLoginSubmit={this.handleLoginSubmit} />} />
            <Route exact path="/userprofile" render={() => <UserProfile handleRedirect={this.handleRedirect} id={this.state.user.id} username={this.state.user.username} firstname={this.state.user.firstname} lastname={this.state.user.lastname} email={this.state.user.email}/>} />
            <Route exact path="/createcard"  render={() => <CreateCard handleRedirect={this.handleRedirect} state={this.state} />} />
            <Route exact path="/pickquiztype" component={PickQuizType} />
            <Route exact path="/quizscreen" render={() => <QuizScreen handleRedirect={this.handleRedirect} state={this.state} />} />
            <Route exact path="/curatedquizscreen" render={() => <CuratedQuizScreen handleRedirect={this.handleRedirect} state={this.state} />} />
            <Route exact path="/editcards" render={() => <EditCards handleRedirect={this.handleRedirect} state={this.state} />} />
            {this.redirectTo()}
          </div>
        </div>
    </Router>


Here is the code in models/deck.js for filtering the flashcards for the 'curated quiz':

    Deck.findByTime = (user_id, moment) => {
        return db.query(`
            SELECT * FROM deck
            WHERE user_id=$1
            AND 
            (setTime < $2
            OR correct=false)
        `, [user_id, moment])
    }

## Making of the App
DEK was a team effort. Brandon Hew played the role of our Git dictator, resolving code conflicts as each member submitted code (as well as fixing the team's bugs and errors along the way). Briseida Montiel worked primarily on the front-end design/CSS code. Daniel Beebe worked primarily on the React components and React routing/navigation through the App. Ivan Alvarian worked primarily on back-end, setting up the App's database and utilizing it in taking a quiz.

## Future Improvements
With additional time, we would like to improve this app by: (1) allowing the user to create multiple decks; and (2) add additional visual effects when the user takes a quiz.


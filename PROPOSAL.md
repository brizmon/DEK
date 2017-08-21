# Proposal - DEK
Team members: Brandon Hew, Briseida Montiel, Daniel Beebe, Ivan Alvarian

![team_image](./images/Team-Photo.JPG)

## User Story

'DEK' is an app which allows users to create their own unique stack of flash cards to aid in the learning process. This app can be used to learn a new language (foreign or programming) or any new subject which requires memorization.

When a new user visits the app, the first screen is a Welcome screen where the user can register to create a unique login. A registered user can simply login.

After loggging in, the user will be directed to the main menu. At the main menus, the user can choose to create a new flash card, review all flash cards, use a spaced-repetition method of review (see below). The user will also see a grand total score for how many cards the user got right during the user's flash card reviews.

A new user would want to begin by creating several flash cards. A button on the main menu would direc the user to a form where the create can create a front side (with a question or word) and a back side for each flash card. 

There will be 2 types of flach card reviews: (1) full review; and (2) spaced-repetition. A full-review quiz will review every card the user has created. The spaced-repetition quiz will review (1) cards the user got wrong the last time and (2) any cards the user has not reviewed recently (maybe 7 days; exact about of time yet to be determined).

When the user is reviewing flash cards, the user will view the front side of a flash card. When the user is ready, the user can click to view other side and check whether the user was right or wrong. The user clicks on 'right' or 'wrong' buttons to record whether the user got it right. If the card is 'wrong', that information is saved in the database and the card will be re-reviewed in the difficult set of cards. A card that is right would only be reviewed in a full review of all cards.

Each card can also be deleted, or edited and updated.

## Wireframes

### Welcome screen - User can login or register
![img1](./images/1.jpg)

### Register

![img2](images/2.jpg)

### Main Menu Screen

![img4](images/4.jpg)

### Creating a New Flash Card

![img3](images/3.jpg)
![img5](images/5.jpg)
![img6](images/6.jpg)
![img7](images/7.jpg)

### Taking the Quiz

![img8](images/8.jpg)
![img9](images/9.jpg)
![img10](images/10.jpg)
![img11](images/11.jpg)
![img12](images/12.jpg)
![img13](images/13.jpg)
![img14](images/14.jpg)
![img14](images/15.jpg)
![img14](images/16.jpg)


## Technology

The App will utilize the following technology

### React
The App will use React to create the front-end file structure.

### Express
The Express-Backend will handle the requests that the front end sends. This happens via routing requests. 

### SQL
The approach of our card system will be sorting the user's cards into an array of database tables that each dictate a certain point of time in the future when the card should prompt again. Each card will have a tally coloumn that updates based on whether the user got the question right or wrong.

### Auth
As typical authorization happens, the user will get to a register/login screen as a landing page. From there the user will send a request to the server which will start a connection. 

### To Be Determined: Third Party API Call or Testing
The team is looking for a third-party API call it can use to add trivia of the day, or possibly a word of the day to display on the welcome page or the main menu page.

Alteratively, the team may choose to implement testing to catch any bugs in the app.

## Phases of Completion

* Phase -3: Monday
    * Create basic file structure
    * Add Auth
    * Create database
    * Component for Main Menu
    * Component for Creating Flash Card
    * Basic CSS Style

* Phase -2: Tuesday
    * CSS animations for flash card review/flip
    * Components for reviewing all flash cards
    * Separate Component for reviewing only the hard flash cards
    * Complete basic app logic/functionality

* Phase -1: Wednesday
    * CSS Adapative or Reactive design for screen size
    * Finalize routing, ensure all components work together
    * Finalize design

* Phase 0 (MVP): Thursday
    * Identify any bugs
    * Fix bugs
    * Initial deployment of App

* Phase 1: Friday
    * Improvements to appearance
    * Add any additional features if sufficient time remaining


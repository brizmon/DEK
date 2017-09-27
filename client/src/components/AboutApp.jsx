
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutApp = () => {

  return (
    <div className='about-app'>

      <div className="about-app-message">
        <h2>About DEK</h2>
        <p>DEK is an app which allows you to create your own unique stack of flash cards to aid in the learning process. DEK can be used to learn a new language, study history, or learn any subject requiring memorization.</p>
        <p>To navigate to the main menu, you can always click DEK in the upper-left corner. From the main menu, you can choose to create flash cards to study. To study the cards, you can choose from two types of quiz: the 'basic' quiz tests you on all of your cards; the 'curated' quiz uses spaced reptition technolocy to test you only on cards you got wrong and cards you haven't studied in a while.</p>
      </div>

      <Footer />

    </div>
    )
}

export default AboutApp;

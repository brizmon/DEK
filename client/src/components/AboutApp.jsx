
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutApp = () => {

  return (
    <div>
      <div className='container about'>
        <h2 className="center-align about-headline">About DEK</h2>
        <div className="row">
          <div className="col s12 m5 l5 ">
                <p className="first-p">DEK is an app which allows you to create your own unique stack of flash cards to aid in the learning process. DEK can be used to learn a new language, study history, or learn any subject requiring memorization.</p>
          </div>
          <div className="col s12 m2 l2"></div>
          <div className="col s12 m5 l5">
                <p className="second-p">To navigate to the main menu, you can always click DEK in the upper-left corner. From the main menu, you can choose to create flash cards to study. To study the cards, you can choose from two types of quiz: the 'basic' quiz tests you on all of your cards; the 'curated' quiz uses spaced reptition technolocy to test you only on cards you got wrong and cards you haven't studied in a while.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
}

export default AboutApp;

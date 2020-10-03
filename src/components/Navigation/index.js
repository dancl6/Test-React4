import React from 'react';
import Project from '../Project';
import About from '../About';
import Resume from '../Resume';
// import NavTabs from '../NavTabs';
import ContactForm from '../ContactForm'
function Navigation(props) {

  const {

    contactSelected

  } = props;


    const renderPage = () => {
      switch(contactSelected) {
      case `About`:
        return <About />;
      case `Resume`:
        return <Resume />;
      case `Project`:
        return <Project />;
      case `Contact`:
        return <ContactForm />;
      default:
    }
  };


    return (
    <div>

      <div>
        {
          // Render the component returned by 'renderPage()'
          // YOUR CODE HERE
          //
          renderPage()
        }
      </div>
    </div>
    );
    }

    export default Navigation;
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
// import Project from './components/Project';
// import ContactForm from './components/ContactForm'

function App() {
    const [contactSelected, setContactSelected] = useState("About");
    // const [categories] = useState([
    //   "About", "Resume", "Project", "Contact"
    // ])
 
return (
    <div>
        <Header
        // categories={categories}
        // contactSelected={contactSelected}
        setContactSelected={setContactSelected}        
          ></Header>
      <main>
        {/* {!contactSelected ? (
          <> */}
            <Navigation contactSelected={contactSelected}/>

          {/* </> */}
        {/* ) : ( */}
            {/* <ContactForm></ContactForm> */}
          {/* )} */}
      </main>
      <Footer></Footer>
    </div>
)


}

export default App;
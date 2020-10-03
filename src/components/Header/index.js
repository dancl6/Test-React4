import React from 'react';


function Header(props) {

    const {

      setContactSelected
    } = props;

    return (
        <header className="flex-row px-1 header-stylin">
        <h2>
          <div className = "color-font" >
            Dan Lyons Portfolio
          </div>
        </h2>
        <nav>
          <ul className="flex-row">    



            <a className="nav-stylin" data-testid="about" href="#about" >
            <span onClick={() => {
                 setContactSelected("About");
                
                //  props.handlePageChange(categories[0].value=true)
                }}>
            About me
            </span>
            </a>           
            <a className="nav-stylin" data-testid="portfolio" href="#portfolio" >
            <span onClick={() => {
                 setContactSelected("Project");
                //  props.handlePageChange(categories[1].value=true)
                }}>
            Portfolio
            </span>
            </a>            
            <a className="nav-stylin" data-testid="contact" href="#contact" >
            <span onClick={() => {
                 setContactSelected("Contact");

                }}>Contact</span>
            
            </a>            
            <a className="nav-stylin" data-testid="resume" href="#resume" >
            <span onClick={() => {
                 setContactSelected("Resume");
                //  props.handlePageChange(categories[2].value=true)
                }}>
            Resume
            </span>
            </a>            
            </ul>
          </nav>
          </header>
    );
    }

    export default Header;
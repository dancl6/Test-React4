import React from 'react';


function Header(props) {

    const {
      // categories = [],
      // setCurrentCategory,
      // currentCategory,
      // contactSelected,
      setContactSelected
    } = props;
    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(currentCategory.name);
    //   }, [currentCategory]);
    // useEffect(() => {
    //     document.title = "title";
    //   }
    return (
        <header className="flex-row px-1 header-stylin">
        <h2>
          <a data-testid="link" href="/">
            Dan Lyons Portfolio
          </a>
        </h2>
        <nav>
          <ul className="flex-row">    

          {/* {categories.map((category) =>(
             
             <a className="nav-stylin" >
                 <span onClick={() => {
                     setCurrentCategory(category);
                     setContactSelected(false);
                 }}>{category.name}</span>
             </a>

          ))} */}

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
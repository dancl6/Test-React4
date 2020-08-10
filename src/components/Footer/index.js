import React from 'react';
let  imageLinkedin = 'LinkedInImage.png';
let  imageGitHub = 'GitHubImage.png';
let  imageFacebook = 'FacebookImage.png';

function Footer() {
    return (
        <h1 className= "flex-row">
        <a className="img-stylin" href="https://www.linkedin.com/in/dan-lyons-41380337/" ><img alt="Linkedin" src = {process.env.PUBLIC_URL+"/"+imageLinkedin}/></a>
        <a className="img-stylin"  href="https://github.com/dancl6" ><img alt="GitHub" src = {process.env.PUBLIC_URL+"/"+imageGitHub}/></a>
        <a className="img-stylin"  href="https://www.facebook.com/dan.lyons.583/" ><img alt="Facebook" src = {process.env.PUBLIC_URL+"/"+imageFacebook}/></a>
        </h1>
    )
}

export default Footer;
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

import '../../index.css';
// import image1 from '../../../public/PasswordGenerator.png'
// export default {
//     image1
// }
function Project() {


    const [projects] = useState([
        {
            github: 'https://github.com/dancl6/Javascript-PasswordGenerator',
            deployed: 'https://dancl6.github.io/Javascript-PasswordGenerator/',
            image: 'PasswordGenerator.png',
            name: 'Javascript Password Generator'
        },
        {
            github: 'https://github.com/dancl6/Coding-Quiz_Challenge',
            deployed: 'https://dancl6.github.io/Coding-Quiz_Challenge/',
            image: 'CodingQuizChallenge.png',
            name: 'Javascript Coding Quiz Challenge'
        },
        {
            github: 'https://github.com/dancl6/Daily-Scheduler',
            deployed: 'https://dancl6.github.io/Daily-Scheduler/',
            image: 'DailyScheduler.png',
            name: 'Daily Scheduler'   
        },
        {
            github: 'https://github.com/dancl6/Weather_API/settings',
            deployed: 'https://dancl6.github.io/Weather_API/',
            image: 'WeatherAPI.png',
            name: 'Weather API'
        },
        {
            github: 'https://github.com/dancl6/PWA-Budget-Tracker',
            deployed: 'https://blooming-tundra-82006.herokuapp.com/',
            image: 'BudgetTracker.png',
            name: 'Budget Tracker'
        },
        {
            github: 'https://github.com/DHernandez24e/tech-stop-n-shop/tree/master',
            deployed: 'https://arcane-anchorage-18356.herokuapp.com/',
            image: 'TechStopNShop.png',
            name: 'Tech Stop-N-Shop'
        }
    ])
    console.log("i am at projects console log")
    console.log(projects[0].image)
    return (
    <div>
        {projects.map((project,i) =>(

    <Card  key={project.name} className="bg-dark text-white card-background set-padding">
    <Card.Img key={project.image} src= {process.env.PUBLIC_URL+"/"+project.image} alt="Card image" className = "image-size"/>
    
    <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
        {/* This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer. */}
        </Card.Text>
        <Card.Link key={project.github} href={project.github}>GitHub</Card.Link>
        <Card.Text></Card.Text>
        <Card.Link key={project.deployed} href={project.deployed}>{project.name}</Card.Link>
    </Card.ImgOverlay>
    </Card>

        ))}
    </div>
    )
}

export default Project;
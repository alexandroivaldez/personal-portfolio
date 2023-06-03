import React, { useState , useRef, useEffect} from 'react';

import "./NavBar.css"

import BeepsContainer from '../BeepsContainer/BeepsContainer';

function NavBar(props) {

  const [count, setCount] = useState(0);
  let btns = [];

  useEffect(() => {
    btns = document.querySelectorAll(".nav-container > button")
  })
  
  const beepData = [
    [
      {bioText: "Hello, thank you for visiting my personal portfolio! I have put a lot of information and passion into this portfolio so I encourage you to take a look around and explore at your leisure. Thank you for dropping by!", imgSrc: "test3.png", additionalLink: "https://github.com/alexandroivaldez"},
      {bioText: "Project #1 is this website. It is designed as a clone of Twitter's UI. It showcases my ability to take a design and recreate it. I built it using my favourite JS library: React. If you click on 'tweets' picture, it will lead you to a live demo of each project. In this case, this gif leads you to the GitHub repository for this website.", imgSrc: "spoderman.gif", additionalLink: "https://github.com/alexandroivaldez/study-space"},
      {bioText: "Designed to support healthy study habits, StudySpace offers a dedicated space featuring a range of useful features, including a widget for playing lo-fi music, a built-in Pomodoro timer, and a to-do list app that is a must-have for any portfolio project. I utilize this project on a daily basis while studying.", imgSrc: "study-space.png", additionalLink: "https://study-space-av.netlify.app/"},
      {bioText: "Designed as a mock cooking school landing page, this project showcases the utilization of HTML and CSS skills, incorporating flexbox and media queries to deliver a complete user interface that is optimized for any device.", imgSrc: "cookingSchool.png", additionalLink: "https://study-space-av.netlify.app/"},
      {bioText: "This was a special request from the academics team at KIPP Connect High School and I was happy to oblige. This tool has been utilized by students to calculate the required midterm grades needed to attain their desired semester grade since 2021.", imgSrc: "midtermCalc.png", additionalLink: "https://study-space-av.netlify.app/"}
    ],
    [
      {bioText: "My name is Alexandro Valdez and I'm a front-end developer for hire. I'm currently a coding instructor at Mimo, one of the largest learn to code platforms in the world!", imgSrc: "beep1.jpg"},
      {bioText: "I graduated from Stephen F. Austin State University with a Bachelor of Science in Computer Science", imgSrc: "sfa-pic.jpg", link: "https://www.sfasu.edu/academics/colleges/sciences-math/computer-science"},
      {bioText: "Since graduating I took an alternative path and began teaching coding at various schools! Test", imgSrc: "cookingSchool.png", link: "https://www.sfasu.edu/academics/colleges/sciences-math/computer-science"}    
    ],
    [
      {bioText: "If you're interested in reaching out to me please click on the picture below to be sent to my resume download. There you can find my phone number, email and LinkedIn url.", imgSrc: "resume-pic.png"}
    ],
    [
      {bioText: `One of my life goals is to visit 30 countries before I turn 30, so far I've visited 23. Check out my Instagram to see my travel pictures! 🌎`, imgSrc: "IMG_7604.jpg"},
      {bioText: "Currently my favoruite hobby is painting Warhammer 40k minuatures!", imgSrc: "warhammer-pic.jpg"}
    ]
  ]

  const updateActive = (num) => {
    for(let i = 0; i < btns.length; i++){
      i == num ? btns[i].classList = ("nav-btn active") : btns[i].classList = ("nav-btn");
    }
  }

  const buttonClicked = (e) => {
    //if work clicked change state to 
    if(e.currentTarget.getAttribute("data-value") == "work"){
      setCount(0);
      updateActive(0);
      // e.currentTarget.classList.toggle("active");
    } else if (e.currentTarget.getAttribute("data-value") == "aboutMe") {
      setCount(1);
      updateActive(1);
    } else if (e.currentTarget.getAttribute("data-value") == "contact") {
      setCount(2);
      updateActive(2);
    } else {
      setCount(3);
      updateActive(3);
    }
  }

  return (
    <div>
      <div className='nav-container' style={{backgroundColor: props.currentBackgroundColor}}>
          <button className='nav-btn active' data-value="work" onClick={buttonClicked}>Work</button>
          <button className='nav-btn' data-value="aboutMe" onClick={buttonClicked}>About Me</button>
          <button className='nav-btn' data-value="contact" onClick={buttonClicked}>Contact</button>
          <button className='nav-btn' data-value="extra" onClick={buttonClicked}>Extra</button>
      </div>
      <BeepsContainer currentBackgroundColor={props.currentBackgroundColor} beepData={beepData[count]} />
    </div>
  )
}

export default NavBar
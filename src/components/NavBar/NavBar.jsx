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
      {bioText: "Hello, thank you for visiting my personal portfolio! I poured a lot of information and passion into this portfolio so I encourage you to take a look around and explore at your leisure. Thank you for dropping by!", imgSrc: "test3.png", additionalLink: "https://github.com/alexandroivaldez"},
      {bioText: "Project #1 is this website, which is designed as a clone of Twitter's UI. It showcases my ability to take a design and recreate it using my favourite JS library: React. Every 'tweet' has a picture that if clicked on, will lead you to a live demo of each project. In this case, the spiderman gif below leads you to the GitHub repository for this website.", imgSrc: "spoderman.gif", additionalLink: "https://github.com/alexandroivaldez/study-space"},
      {bioText: "Project #2 was designed to support healthy study habits amongst high school students. StudySpace offers a dedicated 'study space' that features a variety of useful widgets. These widgets include: a widget for playing lo-fi music, a Pomodoro timer to manage the study/break ratio, a to-do list for task management and sticky notes for quick note taking. Click on the image below to try it out!", imgSrc: "study-space.png", additionalLink: "https://study-space-av.netlify.app/"},
      {bioText: "Project #3 is a web app that combines the popular SuperFight card game with OpenAI's DALL-E image generation. It was built using Velo/EditorX by Wix and OpenAI's API. Click on the image below to play CardFightAI.", imgSrc: "pg5a.png", additionalLink: "https://alexandroivaldez.editorx.io/cardfightai"},
      {bioText: "Project #4 is a mock cooking school landing page. This project showcases the utilization of HTML and CSS skills, incorporating flexbox and media queries to deliver a complete user interface that is optimized for any device. Click on the picture below to see the site, then shrink the window width to view the UI changes.", imgSrc: "cookingSchool.png", additionalLink: "https://glittering-phoenix-317904.netlify.app/"},
      {bioText: "Project #5 was a built as a response to a need. While working at KCHS I noticed that the students were struggling to determine the midterm grade they needed to attain their desired overall semester grade. I built this to help the students ease their anxiety. While technically speaking this project may not be lavish or complex, this project shows my problem solving abilities and commitment to using software programming to solve everyday problems. This resource has been used by students since 2021.", imgSrc: "midtermCalc.png", additionalLink: "https://alexandroivaldez.github.io/KCHSMidtermCalculator/"}
    ],
    [
      {bioText: "My name is Alexandro Valdez, and I'm currently a coding instructor at Mimo, one of the largest 'learn-to-code' platforms in the world! I'm looking for a new role as a front-end developer where I can apply my technical skills and the leadership/soft skills I've gained from teaching.", imgSrc: "me.png"},
      {bioText: "I graduated from Stephen F. Austin State University with a Bachelor of Science in Computer Science. During my time at SFA, I took classes such as Data Structures, Discrete Mathematics, Algorithm Analysis, and Database Management.", imgSrc: "sfa-pic.jpg", additionalLink: "https://www.sfasu.edu/academics/colleges/sciences-math/computer-science"},
      {bioText: "When I graduated, I was the only Hispanic student who walked the stage for CS. Inspired by this experience, I made a decision to give back to the community by starting to teach computer science at underrepresented schools. I had the opportunity to teach at an online coding bootcamp as well as at a high school in one of the most culturally diverse areas in Texas.", imgSrc: "gradPic.jpg", link: "https://www.sfasu.edu/academics/colleges/sciences-math/computer-science"}    
    ],
    [
      {bioText: "If you're interested in reaching out to me, please click on the picture below to be directed to my resume download. There, you can find my phone number, email, and LinkedIn URL.", imgSrc: "resume-pic.png", additionalLink: "https://black-sibelle-80.tiiny.site/"}
    ],
    [
      {bioText: `One of my life goals is to visit 30 countries before I turn 30. So far, I've visited 23. Click on the picture below to check out my Instagram and see my travel pictures! 🌎`, imgSrc: "IMG_7604.jpg", additionalLink: "https://www.instagram.com/av.iex/"},
      {bioText: "When I'm not coding, you can find me painting Warhammer 40k miniatures. I truly enjoy the tranquil, creative, and technical aspects of miniature painting. Currently, I'm working on completing my Space Wolf successor chapter.", additionalLink:"https://www.games-workshop.com/en-US/Home", imgSrc: "warhammer-pic.jpg"},
      {bioText: "My second favorite hobby is learning French. My girlfriend is a fluent speaker, so I'm doing my best to catch up with her. I typically study using Duolingo and complement it with a Udemy course.", imgSrc: "frenchPic.jpeg"}
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
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
      {bioText: "Thank you for visiting my personal portfolio, which is inspired by Twitter's user interface. In this portfolio, each 'tweet' represents a personal project that I have undertaken, and you can simply click on the picture of the tweet to be directed to a related page. I encourage you to take a look around and explore my portfolio at your leisure. Thank you for dropping by! 👨🏽‍💻", imgSrc: "welcome.jpg"},
      {bioText: "Designed for cooking schools, this project showcases the utilization of HTML and CSS skills, incorporating flexbox and media queries to deliver a complete user interface (UI) that is optimized for any device.", imgSrc: "cookingSchool.png"},
      {bioText: "Designed to support my study habits, this project offers a dedicated space featuring a range of useful features, including a section for playing lo-fi music, a built-in Pomodoro timer, and a to-do list app that is a must-have for any portfolio project. I utilize this project on a daily basis while studying.", imgSrc: "cookingSchool.png"},
      {bioText: "Although it may not be the most glamorous project, it was a special request from the academics team at KIPP Connect High School and I was happy to oblige. This tool has been utilized by students to calculate the required midterm grades needed to attain their desired semester grade since 2021.", imgSrc: "midtermCalc.png"}
    ],
    [
      {bioText: "My name is Alexandro Valdez and I'm a front-end developer for hire. I'm currently a coding instructor at Mimo, one of the largest learn to code platforms in the world!", imgSrc: "beep1.jpg"},
      {bioText: "I graduated from Stephen F. Austin State University with a Bachelor of Science in Computer Science", imgSrc: "cookingSchool.png", link: "https://www.sfasu.edu/academics/colleges/sciences-math/computer-science"}
    ],
    [
      {bioText: "If you're interested in reaching out to me", imgSrc: "beep1.jpg"},
      {bioText: "Test!", imgSrc: "cookingSchool.png"}
    ],
    [
      {bioText: `One of my life goals is to visit 30 countries before I turn 30, so far I've visited 23. Check out my Instagram to see my travel pictures! 🌎`, imgSrc: "IMG_7604.jpg"},
      {bioText: "Currently my favoruite h painting Warhammer 40k minuatures!", imgSrc: "beep1.jpg"}
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
      <div className='nav-container'>
          <button className='nav-btn active' data-value="work" onClick={buttonClicked}>Work</button>
          <button className='nav-btn' data-value="aboutMe" onClick={buttonClicked}>About Me</button>
          <button className='nav-btn' data-value="contact" onClick={buttonClicked}>Contact</button>
          <button className='nav-btn' data-value="extra" onClick={buttonClicked}>Extra</button>
      </div>
      <BeepsContainer beepData={beepData[count]} />
    </div>
  )
}

export default NavBar
import React from 'react'
import "./TrendingChart.css"

function TrendingChart() {
  return (
    <div className='trending-chart-container'>
        <h3>Trending Skills</h3>
        <div className='trending-box'>
            <div className='trending-top'>
                <h6>Trending in Front-End Dev</h6>
                <h6>...</h6>
            </div>
            <h4>React</h4>
        </div>
        {/* break */}
        <div className='trending-box'>
            <div className='trending-top'>
                <h6>Trending in JavaScript</h6>
                <h6>...</h6>
            </div>
            <h4>TypeScript</h4>
        </div>
        {/* break */}
        <div className='trending-box'>
            <div className='trending-top'>
                <h6>Trending in UI/UX</h6>
                <h6>...</h6>
            </div>
            <h4>Figma</h4>
        </div>
        {/* break */}
        <div className='trending-box'>
            <div className='trending-top'>
                <h6>Trending in Coding</h6>
                <h6>...</h6>
            </div>
            <h4>Java</h4>
        </div>
        {/* break */}
        <div className='trending-box'>
            <div className='trending-top'>
                <h6>Trending in Leadership</h6>
                <h6>...</h6>
            </div>
            <h4>Team Management</h4>
        </div>
        {/* break */}
        <div className='trending-box'>
            <div className='trending-top'>
                <h6>PostgreSQL</h6>
                <h6>...</h6>
            </div>
            <h4>Databases</h4>
        </div>
        {/* break */}
        <div className='trending-box'>
            <div className='trending-top'>
                <h6>Trending in Backend Dev</h6>
                <h6>...</h6>
            </div>
            <h4>NodeJS</h4>
        </div>
        {/* break */}
        <div className='trending-box'>
            <div className='trending-top'>
                <h6>Trending in Styling</h6>
                <h6>...</h6>
            </div>
            <h4>SASS</h4>
        </div>
        {/* break */}
        {/* <div className='trending-box'>
            <div className='trending-top'>
                <h6>Trending in Backend Dev</h6>
                <h6>...</h6>
            </div>
            <h4>Express</h4>
        </div> */}
        <h5 style={{color: "#00aced"}}>Show More</h5>
    </div>
  )
}

export default TrendingChart
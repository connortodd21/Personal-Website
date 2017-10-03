import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'



 function visitPage(){
        window.location='https://github.com/connortodd21';
    }

function github(props) {


  return (
    <div className="aboutMe">
      <div className="aboutMe">
      <div className="doc">
      <button
        type="button"
        className="linkedIn"
        id="linkedIn"
        onClick={visitPage()}
        >
      </button>
      </div>
    </div>
    </div>
  )
}

export default github

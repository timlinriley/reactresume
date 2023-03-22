import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
        <Link to="/">
            <div>Home</div>
        </Link>

        <Link to="/Summary">
            <div>Summary</div>
        </Link>

        <Link to="/Education">
            <div>Education</div>
        </Link>

        <Link to="/Experience">
            <div>Experience</div>
        </Link>

        <Link to="/Skills">
            <div>Skills</div>
        </Link>

    </div>
  )
}

export default Nav
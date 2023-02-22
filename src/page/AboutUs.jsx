import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/shared/Card'
function AboutUs() {
  return (
   <Card>
    <div className="about">
    <h1>About This Project</h1>
    <p>This is a react app to leave feedback for a product or service</p>
    <p>Version : 1.0.0</p>
    <p>
      <Link to="/">Back To Home</Link>
    </p>
    </div>
   </Card>
  )
}

export default AboutUs

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProfileCard from './Components/ProfileCard.jsx'
import Button from './Components/Button.jsx'
import Card from './Components/Card.jsx'

function App() {
  
  return (
    <>
      <ProfileCard name="Anitha" age={22} role="Developer">
        <p>Likes React and Javascript</p>
      </ProfileCard>
      <ProfileCard name="Keerthi" age={22} role="Designer">
        <p>Loves UI Design and Creativity</p>
      </ProfileCard>
      <ProfileCard name="Jeevan" age={20} role="Tester">
        <p>Enjoys Testing </p>
      </ProfileCard>


      <Button color="blue" size="large"> Submit </Button>
      <Button color="green" size="medium"> Save </Button>
      <Button color="red" size="small"> Clear </Button>


        <Card title="Product" footer="Rs.999">
           <p>This is a great product.</p>
            <p>High quality and affordable.</p>
        </Card>

        <Card title="About" footer="Learn more">
          <p>Software company we develop great ideas.</p>
          <p>We build useful web applications.</p>
        </Card>

        <Card title="Contact" footer="Contact Us">
          <p>Email: ani@gmail.com</p>
          <p>Phone: 1234567890</p>
        </Card>

    </>
  )
}

export default App

import LinkButton from "../components/LinkButton"
import "./About.scss"

const About = () => {
  document.body.style.backgroundImage = "url('./images/02d.png')"

  return (
    <div>
      <LinkButton name="Home" path="/" />
      <div className="app-description">
        <p>
          This app has been built with React and uses OpenWeather api to pull weather information. <br />
          Feel free to visit my <a target="_blank" href="https://github.com/jashioq/Weather_App">GitHub profile</a> to check out the code.
        </p>
      </div>
    </div>
  )
}

export default About

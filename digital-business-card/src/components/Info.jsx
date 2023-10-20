import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Info() {
  return (
    <section className="info-container">
      <img src="../mustapha-anthonio.jpg" alt="" className="info-image"/>
      <h1 className="info-name">Mustapha Anthonio</h1>
      <p className="info-role">Frontend Developer</p>
      <a href="https://portfolio-project-liard-eight.vercel.app/" className='info-link'><p className="info-website">mustaphaanthonio.website</p></a>
      <div>
        <span className='info-button-container'>
          <a href="mailto:engamo123@gmail.com" className='info-link'><button className='info-button info-button1'><FontAwesomeIcon icon={faEnvelope} className='info-icons email-icon'/>Email</button></a>
          <a href="https://www.linkedin.com/in/mustapha-anthonio?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='info-link'><button className='info-button info-button2'><FontAwesomeIcon icon={faLinkedin} className='info-icons'/>Linkedin</button></a>
        </span>
      </div>
    </section>
  )
}
export default Info
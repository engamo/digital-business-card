import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Info() {
  return (
    <section className="info-container">
      <img src="../mustapha-anthonio.jpg" alt="" className="info-image"/>
      <h1 className="info-name">Mustapha Anthonio</h1>
      <p className="info-role">Frontend Developer</p>
      <p className="info-website">mustaphaanthonio.website</p>
      <div>
        <span className='info-button-container'>
          <button className='info-button info-button1'><FontAwesomeIcon icon={faEnvelope} className='info-icons'/>Email</button>
          <button className='info-button info-button2'><FontAwesomeIcon icon={faLinkedin} className='info-icons'/>Linkedin</button>
        </span>
      </div>
    </section>
  )
}
export default Info
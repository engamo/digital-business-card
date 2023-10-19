import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <section className='footer-container'>
      <div className='icons-container'>
        <FontAwesomeIcon icon={faXTwitter} className='icons'/>
        <FontAwesomeIcon icon={faFacebookF} className='icons'/>
        <FontAwesomeIcon icon={faInstagram} className='icons'/>
        <FontAwesomeIcon icon={faGithub} className='icons'/>
      </div>
    </section>
  )
}
export default Footer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <section className='footer-container'>
      <div className='icons-container'>
        <a href="https://twitter.com/engamo123?t=Thea6mSomUlwq_EvXys8tQ&s=09" className='footer-link'><FontAwesomeIcon icon={faXTwitter} className='icons'/></a>
        <a href="https://www.facebook.com/profile.php?id=100002504390546&mibextid=9R9pXO" className='footer-link'><FontAwesomeIcon icon={faFacebookF} className='icons'/></a>
        <a href="https://instagram.com/engamo123?igshid=MzMyNGUyNmU2YQ==" className='footer-link'><FontAwesomeIcon icon={faInstagram} className='icons'/></a>
        <a href="https://github.com/engamo" className='footer-link'><FontAwesomeIcon icon={faGithub} className='icons'/></a>
      </div>
    </section>
  )
}
export default Footer
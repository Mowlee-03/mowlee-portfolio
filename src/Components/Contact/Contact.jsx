import React from 'react'
import './Contact.css'
import email from '../../Assets/email.png'
import linkin from '../../Assets/linkedin.png'

const Contact = () => {
  return (
    <>
<div id="contact">
<h1 class="title1">Contact Me</h1>
<div class="contact-info-upper-container">
  <div class="contact-info-container">
    <img
      src={email}
      alt="Email icon"
      class="icon "
    />
    <p class='pp'><a href="mailto:mowleemm@gmail.com">mowleemm@gmail.com</a></p>
  </div>
  <div class="contact-info-container">
    <img
      src={linkin}
      alt="LinkedIn icon"
      class="icon "
    />
    <p><a href="https://www.linkedin.com/in/mowleeshwaran-pr0file/">LinkedIn</a></p>
  </div>
</div>
<p class="more more-contact">More Contact...</p>

</div>
    </>
  )
}

export default Contact

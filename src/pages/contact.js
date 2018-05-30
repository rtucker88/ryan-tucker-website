import React from 'react'

const ContactPage = () => (
  <div id="contact">
    <h2 className="major">Contact</h2>
    <form name="contact" method="post" data-netlify="true" action="/success">
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"/>
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email"/>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4"></textarea>
      </div>
      <ul className="actions">
        <li><input type="submit" value="Send Message" className="special"/></li>
        <li><input type="reset" value="Reset"/></li>
      </ul>
    </form>
  </div>
)

export default ContactPage

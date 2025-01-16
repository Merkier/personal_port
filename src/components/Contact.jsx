import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className='contact'>
      <div className='contactFrame'>
        <h2>Contact Us</h2>
        <p>
          We're here to assist you! Feel free to reach out using the contact information below.
        </p>
        <div className='contact-info'>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> support@yourbusiness.com
          </p>
          <p>
            <strong>Address:</strong> 123 Main Street, Suite 400, Anytown, USA
          </p>
        </div>
        <div className='business-hours'>
          <p><strong>Business Hours:</strong></p>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 10:00 AM - 3:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55849.54743011474!2d12.9301566!3d55.6049818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a2d13d1a07b1%3A0xa03459f55f1dc9db!2sMalm%C3%B6%2C%20Sweden!5e0!3m2!1sen!2sus!4v1687982372134!5m2!1sen!2sus" 

  width="100%"
  height="100%"
  style={{ border: "0" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
      </div>

    </div>
  );
}

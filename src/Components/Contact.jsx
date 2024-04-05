import React from 'react'

export default function Contact() {
  return (
    <div style={{ marginTop: "120px" }}>
      <div>
        <h1>Contact page</h1>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.28782400545!2d79.08821747380216!3d21.180722182544727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c13ccc72dcab%3A0x83400de59cf114fd!2sMahesh%20Patangwala%20And%20General%20Storesll%20wholesale%20perfume%20ll%20wholesale%20deodrents%20perfume%20ll%20ear%20piercing!5e0!3m2!1sen!2sin!4v1712043760114!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0, width: "100%" }}
          allowfullscreen={true}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

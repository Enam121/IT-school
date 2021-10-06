import React from 'react';

const Contact = () => {
  const textStyle = { color: '#6c757d', fontSize: '19px', };

  return (
    <div className="py-5">
      <h3 style={{ color: '#012245' }}>Contact</h3>
      <div style={textStyle}>
        <p>
          For more information, please cotact with us. <br />
          We are available on 10AM to 7PM.
        </p>
        <p>
          <i class="fas fa-phone-square-alt"></i>
          <span>  93334555</span>
        </p>
        <p>
          <i class="fas fa-envelope-square"></i>
          <span>  itshcool@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
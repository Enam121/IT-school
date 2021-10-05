import React from 'react';
import '../Footer/footer.css'

const About = () => {
  return (
    <div className="py-5 w-50 mx-auto ">
      <h2>What is IT School?</h2>
      <div className="pt-2 justity text-muted fs-5 ">
        <p>
          IT School is a online store of knowledge information technology.
        </p>
        <p>
          Your career is defined by what you know and how well you know it.
        </p>
        <p>
          With our platform, you can benchmark and prove your knowledge, keep up with emerging trends and build in-demand skills in areas like DevOps, machine learning, cloud, security and infrastructure.
        </p>
        <p>
          we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts, our platform helps businesses and individuals benchmark expertise across roles, speed up release cycles and build reliable, secure products.
        </p>
      </div>
    </div>
  );
};

export default About;
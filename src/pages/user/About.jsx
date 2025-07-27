import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">


      <section className="about-content">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>ShopNest</strong> – your trusted online marketplace for quality and affordability.
            <br /><br />
            Since 2020, we've connected customers with top products in electronics, fashion, home essentials, and more.
            Our goal is simple: <em>make online shopping seamless and joyful.</em>
            <br /><br />
            We prioritize customer satisfaction, fast shipping, and secure payments to provide the best shopping experience.
          </p>
        </div>

        <div className="about-image">
          <img src="https://plus.unsplash.com/premium_photo-1668383778611-a817740e1b6b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ShopNest About Us" />
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZHqWA3ajb0g2TmGMYzSoRpiR5HqjelAKfw&s" alt="Team Member" />
            <h4>Khushi Patel</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src="https://thumbs.dreamstime.com/b/serious-indian-professional-business-man-office-portrait-serious-young-ambitious-indian-businessman-project-leader-dressed-367980912.jpg" alt="Team Member" />
            <h4>Yash Patel</h4>
            <p>Marketing Lead</p>
          </div>
          <div className="team-card">
            <img src="https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg" alt="Team Member" />
            <h4>Kevin Patel</h4>
            <p>Product Manager</p>
          </div>
        </div>
      </section>


      <section className="testimonial-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <p>"Amazing experience! Fast delivery and great products."</p>
            <h5>- Aarti Sinha</h5>
          </div>
          <div className="testimonial-card">
            <p>"ShopNest made my shopping so easy and secure."</p>
            <h5>- Ravi Mehta</h5>
          </div>
          <div className="testimonial-card">
            <p>"I always find what I need here. Love the variety!"</p>
            <h5>- Priya Shah</h5>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
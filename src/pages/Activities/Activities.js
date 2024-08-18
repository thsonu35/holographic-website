import React from 'react';
import './Activities.css';

const ActivitiesPage = () => {
  return (
    <section className="activities-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Activities at RadiantKube 🌟</h1>
        <p>Explore our vibrant and engaging workplace culture through our activities.</p>
      </div>

      {/* Photo Gallery Section */}
      <section className="photo-gallery">
        <h2>Photo Gallery 📸</h2>
        <div className="gallery">
          <div className="gallery-item"><img src="https://lh3.googleusercontent.com/pw/AP1GczPf67iIPVit88-fC94Vr47WD8hJc5DjqMdazBk3BicDj5WxpbbCnwydSeEVgQaBLPsm8GcZlpXDz4Z-RTRUpbr5lUUr1GMeMSmzGIIIcUgRGCy_MPQwiZREDyQp7lOrdRrHpurtrwX6hFFaweliZVIzDw=w1230-h925-s-no-gm?authuser=0" /></div>
          <div className="gallery-item"><img src="https://lh3.googleusercontent.com/pw/AP1GczMggIJppMvrQoC9v9QWG7c7Fcq0cuSHRYvb-E9zkUbNv2NB9uJ-m8dezy3IpgyuVFD7fAIPPoHyfTZQ__tUU3mpuVYLOXAADZkY9q8rtmmLCZQbOmabTB7eSjCq9s_yACbmEI14fmnvCN01k2xTTYghIQ=w1641-h925-s-no-gm?authuser=0" /></div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="albums-section">
        <h2>Albums 🎞️</h2>
        <div className="albums">
          <div className="album"><img src="https://lh3.googleusercontent.com/pw/AP1GczOGXqQ0H1WMhw2OpaJfh2hKpJqBKFNkDr-lgE0629MPsceZp19tW9Q2r6ACdLorcnuncYPqWQ4mhayOadbPoYD42o1G3qIquqHx1I2U14LVz-aHf0bJCpXjTUI01MOUq8gAvcLEZeUq670EeEFyLl0Ulg=w1280-h720-s-no-gm?authuser=0" alt="Album 1" /><p>Annual Picnic 2024</p></div>
        </div>
      </section>

      {/* Employee Weekly Games Section */}
      <section className="games-section">
        <h2>Employee Weekly Games 🎮</h2>
        <p>Every week, we organize fun games to keep our team energized and motivated.</p>
        <ul className="games-list">
          <li>Ping Pong Tournament</li>
          <li>Chess Championship</li>
          <li>Team Quiz</li>
        </ul>
      </section>

      {/* Tracking Details Section */}
      <section className="tracking-details">
        <h2>Tracking Details 📊</h2>
        <p>Monitor the progress of ongoing projects and activities.</p>
        <div className="tracking-info">
          <p><strong>Project Alpha:</strong> 75% Complete</p>
          <p><strong>Annual Meetup:</strong> Scheduled for September 2024</p>
        </div>
      </section>

      {/* Team Events Section */}
      <section className="team-events">
        <h2>Team Events 🎉</h2>
        <p>Check out some of our memorable team events that foster collaboration and creativity.</p>
        <div className="events-list">
          <div className="event-item"><img src="https://lh3.googleusercontent.com/pw/AP1GczMlt3A5_uyXotsce1z9vzc9-ensg57yd_wQJnA9nZ85s7c1kLv2LTQ1uaZgSYoY8zcnmwFzbINkwsKcE4BJcol3jEKTEGc8jMxAncqAk6GDCfM2oNlYevO5q2XfLys-JN5wvvpyOBFG-tPbODCjWkNEhA=w1643-h925-s-no-gm?authuser=1" alt="Event 1" /><p>Monthly Dinner Celebration</p></div>
          <div className="event-item"><img src="https://lh3.googleusercontent.com/pw/AP1GczOfsyBOLLN7r_4BqxmD_sK4EAORIneDelfBijMSWIUeaA-4Tcrx42Hc7jVy5FBcbH5WfxK8pwKRTOY8E_Lp4L5jy3qj_8aJKRUKY-tlF6LUVZcXXYcMlaifyook6m_PHJzWpFEnBbmmtLY1Lft2rqV3Og=w1641-h925-s-no-gm?authuser=1" alt="Event 2" /><p>Weekend meetups</p></div>
        </div>
      </section>

      {/* Our Team Section with Slider */}
      <section className="our-team">
        <h2>Our Team 🤝</h2>
        <div className="team-slider">
          <div className="team-slide">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczMs8RCAyqGK_aKqYgadbvRdVrwiCKLDc245ABekbGoDPLs1TMMg7dI8srp6vR43H8MHGT_xk9GMQG80EmUhM5GFGGPcSBAuiGhWht1c_TKOWMz_So7h4XGrNo6fJDXQdqR3VBk-MdpGyB_iL-hYpPfBKA=w322-h468-s-no-gm?authuser=0" alt="Ritik DHote" />
            <p>Ritik Dhote</p>
            <p className="team-position">Front-End Developer</p>
            <p className="team-description">Specializing in creating dynamic user interfaces with React and CSS animations.</p>
          </div>
          <div className="team-slide">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczPRe1fdHADKYJcJyWIICe6u--B-S1cJHPTHk5_ndj7Q8hpA2X7Fz25TTYn3sQpNT0s48RVjLcdx-dEjXu3qnDzbqJRrlEp3QwplKNStzpit3tcrUbr6S-211uVYtxY8B6xnLyf9Dl75_xcmdW8KFBrP9A=w520-h925-s-no-gm?authuser=0" alt="Yash Pawar" />
            <p>Yash Pawar</p>
            <p className="team-position">Back-End Developer</p>
            <p className="team-description">Expert in building robust server-side applications and APIs with Node.js.</p>
          </div>
          <div className="team-slide">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczM1itOCnxQoMCP-5xIC1VNmN6juHxvtpdBuFB1Y6FKr-3jn35Qmo0ZS4yxN7YpdREUixDoNQzmfrxQ6HL1CbD8OwKlRSHTx7fhVoZbHu7MP3FSc9_P-3MGkkn1uQayx5jkBYk0wshBhQ2kqk9sKjyVXhA=w520-h925-s-no-gm?authuser=0" alt="Vishal Sharma" />
            <p>Vishal Sharma</p>
            <p className="team-position">UI/UX Designer</p>
            <p className="team-description">Focused on creating intuitive and engaging user experiences through thoughtful design.</p>
          </div>
          <div className="team-slide">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczOlhQYERC9WfaDni2ZQ3Np2CmE9QG24MGOiU3VU4pj7wdabZUgB3hY0lRhaXZwqFr_Iz74M7Uyd7VWaI51ZJ6B__YQvo0Qir6mxN6EshmpZwIO4tVTAB2fMtCyK5yGYKddsGUI10JkpMa6AS3B3Jla-Aw=w694-h925-s-no-gm?authuser=0" alt="Rohan Patil" />
            <p>Rohan Patil</p>
            <p className="team-position">Full-Stack Developer</p>
            <p className="team-description">Bridging the gap between front-end and back-end development with full-stack expertise.</p>
          </div>
          <div className="team-slide">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczMw9AWOnQ4dAO1RMkDc0psXPBtvogv8fr5fHAQO7gaP_7zcEavBfGNAXm0Jd1Srv_uXcPBRgcwIlas6PB__abY0j_Y_eGVhJvPAqYlBK4ZYSCSkPMfpKfbNjJ2uGkjJN8_-GO_yukoElNDNWmZYzMEBtw=w520-h925-s-no-gm?authuser=0" alt="Tejanshu Dongre" />
            <p>Tejanshu Dongre</p>
            <p className="team-position">DevOps Engineer</p>
            <p className="team-description">Ensuring smooth and efficient deployment processes and infrastructure management.</p>
          </div>
          <div className="team-slide">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczMloq_zdcNgU04p_hKGgxvpxxo1wm0SnP-GPOKHOk4Xv5HHN56VeYEjtwe8rUMNwdm8AIy-Mx0OXQ9khtrw0yQWEaQtHT724TDXy4O8HCuwDeC0sSsK-fCUGztaF2KddRMSfEqxoFohfAfVEuaDO0srTA=w520-h925-s-no-gm?authuser=0" alt="Sohan Thakur" />
            <p>Sohan Thakur</p>
            <p className="team-position">Project Manager</p>
            <p className="team-description">Leading projects to success with strong organizational and leadership skills.</p>
          </div>
          {/* Add more team slides as needed */}
        </div>
      </section>

      {/* Upcoming Activities Section */}
      <section className="upcoming-activities">
        <h2>Upcoming Activities 📅</h2>
        <ul className="upcoming-list">
          <li>Tech Conference - November 2024</li>
          <li>Year-End Celebration - December 2024</li>
        </ul>
      </section>
    </section>
  );
};

export default ActivitiesPage;

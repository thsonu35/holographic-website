import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Sohan Thakur',
      position: 'Founder & CMO',
      experience: '1-2 years of experience as CMO',
      description: 'Sohan Thakur, the Founder and Chief Marketing Officer (CMO), is responsible for strategic planning and marketing efforts. With 1-2 years of experience, Sohan drives the vision and growth of RadiantKube Technologies.',
      image: 'https://avatars.githubusercontent.com/u/85925090?s=400&u=7c4eb824a185a5f39ab37735e1ef072a77de5fb2&v=4', // Dummy image
      animationClass: 'slide-left-text',
    },
    {
      name: 'Ritik Dhote',
      position: 'Director & CTO',
      experience: '1-2 years of experience as CTO',
      description: 'Ritik Dhote serves as Director and Chief Technology Officer (CTO), leading technology strategies and innovations. With 1-2 years of experience, Ritik ensures that RadiantKube stays ahead in technological advancements.',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHCwSzYMW9wyg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719499677828?e=1729728000&v=beta&t=a_ugdVG73q2SNiftRbK2mjEtoptb6WLtJJhCUb-9ut8', // Dummy image
      animationClass: 'slide-right-text',
    },
    {
      name: 'Vishal Sharma',
      position: 'Director & CTO',
      experience: '1-2 years of experience as CTO',
      description: 'Vishal Sharma, Director and CTO, is a key player in managing technological projects and solutions. His 1-2 years of experience help in steering RadiantKube towards cutting-edge tech developments.',
      image: 'https://vishal-sharma.vercel.app/img/profilePic.png', // Dummy image
      animationClass: 'slide-left-text',
    },
    {
      name: 'Yash Kamdi',
      position: 'Director & CTO',
      experience: '1-2 years of experience as CTO',
      description: 'As Director and CTO, Yash Kamdi oversees the technical direction and execution of projects. With 1-2 years of experience, Yash contributes significantly to RadiantKube\'s tech strategy and implementation.',
      image: 'https://lh3.googleusercontent.com/pw/AP1GczNOmMfIKjQo3QyXMQfHPAUXpWwc5rjqMsnTRjFFypdMqQ0GqCxxuMuwrKcGXUELkYaz3exHTQSl-hB3RmxqMeLWMp8loUsxXKxnikeBB8gpc0Krp2qQloRixgBmX6S8oYkp0GObbaZs0vL8MQZKZNkVVg=w520-h925-s-no-gm?authuser=0', // Dummy image
      animationClass: 'slide-right-text',
    },
    {
      name: 'Tejanshu Dongre',
      position: 'Director & CHRO',
      experience: '1-2 years of experience as CHRO',
      description: 'Tejanshu Dongre, Director and Chief Human Resources Officer (CHRO), manages human resources and organizational development. His 1-2 years of experience ensure a dynamic and supportive work environment at RadiantKube.',
      image: 'https://lh3.googleusercontent.com/pw/AP1GczPxZ9dIlDwN-m8-tKj5SuR63J3yriPi3DRHGLCZ7E2XxSa12qMB-kt6XnvHqzGJcu0Y11j8BasOwzwp-3cfCsfXQuj3Qs12MPmX1aDsq9oZz3lvCHZdPVUxAW5xiQRLODolfKU30NlF1qlmdzBEDDDYpg=w520-h925-s-no-gm?authuser=0', // Dummy image
      animationClass: 'slide-left-text',
    },
    {
      name: 'Rohan Patil',
      position: 'Director & Product Development Head',
      experience: '1-2 years of experience as Product Development Head',
      description: 'Rohan Patil, Director and Head of Product Development, drives the development of innovative products. With 1-2 years of experience, Rohan leads the product strategy and execution for RadiantKube Technologies.',
      image: 'https://lh3.googleusercontent.com/pw/AP1GczPjur4PqIz5LE3JLwMFNglUbls-4jTctfTJPM1iiBP7D1AeSU63_P9abncG4t4KafX4a2blVe9ptHRdsWMlCsEaiGsrVOumdT2oGQkve7IyZN0BajtGs7-naYXba1eYFxzZa8Btyc52NFrENermT4JJtQ=w694-h925-s-no-gm?authuser=0', // Dummy image
      animationClass: 'slide-right-text',
    },
  ];

  return (
    <div className="about-us">
      <section className="company-intro">
        <h1>About RadiantKube Technologies</h1>
        <p>RadiantKube Technologies is a cutting-edge startup focused on delivering exceptional web development solutions. Our expertise lies in the MERN stack, Ruby on Rails (RoR), and Django, providing versatile and scalable web applications tailored to your needs.</p>
      </section>

      <section className="our-team">
        <h2>Our Team</h2>
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className={`text ${member.animationClass}`}>
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <p>{member.experience}</p>
              <p>{member.description}</p>
            </div>
            <div className={`image ${index % 2 === 0 ? 'slide-right-img' : 'slide-left-img'}`}>
              <img src={member.image} alt={member.name} />
            </div>
          </div>
        ))}
      </section>

      <section className="our-clients">
        <h2>Our Clients</h2>
        <p>We are proud to have worked with a diverse range of clients who trust us to deliver high-quality web development solutions. Our commitment to excellence ensures that every project meets the unique needs and goals of our clients.</p>
        <div className="client-list">
          <div className="client">
            <img src="https://via.placeholder.com/100" alt="Client Logo" />
            <p>Client 1</p>
          </div>
          <div className="client">
            <img src="https://via.placeholder.com/100" alt="Client Logo" />
            <p>Client 2</p>
          </div>
          <div className="client">
            <img src="https://via.placeholder.com/100" alt="Client Logo" />
            <p>Client 3</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

import React, { useState } from 'react';
import './Services.css';

const ServicesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Hire a Developer',
      description: `In today's rapidly evolving technological landscape, finding the right developer for your project is crucial to ensuring success and competitiveness. Our specialized hiring services are designed to connect you with top-tier developers who not only possess the technical expertise but also align with your company's culture and values.

We begin by understanding your project's specific requirements, goals, and challenges. This comprehensive understanding allows us to tailor our search and identify candidates who have the precise skill set and experience needed. Whether you're looking for front-end developers skilled in the latest JavaScript frameworks, back-end experts proficient in scalable server-side technologies, or full-stack developers who can handle both ends of the spectrum, we've got you covered.

Our extensive network includes developers from various industries and backgrounds, each vetted through a rigorous screening process that assesses their technical abilities, problem-solving skills, and adaptability. We conduct in-depth interviews, coding tests, and reference checks to ensure that every candidate we present meets the highest standards of excellence.

Beyond technical skills, we emphasize the importance of soft skills such as communication, teamwork, and leadership.`,
      icon: '👨‍💻',
    },
    {
      title: 'Front-End Development',
      description: `In the digital age, the front-end of your application or website serves as the first point of interaction between your business and your audience. Our front-end development services are dedicated to crafting visually stunning, highly responsive, and user-centric interfaces that leave a lasting impression.

Our team of skilled front-end developers excels in utilizing the latest technologies and frameworks such as React, Angular, and Vue.js to build interfaces that are not only aesthetically pleasing but also functionally robust. We prioritize creating seamless user experiences by focusing on intuitive navigation, fast load times, and cross-browser compatibility.

Understanding that every business has unique needs, we work closely with you to comprehend your brand identity, target audience, and project objectives. This collaborative approach ensures that the final product aligns perfectly with your vision and effectively communicates your brand message.

Accessibility and responsiveness are at the core of our development process. We ensure that your application or website performs flawlessly across various devices and screen sizes, providing a consistent experience to all users regardless of how they access your platform.

Moreover, we incorporate best practices in SEO to improve your site's visibility and reach. `,
      icon: '🎨',
    },
    {
      title: 'Back-End Development (RoR)',
      description: `A strong and reliable back-end is the backbone of any successful application, managing data storage, security, and business logic. Our back-end development services using Ruby on Rails (RoR) provide scalable and efficient solutions tailored to meet your specific business requirements.

Ruby on Rails is renowned for its convention over configuration approach, which accelerates the development process without compromising on quality. Our experienced RoR developers leverage this powerful framework to build robust back-end systems that support complex functionalities and seamless performance.

We begin by conducting a thorough analysis of your project's needs, identifying the optimal architecture and technologies that align with your objectives. Our development process follows agile methodologies, ensuring flexibility, continuous integration, and timely delivery.

Our RoR services encompass database design and management, API development and integration, user authentication and authorization, and performance optimization. We utilize best practices in coding standards and conduct comprehensive testing to ensure the stability and reliability of your application.

Scalability is a key consideration in our development process. We design systems that can efficiently handle increasing loads and user demands, allowing your application to grow alongside your business effortlessly.`,
      icon: '💻',
    },
    {
      title: 'Back-End Development (Python Django)',
      description: `In the realm of web development, Python Django stands out as a powerful framework for building secure, scalable, and maintainable back-end systems. Our back-end development services utilizing Django are designed to deliver high-performance solutions that meet the intricate demands of modern applications.

Our team of proficient Python developers harnesses the versatility and robustness of Django to construct back-end infrastructures that effectively handle complex operations and large volumes of data. Django's "batteries-included" philosophy provides a wide array of built-in features, enabling rapid development while maintaining high standards of quality and security.

We start by comprehensively understanding your project's objectives and requirements. This allows us to architect solutions that are tailored to your specific needs, whether it's developing RESTful APIs, implementing user authentication systems, or managing data-intensive processes.

Our services include database design and optimization, leveraging Django's ORM for efficient and secure interactions with various database systems like PostgreSQL, MySQL, and SQLite. We also specialize in integrating third-party services and APIs to extend the functionality of your application seamlessly.

`,
      icon: '🐍',
    },
    {
      title: 'React UI Development',
      description: `User interface (UI) plays a pivotal role in how users perceive and interact with your application. Our React UI development services focus on creating dynamic, responsive, and intuitive interfaces that enhance user engagement and satisfaction.

React, developed by Facebook, is a leading JavaScript library known for its efficiency and flexibility in building complex user interfaces. Our team of skilled React developers utilizes this technology to construct component-based UIs that are easy to maintain and scale.

We begin by understanding your target audience, business goals, and branding guidelines to design interfaces that resonate with your users and reflect your brand identity effectively. Our designers and developers work collaboratively to translate your ideas into visually appealing and functional designs.

Our development process emphasizes reusability and modularity. By creating reusable components, we ensure consistency across your application and facilitate faster development and easier maintenance. We also leverage React's virtual DOM and efficient rendering capabilities to build high-performance interfaces that provide smooth and responsive user experiences.

We integrate state management libraries like Redux or MobX where necessary to handle complex application states efficiently.

By choosing our React UI development services, you invest in a user interface that is not only visually stunning but also highly functional and user-friendly. `,
      icon: '⚛️',
    },
    {
      title: 'Full-Stack Development (MERN)',
      description: `In today's fast-paced digital environment, having a comprehensive and cohesive development approach is essential. Our full-stack development services using the MERN stack provide end-to-end solutions that cover every aspect of your web application development needs.

The MERN stack comprises MongoDB, Express.js, React, and Node.js, offering a robust and efficient framework for building high-performing web applications. Our team of experienced full-stack developers is adept at leveraging each component of this stack to deliver scalable and maintainable solutions.

We start by conducting a detailed analysis of your project requirements, objectives, and target audience. This helps us design an architecture that aligns with your business goals and provides an optimal user experience.

On the front-end, we utilize React to build dynamic and responsive user interfaces that are both engaging and intuitive. React's component-based architecture allows for the creation of reusable UI elements, facilitating consistency and efficient development.

For the back-end, we employ Node.js and Express.js to develop fast and scalable server-side applications. Node.js enables us to use JavaScript across both front-end and back-end, ensuring seamless integration and reducing development time. `,
      icon: '🖥️',
    },
    {
      title: 'Full-Stack Development (Django)',
      description: `Building a comprehensive web application requires a robust and versatile framework that can handle both front-end and back-end development efficiently. Our full-stack development services using Django provide complete solutions that cater to all your web development needs with precision and excellence.

Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Its built-in features and scalability make it an ideal choice for developing complex, data-driven websites and applications. Our team of seasoned developers leverages Django's capabilities to deliver secure, scalable, and maintainable full-stack solutions.

We commence the project by thoroughly understanding your business objectives, target audience, and specific requirements. This allows us to architect a solution that not only meets but exceeds your expectations.

On the back-end, Django provides a robust foundation with its MTV (Model-Template-View) architectural pattern. We design efficient models that interact seamlessly with databases like PostgreSQL or MySQL, ensuring data integrity and optimal performance. Django's powerful ORM simplifies database operations, allowing for quick and secure data transactions.

For the front-end, we integrate modern technologies like React or Angular to build interactive and responsive user interfaces. `,
      icon: '🌐',
    },
    {
      title: 'API Integration',
      description: `In an interconnected digital ecosystem, integrating various APIs is essential to enhance the functionality and efficiency of your applications. Our API integration services are designed to seamlessly connect your systems with third-party services, enabling you to leverage external functionalities and data effectively.

We begin by understanding your specific integration needs and identifying the APIs that best align with your business objectives. Whether it's payment gateways like Stripe or PayPal, social media platforms like Facebook or Twitter, or other services such as Google Maps, CRM systems, or analytics tools, our team has extensive experience in integrating a wide range of APIs.

Our integration process involves thorough planning and analysis to ensure compatibility and optimal performance. We carefully examine the API documentation, set up authentication protocols, and map out data flow to ensure a seamless connection between your application and the external services.

We prioritize security throughout the integration process by implementing secure API keys, OAuth protocols, and adhering to best practices to protect sensitive data and prevent unauthorized access. We also ensure compliance with relevant regulations and standards, such as GDPR or PCI DSS, depending on the nature of the integration.

Performance optimization is another critical aspect of our services. `,
      icon: '🔗',
    },
  ];

 
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon animated">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
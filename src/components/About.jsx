import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-600">About WebDevMaster</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <p className="text-lg mb-4">
          Welcome to WebDevMaster, your ultimate platform for learning web development! Whether you're a beginner or an experienced developer, we offer the resources you need to enhance your coding skills and build amazing websites and applications.
        </p>
        <p className="text-lg mb-4">
          Our mission is to provide a comprehensive learning experience for web technologies, including HTML, CSS, JavaScript, React, and more. We focus on practical, hands-on learning, so you can build real-world projects and gain the confidence you need to succeed in the tech industry.
        </p>
        <p className="text-lg mb-4">
          Whether you're looking to master HTML for structuring web pages, CSS for styling, JavaScript for interactivity, or React for building dynamic user interfaces, WebDevMaster has everything you need to become a skilled web developer.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Our Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Comprehensive tutorials on HTML, CSS, JavaScript, and React</li>
            <li>Interactive coding exercises and challenges</li>
            <li>Real-world projects to build and showcase your skills</li>
            <li>Detailed explanations and examples for every concept</li>
            <li>Community-driven support and discussion forums</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Our Team</h2>
          <p className="mb-4">
            WebDevMaster is built by a team of passionate developers, educators, and industry professionals. Our team is dedicated to creating high-quality, up-to-date content that helps learners of all levels succeed in their web development journey.
          </p>
          <p>
            Have ideas for new tutorials or features? We're always looking for ways to improve! Visit our Contact page to get in touch with us and share your feedback.
          </p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Technologies We Cover</h2>
        <p className="text-lg mb-4">
          We cover a wide range of web development technologies, including:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>HTML:</strong> Learn the fundamentals of web page structure, elements, and attributes.</li>
          <li><strong>CSS:</strong> Master styling techniques including Flexbox, Grid, animations, and responsive design.</li>
          <li><strong>JavaScript:</strong> Dive into dynamic content creation, DOM manipulation, and asynchronous programming with promises, async/await, and more.</li>
          <li><strong>React:</strong> Build interactive user interfaces with the power of React, including components, hooks, and state management.</li>
          <li><strong>Node.js and Express:</strong> Learn backend development with Node.js and Express to build RESTful APIs and server-side logic.</li>
          <li><strong>Git and GitHub:</strong> Learn version control and collaboration with Git and GitHub, essential for working in a team.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

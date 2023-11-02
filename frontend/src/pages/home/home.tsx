// Import necessary React components and styles
import React from 'react';
import './HomePage.css'; // Import your custom styles

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Your Awesome Website</h1>
        <p>Welcome to a World of Creativity</p>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Discover amazing things about Feature 1.</p>
        </div>

        <div className="feature">
          <h2>Feature 2</h2>
          <p>Explore the power of Feature 2 in action.</p>
        </div>

        <div className="feature">
          <h2>Feature 3</h2>
          <p>Experience the magic of Feature 3.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join us now and unlock a world of possibilities.</p>
        <button className="cta-button">Sign Up</button>
      </section>

      <footer>
        <p>&copy; 2023 Your Awesome Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

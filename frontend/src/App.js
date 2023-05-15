import React from 'react';
import Logo from './components/Logo';
import Menu from './components/Menu';

const App = () => {
  return (
    <div>
      <header>
        <Logo />
        <Menu />
      </header>
      <main>
        <h1>Welcome to My App</h1>
        <p>This is the content area of your application.</p>
      </main>
      <footer>
        <div className="address">
          <h3>Address</h3>
          <p>123 Main Street</p>
          <p>City, State, ZIP</p>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="copywrite">
          <p>&copy; 2023 My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

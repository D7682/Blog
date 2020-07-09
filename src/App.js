import React from 'react';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <h1>This is a test</h1>
        <p>This is a test paragraph for your blog page, Enjoy.</p>
        <a href="https://www.google.com">Google</a>
        <li><code>Hello</code></li>
        <li><code>Highlight test</code></li>
      </div>
    </div>
  );
}

export default App;

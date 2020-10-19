import React from 'react';
import Auth from "./components/Auth"
import ContactForm from "./components/ContactForm"
import Contact from "./components/Contact"
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Auth />
          {/* <ContactForm /> */}
          {/* <Contact /> */}
      </header>
    </div>
  );
}

export default App;

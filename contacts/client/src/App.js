import React from 'react';
import Authform from "./components/Authform"
import ContactForm from "./components/ContactForm"
import Contact from "./components/Contact"
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Authform />
          <ContactForm />
          <Contact />
      </header>
    </div>
  );
}

export default App;

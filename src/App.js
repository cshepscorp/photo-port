/* This App.js file is the center of the application. Think of App.js as the root component, or the wrapper component that houses all of the other components. To effect any change on the application, we need to either modify this file or add components inside it. */


import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';


// the way React uses JSX behind the scenes is very similar to document.createElement()
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        {/* Because components look just like any other JSX element (maybe colored slightly different by the syntax highlighter), using PascalCase can help you distinguish them from other JSX elements. */}
      </main>
    </div>
  );
}

export default App;

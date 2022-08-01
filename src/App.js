import { Routes, Route } from "react-router-dom";
import * as React from "react";
import Home from "./Pages/Home"
import CariMobil from "./Pages/CariMobil"
import PageNotFound from "./Pages/PageNotFound"

function App() {
  return (
    <Routes>
      <Route path="react-js/" element={<Home/>} />
      <Route path="carimobil" element={<CariMobil />} />
      <Route path="carimobil/:id" element={<CariMobil />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


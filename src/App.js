import {Link, Outlet} from "react-router-dom";
import './App.css';

import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      {/* <header>
        <nav className="navbar">
          <Link to="/">HOME</Link>
          {" | "}
          <Link to="about-me">ABOUT ME</Link>
        </nav>
      </header> */}
      <body>
          <MainPage/>
      </body>
      <footer>
        <p>&copy;2023 JRDN D'Souza. Made with <a href="cookies" id="no-underline-size-up">&#127850;</a></p>
      </footer>
    </div>
  );
}

export default App;

import {Link, Outlet} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">HOME</Link>
          {" | "}
          <Link to="about-me">ABOUT ME</Link>
          <h1>MAIN PAGE</h1>
        </nav>
      </header>
      <body>
        <Outlet/>
        <p>Coming soon...</p>
      </body>
      <footer>
        <p>&copy;2022 JRDN D'Souza. Made with <a href="cookies" id="no-underline-size-up">&#127850;</a></p>
      </footer>
    </div>
  );
}

export default App;

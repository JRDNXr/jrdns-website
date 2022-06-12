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
          <Outlet/>
        </nav>
      </header>
    </div>
  );
}

export default App;

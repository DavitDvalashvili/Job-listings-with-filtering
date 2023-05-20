import remove from "../src/images/icon-remove.svg";
import poto from "./images/photosnap.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="searchbar">
        <div className="searchItems">
          <span>frontend</span>
          <div className="remove">
            <img src={remove} alt="remove icon" />
          </div>
        </div>
        <span>clear</span>
      </div>
      <div className="jobcontainer">
        <img className="image" src={poto} />
        <div>
          <div className="description">
            <h2>Photosnap</h2>
            <span>NEW!</span>
            <span>FEATURED</span>
          </div>
          <h1>1</h1>
          <div className="text-box">
            <span>1d ago</span>
            <span>Full Time</span>
            <span>USA only</span>
          </div>
        </div>
        <div className="skillbox">
          <span>css</span>
          <span>Frontend</span>
          <span>JavaScript</span>
          <span>Junior</span>
        </div>
      </div>
      <div className="jobcontainer">
        <img className="image" src={poto} alt="logo" />
        <div>
          <div className="description">
            <h2>Photosnap</h2>
            <span>NEW!</span>
            <span>FEATURED</span>
          </div>
          <h1>2</h1>
          <div className="text-box">
            <span>1d ago</span>
            <span>Full Time</span>
            <span>USA only</span>
          </div>
        </div>
        <div className="skillbox">
          <span>css</span>
          <span>Frontend</span>
          <span>JavaScript</span>
          <span>Junior</span>
        </div>
      </div>
      <div className="jobcontainer">
        <img className="image" src={poto} />
        <div>
          <div className="description">
            <h2>Photosnap</h2>
            <span>NEW!</span>
            <span>FEATURED</span>
          </div>
          <h1>3</h1>
          <div className="text-box">
            <span>1d ago</span>
            <span>Full Time</span>
            <span>USA only</span>
          </div>
        </div>
        <div className="skillbox">
          <span>css</span>
          <span>Frontend</span>
          <span>JavaScript</span>
          <span>Junior</span>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Content from "./Content";

function App() {
  return (
    <div className="app">
      <div className="app_head">
        <h6>TEAM NAME</h6>
        <h6>GAME</h6>
        <h6>ROLE</h6>
        <h6>TEAM SIZE</h6>
        <h6>ACTION</h6>
      </div>
      <div>
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
}
export default App;

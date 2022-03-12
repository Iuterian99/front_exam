import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Switch, Route } from "react-router";

// Components
import TopHeader from "./components/navbar/navbar";
import AllBuildings from "./components/AllBuildings/allBuildings";
// import Complexes from "./components/Complexes/complexes";

function App() {
  return (
    <div className="vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <TopHeader />
      </nav>
      <main className="main_part">
        <div className="container main_container">
          <h1 className="text-light text-center pt-5">
            All houses consist of three rooms
          </h1>
          <h2 className="text-light text-center mb-5">
            Choose a house by filtering🏡
          </h2>
          <div className="options">
            <AllBuildings />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

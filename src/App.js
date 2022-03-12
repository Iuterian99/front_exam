import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Switch, Route } from "react-router";

// Components
import TopHeader from "./components/navbar/navbar";
import AllBuildings from "./components/AllBuildings/allBuildings";

function App() {
  return (
    <div className="vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <TopHeader />
      </nav>
      <main className="main_part">
        <div className="container main_container">
          <h1 className="text-danger text-center pt-3">
            All houses consist of three rooms🏡
          </h1>
          <div className="options">
            <AllBuildings />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

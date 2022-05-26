import React from "react";
import logo from "./assets/Logo.png";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Links } from "./Links";
import { CardLink } from "./components/CardLink";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <>
            <img
              src="./assets/Logo.png"
              className="avatar bg-info rounded-circle"
              alt="avatar"
            />
          </>
          <h2>Silbruar</h2>
        </div>

        <div className="row social-links">
          <div className="col-md-12">
            {Links.map((link, index) => {
              return <CardLink {...link} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

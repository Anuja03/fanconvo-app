import React, { useState } from "react";
import "./App.css";
import { Tabs, Tab } from "react-bootstrap";

function App() {
  const [key, setKey] = useState("home");

  return (
    <div className="container">
      <h1 className="heading-style">Fanconvo</h1>
      <div>A marketplace for conversations, mentorships and performances</div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="fan" title="Fan Sign Up">
          <form>
            <h3>Create your Fan Account</h3>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Sign Up
            </button>
          </form>
        </Tab>
        <Tab eventKey="talent" title="Talent Sign Up">
          <h3>Create your Talent Account</h3>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;

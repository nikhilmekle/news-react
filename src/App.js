import React, { Component } from 'react';
import NavBar from './component/NavBar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export default class App extends Component {
  pageSize = 9;

  render() {
    return (
      <div>
        <Router basename="/NewsApp">
          <NavBar />

          <Routes>
            {/* Default Route to redirect to /NewsApp */}
            <Route path="/" element={<Navigate to="/home" />} />

            <Route exact path="/home" element={<News key="home" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

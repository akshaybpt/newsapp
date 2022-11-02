import React, { Component } from 'react'
import NavBar from './component/navbar';
import News from './component/news';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export class home extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'light',
      color: 'Dark Mode'
    }
  }
  toggleMode = () => {
   
    if (this.state.mode === 'light') {
      this.setState({
        mode: 'dark',
        color: 'Light Mode'
      })
      
      document.body.style.backgroundColor ='#212529';
      document.body.style.color = 'white';

    } else {
      this.setState({
        mode: 'light',
        color: 'Dark Mode'
        
      })
     
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
 
  render() {

    return (
      <div>
        <Router>
          <NavBar mode={this.state.mode} togglemode={this.toggleMode} color={this.state.color}   />
          <Routes>
            <Route exact path="/" element={<News key="general" country="in" pageSize="16" category="general" mode={this.state.mode} />}></Route>
            <Route exact path="/business" element={<News key="business" country="in" pageSize="16" category="business" mode={this.state.mode} />}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" pageSize="16" category="entertainment" mode={this.state.mode} />}></Route>
            <Route exact path="/health" element={<News key="health" country="in" pageSize="16" category="health" mode={this.state.mode} />}></Route>
            <Route exact path="/science" element={<News key="science" country="in" pageSize="16" category="science" mode={this.state.mode} />}></Route>
            <Route exact path="/sports" element={<News key="sports" country="in" pageSize="16" category="sports" mode={this.state.mode} />}></Route>
            <Route exact path="/technology" element={<News key="technology" country="in" pageSize="16" category="technology" mode={this.state.mode} />}></Route>
          </Routes>
        </Router>

      </div>

    )
  }
}

export default home
import React, { Component } from 'react'
import NavBar from './component/navbar';
import News from './component/news';
import SearchPage from './component/searchPage';

import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export class home extends Component {
  apiKey="466e5c5c122748deba1e3b4795759a52";
  constructor() {
    super();
    this.state = {
      mode: 'light',
      color: 'Dark Mode',
      progress: 10
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
  setProgress =(progress)=>{
this.setState({
  progress: progress
})
  }
 
  render() {

    return (
      <div>
        <Router>
          <NavBar mode={this.state.mode} togglemode={this.toggleMode} color={this.state.color}   />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
      
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress}  key="general" country="in" pageSize="16" category="general" mode={this.state.mode} />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" country="in" pageSize="16" category="business" mode={this.state.mode} />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" country="in" pageSize="16" category="entertainment" mode={this.state.mode} />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" country="in" pageSize="16" category="health" mode={this.state.mode} />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" country="in" pageSize="16" category="science" mode={this.state.mode} />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" country="in" pageSize="16" category="sports" mode={this.state.mode} />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" country="in" pageSize="16" category="technology" mode={this.state.mode} />}></Route>
            <Route exact path="/search" element={<SearchPage setProgress={this.setProgress}  key="technology" country="in" pageSize="16" category="technology" mode={this.state.mode} />}></Route>
          </Routes>
        </Router>

      </div>

    )
  }
}

export default home
import './App.css';
//rcc rce
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {Route, Routes} from 'react-router-dom';



export default class App extends Component {
  pageSize= 10;
  render() {
    return (
      <div>
      <NavBar/>
       <Routes>
          <Route path="/" element={ <News key="business" category="business" pageSize={this.pageSize}/>} />
          <Route path="/business" element={ <News key="business" category="business" pageSize={this.pageSize}/>} />
          <Route path="/entertainment" element={ <News key="entertainment" category="entertainment" pageSize={this.pageSize}/>} />
          <Route path="/general" element={ <News key="general" category="general" pageSize={this.pageSize}/>} />
          <Route path="/health" element={ <News key="health" category="health" pageSize={this.pageSize}/>} />
          <Route path="/science" element={ <News key="science" category="science" pageSize={this.pageSize}/>} />
          <Route path="/sports" element={ <News key="sports" category="sports" pageSize={this.pageSize}/>} />
          <Route path="/technology" element={ <News key="technology" category="technology" pageSize={this.pageSize}/>} />

    </Routes>
      </div>
    )
  }
}
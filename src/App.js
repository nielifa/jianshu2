import React, { PureComponent } from 'react'
import {GlobalStyle} from './style'
import Header from './common/header'
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from './pages/home/index'
import Login from './pages/login/index.jsx'
import Detail from './pages/detail/index.jsx'
import Write from './pages/writer/index'
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <Router>
          <Header/>
          <Route path='/' exact component={Home}/>
          <Route path='/detail/:id' exact component={Detail}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/write' exact component={Write}/>
          
        </Router>
      </div>
    )
  }
}

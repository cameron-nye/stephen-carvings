
import React from 'react'
import {Route, Switch} from 'react-router-dom'
//Components
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Bio from './components/Bio/Bio'
import Contact from './components/Contact/Contact'

export default (
  <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/projects' component={Projects} />
    <Route path='/biography' component={Bio} />
    <Route path='/contact' component={Contact} />
  </Switch>
)
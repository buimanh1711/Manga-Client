import { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './static/styles/common.css'
import './static/styles/sign.scss'
import './static/styles/home.scss'
import './static/styles/template.scss'

import './static/styles/responsive.scss'
import MainLayout from './layouts/main'
import Home from './pages/home'

function App() {
  const categories = useSelector(state => state.categories.categories)

  return (
    <div className='my-app'>
      <Switch>
        <Route path='/'>
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>
      </Switch>
    </div>
  )
}

export default App

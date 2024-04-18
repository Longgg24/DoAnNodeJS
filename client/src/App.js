import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DashBoard from './views/DashBoard'
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext'
import ProtectedRoute from './components/routing/ProtectedRoute'
import About from './views/About'
import PostContextPovider from './contexts/PostContext'


function App() {
  return ( 
    <AuthContextProvider>

      <PostContextPovider>
      <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route 
            exact 
            path='/login' 
            render={props => <Auth {...props}  authRoute='login' />} 
            />
            <Route 
            exact 
            path='/register' 
            render={props => <Auth {...props}  authRoute='register' />} 
            />
            <ProtectedRoute exact path='/dashboard' component={DashBoard}/>
            <ProtectedRoute exact path='/about' component={About}/>

          </Switch>
    </Router>
      </PostContextPovider>

    </AuthContextProvider>
  )
}

export default App;

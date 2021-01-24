import Layout from './Components/Layout'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const App = () => {
  return (
    <Router history={history}>
      {/* // <Router history={browserHistory}> basename={process.env.PUBLIC_URL} */}
      <Switch>
        <Route path="*" component={Layout} />
      </Switch>
    </Router>
  )
}

export default App

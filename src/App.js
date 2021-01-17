import Layout from './Components/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="*" component={Layout} />
      </Switch>
    </Router>
  )
}

export default App

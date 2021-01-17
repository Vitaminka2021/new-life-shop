import React from 'react'
import { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Footer from '../Footer'
import Header from '../Header'

const MainPage = lazy(() => import('../../Pages/MainPage'))
const ProductsPage = lazy(() => import('../../Pages/ProductsPage'))
const ProductPage = lazy(() => import('../../Pages/ProductPage'))

const Layout = () => {
  return (
    <div className="root">
      {/* <HashRouter basename="/"> */}
      <div className="app">
        <Header />
        <main className="main">
          <Suspense fallback={<p>Loading ...</p>}>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/product/:id" component={ProductPage} />
              <Route exact path="/products/:alias" component={ProductsPage} />
              <Redirect to="/404" />
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </div>
      {/* </HashRouter> */}
    </div>
  )
}

export default Layout

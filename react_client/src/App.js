import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddProduct from './screens/AddProduct'
import ProductDetail from './screens/ProductDetail'
import ShowProducts from './screens/ShowProducts'
import ProductList from './screens/ProductList'

const App = () => {
  return (
    
    <Router>
      <Switch>
        <Route exact path='/addProduct' component={AddProduct} />
        <Route exact path='/products' component={ShowProducts} />
        <Route exact path='/product/:id' component={ProductDetail} />
        <Route exact path='' component={ProductList} />
      </Switch>
    </Router>
  )
}

export default App

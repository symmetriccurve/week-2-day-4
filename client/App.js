import React, { Component } from 'react';
// import ProductCard from './ProductCard'
import ProductContainer from './ProductContainer'
class App extends Component {
    constructor(){ //First LCM
      super()
      this.state = {
        products: []
      }
    }

    componentWillMount(){ //second LCM

    }

    render() {
      return (
          <div>
            <ProductContainer products={this.state.products}/>
          </div>
        )

    }

    componentDidMount(){
      fetch('https://api.myjson.com/bins/14p92f')// 500 Asychnour
      .then(htmlResponse=>{
        return htmlResponse.json()
      })
      .then(jsonResponse=>{
        this.setState({
          products: jsonResponse//[{},{},{}]
        })
      })
    }

}

module.exports = App

// <App>
//   <ProductContainer>
//     <productCard>
//     <productCard>
//     <productCard>
//     <productCard>
//     <productCard>
//     <productCard>
//     <productCard>
//     <productCard>
//     <productCard>
//     <productCard>
//   </ProductContainer>
// </App>

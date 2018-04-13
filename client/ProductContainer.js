import React, {Component} from 'react'
import ProductCard from './ProductCard'

class ProductContainer extends Component{

  componentWillReceiveProps(nextProps){
    //Receives New Props
  }

  render(){
    var productViews = []
    for(var i =0; i < this.props.products.length;i++){
        productViews.push(
          <ProductCard myProduct={this.props.products[i]}/>
        )
    }
    return(
        <div>
          {productViews}
        </div>
    )
  }
}

module.exports = ProductContainer

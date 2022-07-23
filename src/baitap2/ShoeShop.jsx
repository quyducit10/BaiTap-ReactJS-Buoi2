import React from 'react'
import data from './data.json'
import ProductDetail from './ProductDetail'
import ProductList from './ProductList'

class ShoeShop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,
      isOpen: false,
    };
  }
  handleSelect = (product) => { 
    this.setState({ selectedProduct: product });
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };
  render(){
  const { selectedProduct, isOpen } = this.state;
  
  return(
    <div className='container'>
      <h1 className='text-center text-dark'>Shoe Shop</h1>
      
      <ProductList 
      products={data} 
      onOpen={this.handleOpen}
      onSelect={this.handleSelect}
      />
      <ProductDetail 
      isOpen={isOpen}
      onClose={this.handleClose}
      product={selectedProduct} />
    </div>
  )
}}

export default ShoeShop
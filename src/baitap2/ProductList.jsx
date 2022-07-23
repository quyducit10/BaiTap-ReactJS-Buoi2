import React from 'react'

const ProductList = ({products,onOpen,onSelect}) => {
  const handleOpen = (isOpen) =>{
    onOpen(isOpen)
  }
  const handleSelect = (product) =>{
    // console.log(product)
    onSelect(product);

  }
  return (
    <div className='row'> 
      {products.map((product) => {
          return(
            <div className="col-sm-4">
              <div className='card'>
        <img src={product.image} alt={product.name} width="100%" height="300px" />
        <div className="card-body">
            <h3 className='card-title'>{product.name}</h3>
            <p className='card-text'>{product.price}$</p>
            <button 
            className='btn btn-dark' 
            onClick={()=>{
              handleOpen(onOpen)
              handleSelect(product)
            }
          }
            
            >Detail</button>
            <button className='btn btn-primary ms-3'>Add to carts</button>

        </div>
    </div>
            </div>
          )
      })}
    </div>
  )
}

export default ProductList

import React from 'react'

const ProductDetail = ({product,isOpen = false,onClose}) => {
  if (!product) {
    // Không có sản phẩm => không cần render giao diện
    return null;
  }

  return (
    <>
      <div style={{display:isOpen ? "block" : "none"}} class="modal fade show" tabindex="-1">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Detail Product</h5>
              <button
                type="button"
                class="btn-close"
                
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div class="modal-body">
              
            <div className="row mt-5">
      <div className="col-sm-6">
        <img
          src={product.image}
          alt={product.name}
          width="100%"
          height="500px"
        />
      </div>
      <div className="col-sm-6">
        <h1>Detail Product</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{product.name}</td>
            </tr>
            <tr>
              <td>Alias</td>
              <td>{product.alias}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{product.price}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{product.description}</td>
            </tr>
            <tr>
              <td>ShortDescription</td>
              <td>{product.shortDescription}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <div class="modal-backdrop fade show"></div>}
    </>
  )
}

export default ProductDetail
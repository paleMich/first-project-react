import './Product.css'

function Product({products}) {
  
  return (
      products.map((product) => <li>
          <img src={product.image} alt=''></img>
          <h4>{product.title}</h4>
          <span>{product.price}</span>
          <p>{product.description}</p>
        </li>
      )
  )
}

export default Product 
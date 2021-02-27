import './Product.css'

function Product({products}) {
  
  return (
      products.map((product) => <li className='Product'>
          <img src={product.image} alt=''></img>
          <h4>{product.title}</h4>
          <span>{product.price}€</span>
        </li>
      )
  )
}

export default Product 
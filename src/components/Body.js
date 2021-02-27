import React from 'react'
import Product from './Product'

import './Body.css'

class Body extends React.Component{

  constructor(props){
    super(props)          // con super chiamo il costruttore della classe padre, e gli passo lo stesso argomento (propsche mi servono nel metodo RENDER) 

    this.state = {        // dichiaro lo stato, come facevamo con js
      showProducts: false,
    };
  }

  renderProducts(){
    this.setState({showProducts: true});
  }

  render() {
    const { cover, title, description, products } = this.props;
    const { showProducts } = this.state;

    return (
      <main className="Body">
        <img src={cover} alt={title} />
        <div className="content">
          <h1>{title}</h1>
          <h2>{description}</h2>
          <div>
            {showProducts ? (
              <Product products={products}/>
            ) : (
              <button onClick={() => this.renderProducts()}>
                Show products
              </button>
            )}
          </div>
        </div>
      </main>
    );
  }
}

export default Body
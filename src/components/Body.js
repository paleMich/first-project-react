import React from 'react'
import './Body.css'

class Body extends React.Component{
  render(){
    return <main className='Body'>
        <img src={this.props.cover} alt='shoeRappresentation'/>
        <h1>{this.props.title}</h1>
        <h2>{this.props.description}</h2>
      </main>
  }
}

export default Body
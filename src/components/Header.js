import './Header.css'

function Header(props){
  return <header className='Header'>
    <img src={props.logo} alt="logo-shoe" />
    <span>{props.name}</span>
  </header>
}

export default Header


// const { logo, name } = this.props
// const logo = this.props.logo - ecc
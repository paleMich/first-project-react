import './Footer.css'

function Footer(props){
  const a = new Date();
  const date = a.getFullYear();
  return <footer className='Footer'>{date} © {props.company} </footer>
}

export default Footer
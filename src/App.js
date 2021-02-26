import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const data = {
  name: 'HappyShoes',
  logo: 'https://logoipsum.com/logo/logo-16.svg',
  company: 'SZH Inc.',
  cover: 'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  title: 'Welcome to our brand new HappyShoes website!',
  description: 'Lorem ipsum velit cillum excepteur ',
}

function App() {
  return (
    <div className="App">
      <Header logo={data.logo} name={data.name} />
      <Body 
        cover={data.cover}
        title={data.title}
        description={data.description} 
      />
      <Footer company={data.company} />
    </div>
  );
}

export default App;

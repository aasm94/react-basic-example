import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Sidebar from './components/sidebar/Sidebar';
import Container from './components/container/Container';
import Footer from './components/footer/Footer';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <Nav />

      <div className="container mt-5">
        <div className='row'>
          <Sidebar />
          <Container />
        </div>
      </div>
      
      <Footer />
    </Fragment>
    
  );
}

export default App;

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Sidebar from './components/sidebar/Sidebar';
import Container from './components/container/Container';
import Footer from './components/footer/Footer';
import { Fragment } from 'react';

function App() {

  let objHeader = {
    title: 'My First Bootstrap 5 Page dynamic title from object',
    description: 'Resize this responsive page to see the effect!'
  }

  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        title={objHeader.title} 
        description={objHeader.description} 
      />
      <Nav />

      <div className="container mt-5">
        <div className='row'>
          <Sidebar />
          <Container />
        </div>
      </div>

      <Footer date={date} />
    </Fragment>
    
  );
}

export default App;

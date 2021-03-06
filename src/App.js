import React from 'react';
import { Container } from 'react-bootstrap'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className="py-5">
        <Container>
          <h1>App</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;

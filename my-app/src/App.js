import './App.css';
import React from 'react';
import Header from './HornedBeasts/header';
import Footer from './HornedBeasts/footer';
import Main from './HornedBeasts/main';

class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
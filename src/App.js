import React from 'react';

import { AboutUs, G, FindUs, Footer, Gallery, Header, Intro, Laurels, Team } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Team />
    <G />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
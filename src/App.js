import React from 'react';
import './css/app.css';
import NavBar from './components/Navbar';
import Main from './components/Main';
import FeaturedVideos from './components/FeaturedVideos';
import TwitterFeed from './components/TwitterFeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <FeaturedVideos />
      <TwitterFeed />
      <Footer />
    </div>
  );
}

export default App;
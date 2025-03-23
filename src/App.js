import React from 'react';
import Header from './Header';
import SlideShowContainer from './SlideShowContainer';
import ArtistPage from './ArtistPage';
import PrevisaoClimaterica from './PrevisaoClimaterica';
import Footer from './Footer';
import table from './table.json';


function App() {
  return (
    <div className="App">
      <Header />
      <SlideShowContainer />
      <ArtistPage artists={table.artists}/>
      <PrevisaoClimaterica previsoes={table.previsoes}/>
      <Footer />
    </div>
  );
}

export default App;

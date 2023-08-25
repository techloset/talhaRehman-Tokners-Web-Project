import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Cards from './components/Cards/Cards';
import PreSale from './components/PreSale/PreSale';
import HowToBuy from './components/HowToBuy/HowToBuy';
import ToknerComing from './components/ToknerComing/ToknerComing';
import History from './components/History/History';
import WhatMakes from './components/WhatMakes/WhatMakes';

function App() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Cards/>
    <WhatMakes/>
    <History/>
    <ToknerComing/>
    <PreSale/>
    <HowToBuy/>
    <Footer/>

    </>
  );
}

export default App;

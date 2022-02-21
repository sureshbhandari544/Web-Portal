import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Banner from './pages/banner/Banner';
// import About from './page/about-us/About';
import Footer from './components/footer/Footer';
import Profile from './pages/about-Us/Profile';
import Cards from './pages/cards/Cards';

function App() {
  return(
    <div className="App">
        <Header /><br></br>
       <Banner/><br></br>
      <Profile /><br></br><br></br>
      <Cards /><br></br><br></br>
     <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Nav from '../src/Components/Nav';
import Carousel from '../src/Components/Carousel';
import Cards from '../src/Components/Cards';
import ExploreSection from '../src/Components/ExploreSection';
import ReadyToJoin from '../src/Components/ReadyToJoin';
import SuccessfulStudent from '../src/Components/SuccessfulStudent';
import FeedbackStudent from '../src/Components/FeedbackStudent';
import QuestionAccordian from '../src/Components/QuestionAccordian';
import TrustedCompanies from '../src/Components/TrustedCompanies';
import Footer from '../src/Components/Footer';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="">
      <Nav/>
      <Carousel/>
      <Cards/>
      <ExploreSection/>
      <ReadyToJoin/>
      <SuccessfulStudent/>
      <FeedbackStudent/>
      <QuestionAccordian/>
      <TrustedCompanies/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;

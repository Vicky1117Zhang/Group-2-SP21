import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './About.css';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/rank">Rank</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/rank">
            <Rank />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return (
    <div className='about'>
      <h1 className="head1">About Us</h1>
      <h3 className="head2">Group Name</h3>
      <p className="onetext">Crypto Gram</p>
      <h3 className="head2">Project Description</h3>
        <h4 className="head3">Why we decided to make it?</h4>
        <p className="onetext">As the development of society, the crypto currencies are becoming more and more popular. 
                 Lots of people interested in these currencies and talk about them on social medias. <br/> Therefore, we want to build a fullstack web-scraping analysis webiste on certain key crypto currencies. 
                 This could help people to get the newest tendency of certain crypto currency in time. </p>
        <h4 className="head3">How the project works?</h4>
        <p className="onetext">We will complete this project in five stages.<br/>Stage 1: Research and learn React and Flask as well as any libraries that may be uesful.<br/>Stage 2: Make a low-res mockup of the frontend. Build out frontend to look list cryptocurrencies. 
               Work on web-scraping and processing the scraped data. Find occurrences of each cryptocurrency being mentioned.<br/>Stage 3: Refine frontend mockup Connect frontend and backend to properly show a ranking<br/>Stage 4: Add any complex frontend components and more NLP processsing (if feasible).<br/>Stage 5: Bug fixing and more polishing on application and processing in backend.</p>

    </div>
  );
}

function Rank() {
  return <h2>The Newest Rank</h2>;
}


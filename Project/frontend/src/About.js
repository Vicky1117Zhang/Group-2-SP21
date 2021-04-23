import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
    <div>
        <h1 style={{fontFamily: 'Century Gothic', fontSize: 40, color: '#148F77', textAlign:'center'}}>About</h1>
        <h3 style={{fontFamily: 'Century Gothic', fontSize: 25, color: '#20b2aa', textAlign:'center'}}>Group Name</h3>
        <p>Crypto Gram</p>
        <h3 style={{fontFamily: 'Century Gothic', fontSize: 25, color: '#20b2aa', textAlign:'center'}}>Project Description</h3>
            <h4 style={{fontFamily: 'Century Gothic', fontSize: 18, color: '#BDC3C7 ', textAlign:'left'}}>Why we decided to make it?</h4>
             <p style={{textAlign:'left'}}> As the development of society, the crypto currencies are becoming more and more popular. 
                 Lots of people interested in these currencies and talk about them on social medias. 
                 Therefore, we want to build a fullstack web-scraping analysis webiste on certain key crypto currencies. 
                 This could help people to get the newest tendency of certain crypto currency in time. </p>
            <h4 style={{fontFamily: 'Century Gothic', fontSize: 18, color: '#BDC3C7 ', textAlign:'left'}}>How the project works?</h4>
            <p style={{textAlign:'left'}}>We will complete this project in five stages.</p>
            <p style={{textAlign:'left'}}>Stage 1: Research and learn React and Flask as well as any libraries that may be uesful.</p>
            <p style={{textAlign:'left'}}>Stage 2: Make a low-res mockup of the frontend. Build out frontend to look list cryptocurrencies. 
               Work on web-scraping and processing the scraped data. Find occurrences of each cryptocurrency being mentioned.</p>
            <p style={{textAlign:'left'}}>Stage 3: Refine frontend mockup Connect frontend and backend to properly show a ranking</p>
            <p style={{textAlign:'left'}}>Stage 4: Add any complex frontend components and more NLP processsing (if feasible).</p>
            <p style={{textAlign:'left'}}>Stage 5: Bug fixing and more polishing on application and processing in backend.</p>          

    </div>
);
}

function Rank() {
  return <h2>The Newest Rank</h2>;
}


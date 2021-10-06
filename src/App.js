import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import useData from './hooks/useData';
import Nav from './components/Nav/Nav';
import Contact from './components/Contact/Contact';

function App() {

  useData()

  return (
    <div className="App">

      <BrowserRouter>

        <Nav />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/courses">
            <Courses />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="*">
            <h2>404</h2>
            <p>page not found</p>
          </Route>

        </Switch>

        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;

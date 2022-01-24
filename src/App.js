import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Footer from './components/layout/Footer'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Router>
      <Navbar />    
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/company">
            <Company />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/newproject">
            <NewProject />
          </Route>
        </Container>  
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

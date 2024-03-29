import React from 'react';
// components and pages
import Home from './pages/Home';
import Nav from './components/Nav';
// styles
import GlobalStyles from './components/GlobalStyles';
// router
import { Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;

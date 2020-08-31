import React from 'react';
import { BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import HomePage from './homePage';
import SliderPage from './sliderPage';

function App() {
  return (
    <div className="wrapper">
        <Router>
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/slider' component={SliderPage} />
          <Redirect from='/' to='/home'/>
        </Router>
    </div>
  );
}

export default App;

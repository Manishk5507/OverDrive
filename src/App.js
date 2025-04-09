import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Codeforces from './components/Codeforces';
import Weather from './components/Weather';
import News from './components/News';
import GitHub from './components/GitHub';
import Books from './components/Books';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-white mb-4">API Dashboard</h1>
      <div className="row gx-4 mb-4">
        <div className="col-md-6">
          <Codeforces />
        </div>
        <div className="col-md-6">
          <Weather />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <News />
        </div>
      </div>
      <div className="row gx-4 mb-4">
        <div className="col-md-6">
          <GitHub />
        </div>
        <div className="col-md-6">
          <Books />
        </div>
      </div>
    </div>
  );
}

export default App;

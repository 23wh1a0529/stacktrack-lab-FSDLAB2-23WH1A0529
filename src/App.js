import React from 'react';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import TaskList from('/tasklist')

function App() {
  return (
    <div>
      <Home />
      <Router>
        <Routes>
          <Route path='/' element={<TaskList />} />
        </Routes>
      </Router>

      {/* TODO: Replace this placeholder with Routes */}
    </div>
  );
}

export default App;

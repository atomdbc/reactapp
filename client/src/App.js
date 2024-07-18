import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>  {/* Wrap your Routes here */}
        <Route path="/" exact element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;

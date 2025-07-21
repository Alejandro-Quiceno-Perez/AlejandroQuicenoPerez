import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'
import AboutPage from './utils/AboutPage'

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/AlejandroQuicenoPerez" element={<Article />} />
          <Route path="/aboutPage" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import './App.css';

const App = () => {
  // class App extends Component {
  //   render() {
  return (

    <Router>
      <div className='App'>
        <NavBar />

        <div id='page-body'>
         
            <Routes>

              <Route path="/" element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/articles-list' element={<ArticlesListPage />} />
              <Route path='/article/:name' element={<ArticlePage />} />
              <Route element={NotFoundPage} />

            </Routes>
          

        </div>
      </div>

    </Router>

  );
}




export default App;

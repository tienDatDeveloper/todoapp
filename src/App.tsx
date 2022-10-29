import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import Header from './components/header/Header';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/todo' element={<TodoList />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

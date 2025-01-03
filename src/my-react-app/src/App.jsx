import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

const Header = () => (
    <header className="header">
        <h1>My React App</h1>
    </header>
);

const Sidebar = () => (
    <nav className="sidebar">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>
    </nav>
);

const MainContent = () => (
    <main className="main-content">
        <div>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo"/>
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </a>
        </div>
        <h1>Vite + React</h1>
    </main>
);

const App = () => (
    <div className="container">
        <Header/>
        <div className="content-wrapper">
            <Sidebar/>
            <MainContent/>
        </div>
    </div>
);

export default App;

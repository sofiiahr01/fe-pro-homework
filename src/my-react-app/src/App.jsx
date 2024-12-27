import { useState } from 'react'
import MyApp from './MyApp';
import Profile from './Profile';
import ShoppingList from './ShoppingList';
import CounterApp from './CounterApp';
import TogetherCounterApp from './TogetherCounterApp';
import Game from './Game';
import FilterableProductTable from './FilterableProductTable'
import Greeting from './Greeting'
import './App.css'

export default function App() {
    return (
        <div>
            <MyApp />
            <Profile />
            <ShoppingList />
            <CounterApp />
            <TogetherCounterApp />
            <Game />
            <FilterableProductTable />
            <Greeting />
        </div>
    );
}






import { useState } from 'react'
import MyApp from './MyApp';
import Profile from './Profile';
import ShoppingList from './ShoppingList';
import CounterApp from './CounterApp';
import TogetherCounterApp from './TogetherCounterApp';
import Game from './Game';
import FilterableProductTable from './FilterableProductTable'
import Greeting from './Greeting'
import MyButton from './MyButton'
import MyAppTS from './MyAppTS'
import StateReducer from './StateReducer'
import MyComponent from './MyComponent'
import HandleChange from './HandleChange'
import './App.css'
import Gallery from "./Gallery.jsx";
import TodoList from "./TodoList.jsx";
import PackingList from "./PackingList.jsx";
import TeaSet from "./TeaSet.jsx";
import Toolbar from "./Toolbar"
import Form from "./Form"
import Counter from "./Counter"
import BucketList from "./BucketList.jsx";

export default function App() {
    return (
        <div>
            <MyAppTS />
            <Profile />
            <ShoppingList />
            <CounterApp />
            <TogetherCounterApp />
            <Game />
            <FilterableProductTable />
            <Greeting />
            <MyButton />
            <MyAppTS />
            <StateReducer />
            <MyComponent />
            <HandleChange />
            <Gallery />
            <TodoList />
                <PackingList />
            <TeaSet />
            <Toolbar />
            <Form />
            <Counter />
                <BucketList />
        </div>
    );
}






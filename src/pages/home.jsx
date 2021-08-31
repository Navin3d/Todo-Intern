import React from 'react';
import Header from '../components/Header.jsx';
import AddTodoList from "../components/AddTodoList.jsx";
import TodoList from '../components/TodoList.jsx';

const Home = () => (
    <div className="home">
        <Header />
        <AddTodoList />
        <TodoList />
    </div>
);

export default Home;

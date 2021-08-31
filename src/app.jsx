import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.jsx';
import { Provider } from 'react-redux';
import { addNote, removeNote, editNote } from "./actions/Notes.jsx";
import ConfigureStore from './store/configureStore.jsx';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = ConfigureStore();

store.dispatch(addNote({id: 3, title: "It's My Life", item1: "Become Successful", item2: "Aim High", item3: "Become an Entrepreneur"}));
store.dispatch(addNote({id: 2, item1: "Earn Student of Year Medal", item2: "Complete atlest 10 Intern", item3: "Start up Soon"}));

console.log(store.getState());

store.dispatch(editNote(2, {title: "Pass B.E with 9 CGPA"}));

// console.log(store.getState());

// store.dispatch(removeNote(0));

console.log(store.getState());


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

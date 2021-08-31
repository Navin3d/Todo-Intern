import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem.jsx";
import AddTodoItem from "./AddTodoItem.jsx";
import { removeNote } from "../actions/Notes.jsx";
import { addItem1, addItem2, addItem3 } from "../actions/Notes.jsx";

const TodoList = (props) => {

    let display = true;

    return props.notes.map((note) => (
        <div key={note.id}>
            <button className="list" onClick={ () => display = !display } >{note.title} - {note.date}</button> 
            { console.log(display) }
            <button className="remove-list" onClick = { () => { props.dispatch(removeNote(note.id)) } } >Remove</button>
            { note.item1 == "" ? <AddTodoItem id={note.id} func={addItem1} /> : null }
            { note.item2 == "" ? <AddTodoItem id={note.id} func={addItem2} /> : null }
            { note.item3 == "" ? <AddTodoItem id={note.id} func={addItem3} /> : null }
            { display ? <TodoItem {...note} /> : null }
        </div>
    ));
};

const mapStateToProps = (state) => ({
    notes: state
});

export default connect(mapStateToProps)(TodoList);

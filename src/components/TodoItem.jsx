import React from "react";
import { connect } from "react-redux";
import { editNote } from "../actions/Notes.jsx";


const TodoItem = ({id, title, date, dispatch, item1, item2, item3}) => (
    <div key={id}>
        <ul>
            { item1 != "" ? <li>{ item1 } - <button className="remove-item" onClick = { () => {dispatch(editNote(id, {item1: ""}))} } >Remove</button></li> : null }
            { item2 != "" ? <li>{ item2 } - <button className="remove-item" onClick = { () => {dispatch(editNote(id, {item2: ""}))} } >Remove</button></li> : null }
            { item3 != "" ? <li>{ item3 } - <button className="remove-item" onClick = { () => {dispatch(editNote(id, {item3: ""}))} } >Remove</button></li> : null }
        </ul>
    </div>
);

const mapStateToProps = (state) => ({
    notes: state
});

export default connect(mapStateToProps)(TodoItem);

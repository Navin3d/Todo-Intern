import React from 'react';
import { connect } from "react-redux"; 
import { addItem1 } from "../actions/Notes.jsx";

const AddTodoItem = ({id, func, dispatch}) => {

    const onFormSubmit = (e) => {
        e.preventDefault();
        const note = e.target.elements.notes.value.trim();
        const error = dispatch(func(id, note));
        console.log("Error in State : ", error);
        e.target.elements.notes.value="";
    };

    return (
        <React.Fragment>
            {/* <p className="add-option-error"><b>{this.state.error && this.state.error}</b></p> */}
            <form className="add-option" onSubmit={ onFormSubmit }>
                <input className="add-item_input" type="text" name="notes" required/>&nbsp;&nbsp;
                <input className="item-submit" type="submit" value="Add Note..."/>
            </form>
        </React.Fragment>            
    );
}

export default connect()(AddTodoItem);

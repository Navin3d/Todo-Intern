import React from 'react';
import { connect } from "react-redux"; 
import { addNote } from "../actions/Notes.jsx";

const AddTodoList = ({dispatch}) => {

    const onFormSubmit = (e) => {
        e.preventDefault();
        const note = e.target.elements.notes.value.trim();
        const error = dispatch(addNote({title: note}));
        console.log("Error in State : ", error);
        e.target.elements.notes.value="";
    };

    return (
        <React.Fragment>
            {/* <p className="add-option-error"><b>{this.state.error && this.state.error}</b></p> */}
            <form className="add-option" onSubmit={ onFormSubmit }>
                <input className="add-list_input" type="text" name="notes" required/>&nbsp;&nbsp;
                <input className="list-submit" type="submit" value="Add Note..."/>
            </form>
        </React.Fragment>            
    );
}

const mapStateToProps = (state) => ({
    notes: state
});

export default connect(mapStateToProps)(AddTodoList);

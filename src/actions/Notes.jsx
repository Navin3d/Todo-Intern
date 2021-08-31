import { v1 } from "uuid";
import date from "date-and-time";

let dateObj = new Date();

let currentDate = () => date.format(dateObj, 'YY/MMM');

// Add Data
export const addNote = ({
        id =  v1(),
        title = "Your notes",
        date = currentDate(),
        item1 = "",
        item2 = "",
        item3 = "",
    
} = {}) => ({
    type: "ADD_TASK",
    id: v1(),
    todoList: {
        id,
        title,
        date,
        item1,
        item2,
        item3,
    }
});

// Remove Note
export const removeNote = (id) => ({
    type: "REMOVE_TASK",
    id,
});

// Edit Note
export const editNote = (id, updates = {}) => ({
    type: "EDIT_TASK",
    id,
    updates
});

// Remove Item1
export const addItem1 = (id, item1) => (
    editNote(id, {item1})
);

// Remove Item2
export const addItem2 = (id, item2) => (
    editNote(id, {item2})
);

// Remove Item3
export const addItem3 = (id, item3) => (
    editNote(id, {item3})
);

// Add Item
export const addItem = (id, updates) => ({
    type: "ADD_ITEM",
    id,
    updates
});

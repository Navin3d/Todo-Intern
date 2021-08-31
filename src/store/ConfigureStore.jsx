import { createStore } from "redux";
import Notes from "../reducers/Notes.jsx";

export default () => {
    const store = createStore(Notes);
    return store;
}

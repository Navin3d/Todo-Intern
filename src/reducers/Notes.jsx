//  Data reducer

const dataReducerDefaultState = []
// {
//     id: "1",
//     note: 80,
//     weather: "Good",
//     time: 0
// }

export default (state = dataReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                action.todoList
            ];

        case "REMOVE_TASK":
            return state.filter(({id}) => id !== action.id);

        case "REMOVE_ITEM1":
            return state.filter(({item1}) => item1 !== action.item1 );

        case "REMOVE_ITEM2":
            return state.filter(({item2}) => item2 !== action.item2);

        case "REMOVE_ITEM3":
            return state.filter(({item3}) => item3 !== action.item3);

        case "EDIT_TASK":
            return state.map((task) => {
                if(task.id == action.id) {
                    return {
                        ...task,
                        ...action.updates
                    };
                } else {
                    return task;
                }
            });

        default:
            return state;
    }
}

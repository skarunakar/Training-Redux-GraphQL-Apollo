import { createStore } from "redux";

const initialState = {
    books: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BOOKS":
            console.log(action.payload.data.data);
            return;
        default:
            return state;
    }
}

let store = createStore(reducer);

export default store;
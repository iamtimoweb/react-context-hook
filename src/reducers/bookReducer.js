export const bookReducer = function (state, action) {
    console.log(action);
    switch (action.type) {
        case "ADD_BOOK":
            return [...state, { title: action.book.title, author: action.book.author, id: Math.floor(Math.random() * 1000) }];
        case "DELETE_BOOK":
            return state.filter((book) => book.id !== action.id);

        default:
            return state;
    }
};

import { SET_USERS, SET_SEARCH, SET_SORT_BY, SET_SHOW_LOWEST } from './actions';
import { RootState } from './Types';

const initialState: RootState = {
    users: [],
    search: '',
    sortBy: 'bananas',
    showLowest: false,
};

const reducer = (state = initialState, action: any): RootState => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload };
        case SET_SEARCH:
            return { ...state, search: action.payload };
        case SET_SORT_BY:
            return { ...state, sortBy: action.payload };
        case SET_SHOW_LOWEST:
            return { ...state, showLowest: action.payload };
        default:
            return state;
    }
};

export default reducer;

import { SET_USERS, SET_SEARCH, SET_SORT_BY } from './actions';
import { IRootState } from '../Types';

const initialState: IRootState = {
    users: [],
    search: '',
    sortBy: 'rank',
};

const reducer = (state = initialState, action: any): IRootState => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload };
        case SET_SEARCH:
            return { ...state, search: action.payload };
        case SET_SORT_BY:
            return { ...state, sortBy: action.payload };
        default:
            return state;
    }
};

export default reducer;

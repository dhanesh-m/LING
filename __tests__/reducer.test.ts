import reducer from '../src/Store/reducers';
import { SET_USERS, SET_SEARCH, SET_SORT_BY, SET_SHOW_LOWEST } from '../src/Store/actions';
import { RootState, User } from '../src/Store/Types';

describe('reducer', () => {
    const initialState: RootState = {
        users: [],
        search: '',
        sortBy: 'bananas',
        showLowest: false,
    };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_USERS', () => {
        const users: User[] = [
            {
                bananas: 5, lastDayPlayed: '2024-06-01', longestStreak: 10, name: 'John', stars: 4, subscribed: true, uid: '1',
                rank: 0
            },
        ];
        const action = {
            type: SET_USERS,
            payload: users,
        };
        const expectedState = {
            ...initialState,
            users,
        };
        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle SET_SEARCH', () => {
        const search = 'John';
        const action = {
            type: SET_SEARCH,
            payload: search,
        };
        const expectedState = {
            ...initialState,
            search,
        };
        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle SET_SORT_BY', () => {
        const sortBy = 'name';
        const action = {
            type: SET_SORT_BY,
            payload: sortBy,
        };
        const expectedState = {
            ...initialState,
            sortBy,
        };
        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle SET_SHOW_LOWEST', () => {
        const showLowest = true;
        const action = {
            type: SET_SHOW_LOWEST,
            payload: showLowest,
        };
        const expectedState = {
            ...initialState,
            showLowest,
        };
        expect(reducer(initialState, action)).toEqual(expectedState);
    });
});

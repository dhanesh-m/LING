import reducer from '../src/Store/reducers';
import { SET_USERS, SET_SEARCH, SET_SORT_BY } from '../src/Store/actions';
import { IRootState } from '../src/Types';


describe('reducer', () => {
    const initialState: IRootState = {
        users: [],
        search: '',
        sortBy: 'rank',
    };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_USERS', () => {
        const users = [{ id: 1, name: 'User1', rank: 1 }];
        const action = { type: SET_USERS, payload: users };
        const expectedState = { ...initialState, users };
        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle SET_SEARCH', () => {
        const search = 'User';
        const action = { type: SET_SEARCH, payload: search };
        const expectedState = { ...initialState, search };
        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle SET_SORT_BY', () => {
        const sortBy = 'name';
        const action = { type: SET_SORT_BY, payload: sortBy };
        const expectedState = { ...initialState, sortBy };
        expect(reducer(initialState, action)).toEqual(expectedState);
    });
});

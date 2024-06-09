import { setUsers, setSearch, setSortBy, SET_USERS, SET_SEARCH, SET_SORT_BY } from '../src/Store/actions';
import { IUserDetails } from '../src//Types';

describe('actions', () => {
    it('should create an action to set users', () => {
        const users: IUserDetails[] = [
            {
                bananas: 5, lastDayPlayed: '2024-06-01', longestStreak: 10, name: 'John', stars: 4, subscribed: true, uid: '1',
                rank: 0
            },
        ];
        const expectedAction = {
            type: SET_USERS,
            payload: users,
        };
        expect(setUsers(users)).toEqual(expectedAction);
    });

    it('should create an action to set search', () => {
        const search = 'John';
        const expectedAction = {
            type: SET_SEARCH,
            payload: search,
        };
        expect(setSearch(search)).toEqual(expectedAction);
    });

    it('should create an action to set sortBy', () => {
        const sortBy = 'name';
        const expectedAction = {
            type: SET_SORT_BY,
            payload: sortBy,
        };
        expect(setSortBy(sortBy)).toEqual(expectedAction);
    });
});

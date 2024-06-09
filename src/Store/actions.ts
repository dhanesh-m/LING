import { IUserDetails } from '../Types';

export const SET_USERS = 'SET_USERS';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_SORT_BY = 'SET_SORT_BY';

export const setUsers = (users: IUserDetails[]) => ({
    type: SET_USERS,
    payload: users,
});

export const setSearch = (search: string) => ({
    type: SET_SEARCH,
    payload: search,
});

export const setSortBy = (sortBy: 'rank' | 'name' | 'bananas') => ({
    type: SET_SORT_BY,
    payload: sortBy,
});


import { User } from './Types';

export const SET_USERS = 'SET_USERS';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_SHOW_LOWEST = 'SET_SHOW_LOWEST';

export const setUsers = (users: User[]) => ({
    type: SET_USERS,
    payload: users,
});

export const setSearch = (search: string) => ({
    type: SET_SEARCH,
    payload: search,
});

export const setSortBy = (sortBy: 'bananas' | 'name') => ({
    type: SET_SORT_BY,
    payload: sortBy,
});

export const setShowLowest = (showLowest: boolean) => ({
    type: SET_SHOW_LOWEST,
    payload: showLowest,
});


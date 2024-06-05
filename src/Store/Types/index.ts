export interface User {
    rank: any;
    bananas: number;
    lastDayPlayed: string;
    longestStreak: number;
    name: string;
    stars: number;
    subscribed: boolean;
    uid: string;
}

export interface RootState {
    users: User[];
    search: string;
    sortBy: string,
    showLowest: boolean,
}
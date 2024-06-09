export interface IUserDetails {
    rank: number;
    bananas: number;
    lastDayPlayed: string;
    longestStreak: number;
    name: string;
    stars: number;
    subscribed: boolean;
    uid: string;
}

export interface IUserList {
    [key: string]: IUserDetails;
};

export interface IRootState {
    users: IUserDetails[];
    search: string;
    sortBy: string;
}

export interface ISortDirection {
    isRankAsc: boolean;
    isNameAsc: boolean;
    isBananasAsc: boolean;
}

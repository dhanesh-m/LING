import React, { useEffect } from 'react';
import { StyleSheet, View } from "react-native";
import Leaderboard from "../../Components/Leaderboard";
import SearchInput from "../../Components/SearchInput";
import { useDispatch } from "react-redux";
import { setUsers } from "../../Store/actions";
import { dataObj } from '../../Assets/Data';
import { Box } from '@gluestack-ui/themed';

const HomeScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUsers(dataObj));
    }, [dispatch]);

    return (
        <Box padding={15}>
            <SearchInput />
            <Leaderboard />
        </Box>
    );
};

export default HomeScreen;



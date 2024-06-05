import React, { useEffect } from 'react';
import { VStack } from '@gluestack-ui/themed';

import Leaderboard from "../../Components/Leaderboard";
import SearchInput from "../../Components/SearchInput";
import { useDispatch } from "react-redux";
import { setUsers } from "../../Store/actions";
import { userData } from '../../Assets/Data';

const HomeScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        let rankList= Object.values(userData).sort((a, b) => a.name.localeCompare(b.name))
        rankList= rankList.sort((a, b) => b.bananas - a.bananas)
        rankList = rankList.map((element, index) => {
            element.rank = index + 1;
            return element
        });
        dispatch(setUsers(rankList));
    }, [dispatch]);

    return (
        <VStack p={'$5'}>
            <SearchInput />
            <Leaderboard />
        </VStack>
    );
};

export default HomeScreen;



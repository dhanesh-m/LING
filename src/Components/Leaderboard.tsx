import React, { useState, useEffect } from 'react';
import { Alert, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Store/Types';
import { setSortBy } from '../Store/actions';
import { Box, Button, ButtonText, Text, HStack } from '@gluestack-ui/themed';
import { ErrorMessages } from '../Constants';

const Leaderboard = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users);
    const search = useSelector((state: RootState) => state.search);
    const sortBy = useSelector((state: RootState) => state.sortBy);
    const showLowest = useSelector((state: RootState) => state.showLowest);

    const [displayedUsers, setDisplayedUsers] = useState(Object.values(users));
    const [sortDirection, setSortDirection] = useState({ name: 'asc', bananas: 'desc', rank: 'asc' });

    useEffect(() => {
        sortAndFilterUsers();
    }, [users, sortBy, showLowest, search, sortDirection]);

    const sortAndFilterUsers = () => {
        let sortedUsers = Object.values(users).sort((a, b) => {
            if (sortBy === 'name') {
                return sortDirection.name === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            } else if (sortBy === 'bananas') {
                return sortDirection.bananas === 'asc' ? a.bananas - b.bananas : b.bananas - a.bananas;
            }
            return sortDirection.rank === 'asc' ? a.rank - b.rank : b.rank - a.rank;
        });

        if (showLowest) {
            sortedUsers = sortedUsers.slice(-10).reverse();
        } else {
            sortedUsers = sortedUsers.slice(0, 10);
        }

        const searchedUser = Object.values(users).find((user) => user.name === search);
        if (searchedUser && !sortedUsers.includes(searchedUser)) {
            sortedUsers[sortedUsers.length - 1] = searchedUser;
        } else if (!searchedUser && search) {
            Alert.alert(ErrorMessages.userNotExist);
        }
        setDisplayedUsers(sortedUsers);
    };

    const handleSortByName = () => {
        dispatch(setSortBy('name'));
        setSortDirection({ ...sortDirection, name: sortDirection.name === 'asc' ? 'desc' : 'asc' });
    };

    const handleSortByBananas = () => {
        dispatch(setSortBy('bananas'));
        setSortDirection({ ...sortDirection, bananas: sortDirection.bananas === 'asc' ? 'desc' : 'asc' });
    };

    const handleSortByRank = () => {
        dispatch(setSortBy('rank'));
        setSortDirection({ ...sortDirection, rank: sortDirection.rank === 'asc' ? 'desc' : 'asc' });
    };

    const renderItem = ({ item, index }: { item: any; index: number }) => (
        <Box bg={item.name === search ? '#ffeb3b' : '#f8f8f8'} flexDirection="row" borderBottomWidth={1} borderBottomColor="#ddd" paddingVertical={14} alignItems="center">
            <Text w={"$16"} fontSize={16} fontWeight="bold" color="#4a90e2" textAlign="center">
                {index + 1}.
            </Text>
            <Text w={"$48"} flex={1} fontSize={16} color="#333" textAlign="center">
                {item.name}
            </Text>
            <Text w={'$32'} flex={1} fontSize={16} color="#333" textAlign="center">
                {item.bananas} bananas
            </Text>
        </Box>
    );

    const renderHeader = () => (
        <Box justifyContent='center' bg="#4a90e2" paddingVertical={14} >
            <HStack justifyContent="center" w={"$96"}>
                <HStack w={"$12"} justifyContent="center" alignItems="center">
                    <Text fontWeight="bold" fontSize={16} color="$white">Rank</Text>
                    <Box ml={1}>
                        <Button size="xs" onPress={handleSortByRank} bgColor='transparent'>
                            <ButtonText color="$white">⇅</ButtonText>
                        </Button>
                    </Box>
                </HStack>
                <HStack w={"$40"} justifyContent="center" alignItems="center">
                    <Text fontWeight="bold" fontSize={16} color="$white">User</Text>
                    <Box ml={1}>
                        <Button size="xs" onPress={handleSortByName} bgColor='transparent'>
                            <ButtonText color="$white">⇅</ButtonText>
                        </Button>
                    </Box>
                </HStack>
                <HStack w={'$24'} justifyContent="center" alignItems="center">
                    <Text fontWeight="bold" fontSize={16} color="$white">Bananas</Text>
                    <Box ml={1}>
                        <Button size="xs" onPress={handleSortByBananas} bgColor='transparent'>
                            <ButtonText color="$white">⇅</ButtonText>
                        </Button>
                    </Box>
                </HStack>
            </HStack>
        </Box>
    );

    return (
        <Box mt={5} mx={5} borderWidth={1} borderColor="#ccc" borderRadius={10} overflow="hidden" bg="#f8f8f8">
            <FlatList
                data={displayedUsers}
                renderItem={renderItem}
                keyExtractor={(item) => item.uid}
                ListHeaderComponent={renderHeader}
            />
        </Box>
    );
};

export default Leaderboard;

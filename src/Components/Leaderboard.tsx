import React, { useState, useEffect } from 'react';
import { Alert, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, ButtonText, Text, HStack, Center } from '@gluestack-ui/themed';

import { IRootState, ISortDirection, IUserDetails } from '../Types';
import { setSortBy } from '../Store/actions';
import { ErrorMessages } from '../Constants';
import { glueStackConfig } from '../Utils/gluestack-config';

const { colors } = glueStackConfig.tokens;

const Leaderboard = () => {
    const dispatch = useDispatch();
    const { users, search, sortBy } = useSelector((state: IRootState) => state);
    const [displayedUsers, setDisplayedUsers] = useState(Object.values(users));
    const [sortDirection, setSortDirection] = useState<ISortDirection>({ isRankAsc: true, isNameAsc: true, isBananasAsc: false });

    useEffect(() => {
        sortAndFilterUsers();
    }, [ sortBy, search, sortDirection]);

    useEffect(() => {
        setDisplayedUsers(users);
    }, [users]);

    const sortAndFilterUsers = () => {
        let sortedUsers = Object.values(users).sort((a, b) => {
            if (sortBy === 'name') {
                return sortDirection.isNameAsc ? a.name?.toLowerCase().localeCompare(b.name?.toLowerCase()) : b.name?.toLowerCase().localeCompare(a.name?.toLowerCase());
            } else if (sortBy === 'bananas') {
                return sortDirection.isBananasAsc ? a.bananas - b.bananas : b.bananas - a.bananas;
            }
            return sortDirection.isRankAsc ? a.rank - b.rank : b.rank - a.rank;
        });

        sortedUsers = sortedUsers.slice(0, 10);

        const searchedUser = Object.values(users).find((user) => user.name?.toLowerCase() === search?.toLowerCase());
        if (searchedUser && !sortedUsers.includes(searchedUser)) {
            sortedUsers[sortedUsers.length - 1] = searchedUser;
        } else if (!searchedUser && search) {
            Alert.alert(ErrorMessages.userNoExistTitle, ErrorMessages.userNotExistMessage);
        }
    
        setDisplayedUsers(sortedUsers);
    };

    const handleSortByName = () => {
        dispatch(setSortBy('name'));
        setSortDirection(prev => ({ ...prev, isNameAsc: !prev.isNameAsc }));
    };

    const handleSortByBananas = () => {
        dispatch(setSortBy('bananas'));
        setSortDirection(prev => ({ ...prev, isBananasAsc: !prev.isBananasAsc }));
    };

    const handleSortByRank = () => {
        dispatch(setSortBy('rank'));
        setSortDirection(prev => ({ ...prev, isRankAsc: !prev.isRankAsc }));
    };

    const renderItem = ({ item: {rank, name, bananas} }: { item: IUserDetails }) => (
        <Center borderWidth={1} flexDirection="row" borderColor={colors.trueGray200} p='$3' py='$3.5' bg={name?.toLowerCase() === search?.toLowerCase() ? colors.yellow300 : colors.backgroundDark50}>
            <Text w={"$16"} fontSize="$md" fontWeight="bold" color={colors.info500} >
                {rank}.
            </Text>
            <Text flex={1} fontSize="$md" color={colors.textDark800} >
                {name}
            </Text>
            <Text fontSize="$md" color={colors.textDark800} >
                {bananas}
            </Text>
        </Center>
    );

    const renderHeader = () => (
        <Box flexDirection='row' bg={colors.info500} p='$3' pr='$0' borderTopRightRadius='$md' borderTopLeftRadius='$md' >
            <HStack alignItems="center" >
                <Text fontWeight="bold" fontSize='$md' color="$white">Rank</Text>
                <Box>
                    <Button action='negative' size="xs" pl='$1.5' bg={'transparent'} onPress={handleSortByRank} >
                        <ButtonText size='lg'>⇅</ButtonText>
                    </Button>
                </Box>
            </HStack>
            <HStack alignItems="center" flex={1} px={'$2'}>
                <Text fontWeight="bold" fontSize='$md' color="$white">User</Text>
                <Box>
                    <Button size="xs" pl='$1.5' bg={'transparent'} onPress={handleSortByName}>
                        <ButtonText size='lg'>⇅</ButtonText>
                    </Button>
                </Box>
            </HStack>
            <HStack alignItems="center" >
                <Text fontWeight="bold" fontSize='$md' color="$white">Bananas</Text>
                <Box>
                    <Button size="xs" pl='$1.5' bg={'transparent'} onPress={handleSortByBananas}>
                        <ButtonText size='lg'>⇅</ButtonText>
                    </Button>
                </Box>
            </HStack>
        </Box>
    );

    return (
        <Box my={'$2'} borderColor={colors.borderDark300} borderRadius={10} overflow="hidden" bg={colors.backgroundLight50}>
            <FlatList
                data={displayedUsers}
                renderItem={renderItem}
                keyExtractor={(item) => item.uid}
                ListHeaderComponent={renderHeader}
                stickyHeaderIndices={[0]}
            />
        </Box>
    );
};

export default Leaderboard;

import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../Store/actions';
import { HStack, Input, InputField, Pressable, Text } from '@gluestack-ui/themed';
import { RootState } from '../Store/Types';

const SearchInput = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const search = useSelector((state: RootState) => state.search);

    const handleSearch = () => {
        dispatch(setSearch(username));
    };

    useEffect(() => {
        setUsername(search)
    }, [search])

    return (
        <HStack space="md" my={'$3'}>
            <Input
                flex={3}
                variant="outline"
                size="md"
                borderRadius={10}>
                <InputField placeholder="Enter username" value={username}
                    onChangeText={setUsername} />
            </Input>
            <Pressable
                flex={1}
                justifyContent='center'
                borderColor="$primary500"
                alignItems='center'
                borderRadius={10}
                borderWidth={StyleSheet.hairlineWidth}
                onPress={handleSearch}>
                <Text>Search</Text>
            </Pressable>
        </HStack>
    );
};

export default SearchInput;
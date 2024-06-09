import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonText, HStack, Input, InputField } from '@gluestack-ui/themed';

import { setSearch } from '../Store/actions';
import { IRootState } from '../Types';

const SearchInput = () => {
    const search = useSelector((state: IRootState) => state.search);
    const [searchVal, setSearchVal] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {        
        Keyboard.dismiss();
        dispatch(setSearch(searchVal));
    };

    return (
        <HStack space="md" my={'$3'}>
            <Input
                flex={3}
                variant="outline"
                borderRadius={10}>
                    <InputField p='$0' placeholder="Enter username" value={searchVal} onChangeText={setSearchVal} />
            </Input>
            <Button
                disabled={search === searchVal}
                opacity={search === searchVal ? 0.5 : 1}
                variant='outline'
                onPress={handleSearch}>
                    <ButtonText>Search</ButtonText>
            </Button>
        </HStack>
    );
};

export default SearchInput;
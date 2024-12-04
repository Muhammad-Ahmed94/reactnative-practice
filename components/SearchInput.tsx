import React from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { icons } from '@/constants';
import colors from '@/constants/colors';

//* Add proper props attributes to read input values
interface searchInputProps {
  value?: string;
  handleTextChange?: (text: string) => void;
  placeholder: string;
}

const SearchInput: React.FC<searchInputProps> = ({
  value,
  handleTextChange,
  placeholder,
}) => {
  return (
    <View style={styles.searchInputCotainer}>
      <View style={[styles.searchInput]}>
        <TextInput
          value={value}
          onChangeText={handleTextChange}
          placeholder={placeholder}
          placeholderTextColor="gray"
          style={styles.textInput}
        />
        <TouchableOpacity>
            <Image source={icons.search} resizeMode="contain" style={{height: 20, width: 20}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchInputCotainer: {
    width: "100%",
    marginVertical: 20,
  },

  textStyle: {
    color: colors.white,
    marginBottom: 10,
    fontSize: 20,
  },

  searchInput: {
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 8,
    backgroundColor: "black",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  textInput: {
    color: colors.white,
    fontSize: 20,
  },
});

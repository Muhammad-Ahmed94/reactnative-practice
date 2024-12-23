import React, { useState } from 'react';
import { Alert, Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { icons } from '@/constants';
import colors from '@/constants/colors';
import { router, usePathname } from 'expo-router';

//* Add proper props attributes to read input values
interface searchInputProps {
  value?: string;
  handleTextChange?: (text: string) => void;
  placeholder: string;
  initialQuery: string;
}

const SearchInput: React.FC<searchInputProps> = ({
  value,
  handleTextChange,
  placeholder,
  initialQuery,
}) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View style={styles.searchInputCotainer}>
      <View style={[styles.searchInput]}>
        <TextInput
          value={query}
          onChangeText={(e) => setQuery(e)}
          placeholder={placeholder}
          placeholderTextColor="gray"
          style={styles.textInput}
        />
        <TouchableOpacity
          onPress={() => {
            if (!query) {
              Alert.alert("Error", "Missing input values");
            }
            if (pathname.startsWith("/search")) router.setParams({ query });
            else router.push(`/search/${query}`);
          }}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={{ height: 20, width: 20 }}
          />
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

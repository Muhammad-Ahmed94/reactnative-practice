import { Tabs } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { icons } from '../../constants';
import colors from '@/constants/colors';

const TabsLayout = () => {
  const TabIcons = ({ icon, color, name, focused}: {icon: any, color:string, name: string, focused: boolean}) => {
    return (
      <View style={styles.container}>
        <Image source= {icon} resizeMode='contain' tintColor={color} style={styles.navigationStyle} />
        <Text style={{color}}>{name}</Text>
      </View>
    )
  }

  return (
    <>
      <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#cdcde0',
        tabBarActiveTintColor: '#ffa001',
        tabBarStyle: {
          backgroundColor: colors.navBarColorPrimary,
          height: 100,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        }
      }}
      >
        <Tabs.Screen 
        name='home'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused}) => (
            <TabIcons 
            icon={icons.home}
            name='Home'
            color= {color}
            focused= {focused}
            />
          )
        }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcons
                icon={icons.bookmark}
                name="Bookmark"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcons
                icon={icons.plus}
                name="Create"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcons
                icon={icons.profile}
                name="Profile"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}


export default TabsLayout

const styles = StyleSheet.create({
  navigationStyle: {
    width: 20,
    height: 20,
  },

  container: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    width: 60,
    textAlign: 'center'
  },
});
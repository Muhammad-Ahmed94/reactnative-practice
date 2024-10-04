import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { icons } from '../../constants'

const TabsLayout = () => {
  const TabIcons = ({ icon, color, name, focused}: {icon: any, color:string, name: string, focused: boolean}) => {
    return (
      <View>
        <Image source= {icon} resizeMode='contain' tintColor={color} style={styles.navigationStyle} />
      </View>
    )
  }

  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcons icon={icons.home} name="Home" color={color} focused={focused} />
            )
          }}
        />
      </Tabs>
    </>
  );
}

export default TabsLayout

const styles = StyleSheet.create({
  navigationStyle: {
    width: 15,
    height: 15,
  }
})
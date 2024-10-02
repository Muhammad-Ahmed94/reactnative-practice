import { Image, StyleSheet, Platform, Text, View, StatusBar, ActivityIndicator, Button, Alert } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const handlepress = () => {
    console.log('you pressed the button');
    Alert.alert(
      "important alert",
      "importatn alert sub heading",
      [
        {text: 'Cancel', onPress: () => console.log('cancel button pressed')},
        {text: 'OK', onPress: () => console.log('OK button was pressed')}
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={{color:'#000', textAlign:'center'}}>hellow react nativve</Text>
      <Text style={{color:'#000', textAlign:'center'}}>Hello muneeb </Text>
      <HelloWave />
      <ActivityIndicator size='large' style={{backgroundColor:"#808080", }} />
      <Button title='click here' color='#f0f0f0' onPress={handlepress} />
      <StatusBar>
      </StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap:5,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'space-around'
  },
});

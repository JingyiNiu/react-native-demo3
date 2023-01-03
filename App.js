import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="p-5 bg-amber-100 text-amber-500">Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

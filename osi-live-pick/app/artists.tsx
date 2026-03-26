import { View, Text, StyleSheet } from 'react-native';

export default function ArtistsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>推し画面（準備中）</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
});

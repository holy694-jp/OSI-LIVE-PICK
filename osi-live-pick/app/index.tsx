import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>OSI LIVE PICK</Text>

      <Text style={styles.sectionTitle}>近日公演</Text>

      <View style={styles.card}>
        <Text style={styles.artist}>米津玄師</Text>
        <Text style={styles.info}>📅 3/25 (火)</Text>
        <Text style={styles.info}>📍 Zepp Shinjuku</Text>
        <Text style={styles.ticket}>🎟 チケット発売中 →</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.artist}>ずっと真夜中でいいのに</Text>
        <Text style={styles.info}>📅 4/1 (水)</Text>
        <Text style={styles.info}>📍 日本武道館</Text>
        <Text style={styles.ticket}>🎟 先行受付中 →</Text>
      </View>

      <Text style={styles.sectionTitle}>✨ 新着</Text>

      <View style={styles.newCard}>
        <Text style={styles.newText}>ずとまよ 追加ツアー発表！</Text>
        <Text style={styles.time}>2時間前</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    padding: 16,
  },
  header: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 48,
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#aaaaaa',
    fontSize: 14,
    marginBottom: 12,
    marginTop: 8,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  artist: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  info: {
    color: '#cccccc',
    fontSize: 14,
    marginBottom: 2,
  },
  ticket: {
    color: '#7eb8f7',
    fontSize: 14,
    marginTop: 8,
  },
  newCard: {
    backgroundColor: '#1a2a1a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  newText: {
    color: '#ffffff',
    fontSize: 14,
  },
  time: {
    color: '#888888',
    fontSize: 12,
    marginTop: 4,
  },
});

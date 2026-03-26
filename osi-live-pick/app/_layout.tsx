import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: '#0f0f0f', borderTopColor: '#333' },
        tabBarActiveTintColor: '#7eb8f7',
        tabBarInactiveTintColor: '#888',
        headerStyle: { backgroundColor: '#0f0f0f' },
        headerTintColor: '#ffffff',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'ホーム', tabBarLabel: 'ホーム' }}
      />
      <Tabs.Screen
        name="artists"
        options={{ title: '推し', tabBarLabel: '推し' }}
      />
      <Tabs.Screen
        name="settings"
        options={{ title: '設定', tabBarLabel: '設定' }}
      />
    </Tabs>
  );
}

import { Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";

import { theme } from "@/theme";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>Home</Text>

      <StatusBar backgroundColor={theme.colors.green.dark} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.main,
    alignItems: "center",
    justifyContent: "center",
  },
});

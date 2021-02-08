import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar as StatusBarRN,
  Platform,
} from "react-native";
import { getNewsApi } from "./src/api/news";
import New from "./src/components/New";

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsApi().then((resp) => {
      setNews(resp);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Últimas noticias!</Text>
      <ScrollView style={styles.scroll}>
        {news.map((n) => (
          <New key={n.id} {...n}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBarRN.currentHeight : 0,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    paddingVertical: 10,
  },
  scroll: {
    height: "100%",
  },
});

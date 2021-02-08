import moment from "moment";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Linking,Alert } from "react-native";
import urlParser from "url-parse";
import es from "moment/locale/es"
import * as WebBrowser from 'expo-web-browser';


export default function New({ title, url, created_at }) {

  const handlePress = async () => {
    let opened = await WebBrowser.openBrowserAsync(url, {toolbarColor: "#000"})
    if (opened.type !== "opened") Linking.openURL(url)
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.new}>
        <Text style={styles.url}>{urlParser(url).host}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{moment(created_at).local(es).startOf().fromNow()}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  new: {
    padding: 20,
    borderBottomColor: "grey",
    borderWidth: 1,
  },
  url: {
    paddingBottom: 5,
    color: "grey",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  time: {
    paddingTop: 10,
    color: "grey"
  }
});

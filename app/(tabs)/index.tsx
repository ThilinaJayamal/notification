import { useEffect, useState } from "react";
import { Platform, SafeAreaView, StatusBar, View, Text } from "react-native";
import { useNotification } from "@/context/NotificationContext";

export default function HomeScreen() {
  const { notification, expoPushToken, error } = useNotification();

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 10,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Updates Demo 5</Text>
        <Text style={{ color: "red" }}>
          Your push token:
        </Text>
        <Text style={{color:'red'}}>{expoPushToken}</Text>
        <Text>Latest notification:</Text>
        <Text>{notification?.request.content.title}</Text>
        <Text>
          {JSON.stringify(notification?.request.content.data, null, 2)}
        </Text>
      </SafeAreaView>
    </View>
  );
}

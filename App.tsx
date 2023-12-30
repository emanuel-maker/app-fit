import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from "./src/screens/games/Games";
import Profile from "./src/screens/profile";
import { QueryClient, QueryClientProvider } from "react-query";

const Tab = createBottomTabNavigator();

const Menu = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: (payload) => (
              <FontAwesome5
                name="futbol"
                size={24}
                color={payload.focused ? "#BEEA00" : "white"}
              />
            ),
            tabBarLabel: "Partidos",
            tabBarBadgeStyle: {
              backgroundColor: "#BEEA00",
            },
            tabBarStyle: {
              backgroundColor: "black",
            },
            tabBarInactiveTintColor: "white",
            tabBarActiveTintColor: "#BEEA00",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
          name="Fútbol en Barcelona"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: (payload) => (
              <AntDesign
                name="notification"
                size={24}
                color={payload.focused ? "#BEEA00" : "white"}
              />
            ),
            tabBarStyle: {
              backgroundColor: "black",
            },
            tabBarInactiveTintColor: "white",
            tabBarActiveTintColor: "white",
          }}
          name="Eventos"
          component={Profile}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: (payload) => (
              <Ionicons
                name="chatbox-outline"
                size={24}
                color={payload.focused ? "#BEEA00" : "white"}
              />
            ),
            tabBarStyle: {
              backgroundColor: "black",
            },
            tabBarInactiveTintColor: "white",
            tabBarActiveTintColor: "white",
          }}
          name="Chat"
          component={Profile}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: (payload) => (
              <Ionicons
                name="ios-person-outline"
                size={24}
                color={payload.focused ? "#BEEA00" : "white"}
              />
            ),
            tabBarStyle: {
              backgroundColor: "black",
            },
            tabBarInactiveTintColor: "white",
            tabBarActiveTintColor: "white",
          }}
          name="Perfil"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const islogged = false;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3, // after 3 minutes
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Menu />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

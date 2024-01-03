import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import GameScreen from "./src/screens/games/Games";
import Profile from "./src/screens/profile";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "styled-components/native";
import theme from "./theme";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Game = ({ route }: any) => {
  const { id } = route.params;
  return (
    <SafeAreaView>
      <Text>content: {id}</Text>
    </SafeAreaView>
  );
};

const CustomHeader = ({ navigation, route }: any) => {
  const { id } = route.params;
  return (
    <SafeAreaView style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={24} color="black" />
        <Text>header: {id}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const StackGames = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Juegos"
        component={GameScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Game"
        component={Game}
        options={{
          headerShown: true,
          header: (props) => <CustomHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

const Menu = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "black",
            borderBlockStartColor: "black",
          },
          tabBarItemStyle: {
            backgroundColor: "black",
          },
          tabBarActiveTintColor: "#BEEA00",
        }}
      >
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
          }}
          name="Fútbol en Barcelona"
          component={StackGames}
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
            tabBarLabel: "Eventos",
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
            tabBarLabel: "Chat",
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
            tabBarLabel: "Perfil",
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
      staleTime: 1000 * 60 * 3, // cache after 3 minutes
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Menu />
      </QueryClientProvider>
    </ThemeProvider>
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

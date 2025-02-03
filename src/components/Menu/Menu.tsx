import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
//import Games from "@screens/Games/Games";
//import Profile from "@screens/Profile/Profile";
import React from "react";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import Games from "../../screens/games/Games";
import GameDetail from "@screens/GameDetail";


const Page = () => {
	return (
		<View>
			<Text>Menu</Text>
		</View>
	)
}

const StackGames = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Juegos"
				component={Games}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Game"
				component={GameDetail}
				options={{
					headerShown: false,
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
						tabBarIcon: payload => (
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
						tabBarIcon: payload => (
							<AntDesign
								name="notification"
								size={24}
								color={payload.focused ? "#BEEA00" : "white"}
							/>
						),
						tabBarLabel: "Eventos",
					}}
					name="Eventos"
					component={Page}
				/>
				<Tab.Screen
					options={{
						headerShown: false,
						tabBarIcon: payload => (
							<Ionicons
								name="ios-person-outline"
								size={24}
								color={payload.focused ? "#BEEA00" : "white"}
							/>
						),
						tabBarLabel: "Perfil",
					}}
					name="Perfil"
					component={Page}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default Menu;

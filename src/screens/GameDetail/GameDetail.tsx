import { View, Text, ScrollView, Dimensions, Pressable } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StatusBar } from "expo-status-bar";
import { Info, Players, Chat, Header } from "./components";
import { AntDesign } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const GameDetail = ({ route, navigation }: any) => {
	return (
		<View
			style={{
				flex: 1,
				width: "100%",
				height: "100%",
				backgroundColor: "black",
			}}
		>
			<StatusBar style="light" />

			<Header navigation={navigation} />

			{/* TAB NAVIGATION */}
			<Tab.Navigator
				style={{ padding: 10 }}
				screenOptions={{
					tabBarIndicatorStyle: { backgroundColor: "#BEEA00" },
					tabBarActiveTintColor: "#BEEA00",
					tabBarInactiveTintColor: "white",
					tabBarStyle: { backgroundColor: "black" },
					tabBarLabelStyle: { fontSize: 15 },
				}}
			>
				<Tab.Screen name="Info" component={Info} />
				<Tab.Screen name="Jugadores" component={Players} />
				<Tab.Screen name="Chat" component={Chat} />
			</Tab.Navigator>
			<View
				style={{
					width: "100%",
					alignItems: "center",
					paddingLeft: 40,
					paddingRight: 40,
				}}
			>
				<Pressable
					onPress={() => {
						console.log("press");
					}}
					onLongPress={() => {
						console.log("Loonnngg press!");
					}}
					style={{
						backgroundColor: "#BEEA00",
						padding: 10,
						borderRadius: 10,
						marginTop: 10,
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
						width: "100%",
					}}
				>
					<AntDesign name="adduser" size={20} color="black" />
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							color: "black",
						}}
					>
						Apuntarme: +6,99€
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default GameDetail;

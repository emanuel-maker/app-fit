import {
	ImageBackground,
	Pressable,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useState } from "react";

const Tab = createMaterialTopTabNavigator();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageGame = require("../../../assets/campo.jpeg");

const Info = () => {
	const [showMore, setShowMore] = useState(false);

	const handlerShowMore = () => {
		setShowMore(!showMore);
	};
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: "black",
				paddingTop: 15,
				height: "100%",
				padding: 15,
			}}
		>
			<TouchableOpacity
				style={{
					display: "flex",
					flexDirection: "row",
					backgroundColor: "#292929",
					borderRadius: 10,
					alignItems: "center",
					padding: 10,
					marginBottom: 10,
				}}
			>
				<Ionicons name="md-location-outline" size={30} color="white" />
				<Text
					style={{
						color: "white",
						fontSize: 18,
						marginLeft: 10,
					}}
				>
					C. Encarnación 10, H. de Llobregat
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					flexDirection: "row",
					backgroundColor: "#292929",
					borderRadius: 10,
					alignItems: "center",
					padding: 10,
				}}
			>
				<Ionicons name="calendar" size={30} color="white" />
				<Text style={{ color: "white", fontSize: 18, marginLeft: 10 }}>
					24 Jul, 20:30h - 20:45h
				</Text>
			</TouchableOpacity>
			<View
				style={{
					borderRadius: 10,
					padding: 10,
				}}
			>
				<Text
					style={{
						color: "white",
						fontSize: 20,
						borderWidth: 1,
						borderRadius: 10,
					}}
				>
					Descripción de Juego
				</Text>
				<Text
					numberOfLines={showMore ? undefined : 2}
					style={{ color: "white", marginTop: 10 }}
				>
					🔥 Este evento tiene suplentes, estos partidos suelen tener una alta
					intensidad, por lo que se espera que los jugadores se cuiden y tomen
					un descanso adicional rotando posiciones.
					{"\n"}
					{"\n"}
					Recuerda:
					{"\n"}
					{"\n"}❌ No obtendrás reembolso si abandonas juego.
					{"\n"}
					{"\n"}⏰ Tienes que estar 15m antes para presentarte ante el
					organizador.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🧤 Todos lo jugadores deberan pasar por porteria.
				</Text>

				<TouchableWithoutFeedback onPress={handlerShowMore}>
					<Text style={{ color: "#BEEA00", marginTop: 10 }}>
						{showMore ? "Ver menos" : "Ver más"}
					</Text>
				</TouchableWithoutFeedback>
				<View style={{ width: "100%", alignItems: "center" }}>
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
		</ScrollView>
	);
};

const Players = () => {
	return (
		<View style={{ flex: 1, backgroundColor: "black", padding: 15 }}>
			<Text style={{ color: "white" }}>Players</Text>
		</View>
	);
};

const Chat = () => {
	return (
		<View style={{ flex: 1, backgroundColor: "black", padding: 15 }}>
			<Text style={{ color: "white" }}>Chat</Text>
		</View>
	);
};

const GameDetail = ({ route, navigation }: any) => {
	const insets = useSafeAreaInsets();
	return (
		<View
			style={{
				backgroundColor: "black",
				height: "100%",
				width: "100%",
			}}
		>
			<StatusBar style="light" />
			<ImageBackground
				source={imageGame}
				style={{ width: "100%", height: 150 }}
			>
				<LinearGradient
					style={{
						backgroundColor: "#000000c0",
						flexDirection: "column",
						height: "100%",
						paddingLeft: 15,
					}}
					colors={["rgba(0, 0, 0, 0)"]}
					start={{ x: 1, y: 1 }}
					end={{ x: 1, y: 0.1 }}
				>
					<View
						style={{
							flex: 1,
							paddingTop: insets.top,
						}}
					>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<MaterialIcons name="arrow-back-ios" size={25} color="white" />
						</TouchableOpacity>
					</View>
					<View
						style={{
							flex: 2,
							flexDirection: "row",
						}}
					>
						<View
							style={{
								flexDirection: "column",
								justifyContent: "center",
								flex: 2,
							}}
						>
							<Text style={{ color: "white", fontSize: 30 }}>Gran Via</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<Ionicons
									name="md-people-circle-outline"
									size={14}
									color="white"
								/>
								<Text style={{ color: "white", fontSize: 15 }}>7vs7</Text>
							</View>
						</View>

						<View
							style={{
								flex: 1,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Text
								style={{
									color: "white",
									fontSize: 18,
									borderWidth: 1,
									padding: 5,
									borderRadius: 10,
									borderColor: "#BEEA00",
								}}
							>
								Disponible
							</Text>
						</View>
					</View>
				</LinearGradient>
			</ImageBackground>

			{/* TAB NAVIGATION */}

			<Tab.Navigator
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
		</View>
	);
};

export default GameDetail;

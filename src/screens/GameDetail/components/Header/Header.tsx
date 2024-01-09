import {
	ImageBackground as ImageBackgroundReact,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageGame = require("../../../../../assets/campo.jpeg");

const Header = ({ navigation }: any) => {
	const insets = useSafeAreaInsets();
	return (
		<ImageBackgroundReact
			source={imageGame}
			style={{ width: "100%", height: 180 }}
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
						alignItems: "flex-start",
						justifyContent: "flex-end",
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
						<Text
							style={{ color: "white", fontSize: 30, fontFamily: "regular" }}
						>
							Gran Via
						</Text>
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
							<Text
								style={{ color: "white", fontSize: 15, fontFamily: "regular" }}
							>
								7vs7
							</Text>
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
								fontFamily: "regular",
							}}
						>
							Disponible
						</Text>
					</View>
				</View>
			</LinearGradient>
		</ImageBackgroundReact>
	);
};

export default Header;

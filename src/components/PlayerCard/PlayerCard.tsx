import { View, Text, TouchableOpacity, Image } from "react-native";

const Divider = () => {
	return (
		<View
			style={{
				borderBottomColor: "gray",
				borderBottomWidth: 1,
				marginVertical: 10,
			}}
		/>
	);
};

interface IProps {
	player: { id: string; name: string; rol: string; rank: string };
}

const PlayerCard = ({ player }: IProps) => {
	return (
		<TouchableOpacity
			style={{
				marginTop: 10,
				display: "flex",
				flexDirection: "row",
				borderRadius: 10,
				alignItems: "center",
				padding: 4,
				borderWidth: 1,
				borderColor: "gray",
				backgroundColor: "#1E1E1E",
			}}
		>
			<Image
				source={{ uri: "https://i.pravatar.cc/300?img=2" }}
				style={{ width: 50, height: 50, borderRadius: 10 }}
			/>
			<View style={{ flex: 1, flexDirection: "column" }}>
				<Text
					style={{
						color: "white",
						fontSize: 18,
						marginLeft: 10,
						fontFamily: "regular",
					}}
				>
					{player.name}
				</Text>
				<Text
					style={{
						color: "white",
						fontSize: 15,
						marginLeft: 10,
						fontFamily: "regular",
					}}
				>
					{player.rank}
				</Text>
			</View>
			<Divider />
		</TouchableOpacity>
	);
};

export default PlayerCard;

import {
	ScrollView,
	Text,
	TouchableOpacity,
	View,
	Image,
	FlatList,
	SectionList,
} from "react-native";
import PlayerCard from "@components/PlayerCard/PlayerCard";

const players = [
	{
		id: "uuid-1",
		rol: "Organizador",
		name: "Emanuel Vallejo",
		rank: "Intermedio",
	},
	{
		id: "uuid-2",
		rol: "Jugador",
		name: "Alejandro Saens",
		rank: "Experto",
	},
	{
		id: "uuid-3",
		rol: "Jugador",
		name: "Alejandro Saens",
		rank: "Junior",
	},
	{
		id: "uuid-4",
		rol: "Jugador",
		name: "Alejandro Saens",
		rank: "Avanzado",
	},
	{
		id: "uuid-5",
		rol: "Jugador",
		name: "Alejandro Saens",
		rank: "Junior",
	},
];

const organizer = {
	id: "uuid-1",
	rol: "Organizador",
	name: "Emanuel Vallejo",
	rank: "Leyenda",
};

const Players = () => {
	return (
		<View style={{ flex: 1, backgroundColor: "black" }}>
			<Text style={{ color: "white", fontFamily: "bold", fontSize: 20 }}>
				Organizador
			</Text>
			<PlayerCard player={organizer} key={organizer.id} />
			<Text
				style={{
					color: "white",
					fontFamily: "bold",
					fontSize: 20,
					paddingTop: 20,
				}}
			>
				Jugadores
			</Text>
			<FlatList
				style={{
					backgroundColor: "black",
				}}
				data={players}
				showsVerticalScrollIndicator={false}
				keyExtractor={player => player.id}
				renderItem={({ item }) => <PlayerCard player={item} key={item.id} />}
			/>
		</View>
	);
};

export default Players;

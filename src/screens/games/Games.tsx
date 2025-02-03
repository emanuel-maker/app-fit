import React from "react";
import { View } from "react-native";

import {
	MaterialIcons,
	Octicons,
	FontAwesome,
	Ionicons,
} from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Tittle, DateItem, SimpleFilter } from "./components";
import { useQuery } from "react-query";
import { getMatchesByDate } from "./services/Transport";
import {
	TextDateStyled,
	FlatListDateStyled,
	ViewFilterStyled,
	FlatListGamesStyled,
	ViewStyled,
} from "./styles";
import { StatusBar } from "expo-status-bar";
import GameCard from "@components/GameCard";
import type IGame from "@models/GameModel";
import { useDateItems } from "./hooks";

const Games = ({ navigation }: any) => {
	const insets = useSafeAreaInsets();
	const { dateItems, dateIdSelected, handlePress } = useDateItems();

	const { data } = useQuery(
		["matchesByDate", dateIdSelected],
		async () => await getMatchesByDate(dateItems[dateIdSelected]),
	);

	return (
		<ViewStyled paddinTop={insets.top}>
			<StatusBar style="light" />
			{/** Tittle */}
			<Tittle />

			{/** Dates */}
			<FlatListDateStyled
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				data={dateItems}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => (
					<DateItem
						key={item.id}
						isClicked={dateIdSelected === item.id}
						dateItem={item}
						handlePress={handlePress}
					/>
				)}
			/>

			{/** TODO: Refactor to flatlist and encapsule filters */}
			<ViewFilterStyled
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			>
				<SimpleFilter name="Filtros">
					<Octicons name="filter" size={15} color="white" />
				</SimpleFilter>
				<SimpleFilter name="Fútbol Campo">
					<FontAwesome name="futbol-o" size={15} color="white" />
				</SimpleFilter>
				<SimpleFilter name="8vs8">
					<Ionicons name="ios-people-circle-outline" size={15} color="white" />
				</SimpleFilter>
				<SimpleFilter name="Grabado">
					<MaterialIcons name="photo-camera" size={15} color="white" />
				</SimpleFilter>
				<SimpleFilter name="Fútbol Sala">
					<FontAwesome name="futbol-o" size={15} color="white" />
				</SimpleFilter>
			</ViewFilterStyled>

			{/** Games */}
			<View>
				<TextDateStyled>Hoy, Vie 30 Diciembre 2023</TextDateStyled>
			</View>
			<FlatListGamesStyled
				data={data}
				showsVerticalScrollIndicator={false}
				keyExtractor={game => game.id}
				renderItem={({ item }) => (
					<GameCard
						game={item}
						key={item.id}
						onPress={() => {
							navigation.navigate("Game", { id: item.id });
						}}
					/>
				)}
			/>
		</ViewStyled>
	);
};

export default Games;

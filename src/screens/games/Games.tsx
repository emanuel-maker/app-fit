import React from "react";
import { View } from "react-native";

import {
	MaterialIcons,
	Octicons,
	FontAwesome,
	Ionicons,
} from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDateItems } from "./hooks";
import { TittleApp, GameCard, DateItem, SimpleFilter } from "./components";
import { useQuery } from "react-query";
import { getMatchesByDate } from "./services/Transport";
import type IGame from "@models/GameModel";
import {
	TextDateStyled,
	ViewDateStyled,
	ViewFilterStyled,
	ViewGamesStyled,
	ViewStyled,
} from "./styles";

export default function GameScreen({ navigation }: any) {
	const insets = useSafeAreaInsets();

	const [games, setGames] = React.useState<IGame[]>([]);

	const { dateItems, dateSelected, handlePress } = useDateItems();
	const { data } = useQuery(
		["matchesByDate", dateSelected],
		async () => await getMatchesByDate(dateItems[dateSelected]),
	);

	React.useEffect(() => {
		setGames(data ?? []);
	}, [data]);

	return (
		<ViewStyled paddinTop={insets.top}>
			{/** Tittle */}
			<TittleApp />

			{/** Dates */}
			<ViewDateStyled horizontal={true} showsHorizontalScrollIndicator={false}>
				{dateItems.map(dateItem => (
					<DateItem
						key={dateItem.id}
						dateItem={dateItem}
						handlePress={handlePress}
					/>
				))}
			</ViewDateStyled>

			{/** Filters */}
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
			<ViewGamesStyled>
				<View>
					<TextDateStyled>Hoy, Vie 30 Diciembre 2023</TextDateStyled>
					{games.map(game => {
						return (
							<GameCard
								game={game}
								key={game.id}
								onPress={() => {
									navigation.navigate("Game", { id: game.id });
								}}
							/>
						);
					})}
				</View>
			</ViewGamesStyled>
		</ViewStyled>
	);
}

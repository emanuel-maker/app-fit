import type IGame from "@models/GameModel";
import {
	TextDescriptionStyled,
	TextHourStyled,
	TextStatusStyled,
	TouchableOpacityStyled,
	ViewDescriptionStyled,
	ViewDetailStyled,
	ViewHourStyled,
	ViewStatuStyled,
	ViewTypeStyled,
	colorStatus,
} from "./styles";

import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface IProps {
	game: IGame;
	onPress?: () => void;
}

export default function GameCard({ game, onPress }: IProps) {
	return (
		<TouchableOpacityStyled key={game.id} onPress={onPress}>
			<ViewHourStyled>
				<TextHourStyled>{game.hour}</TextHourStyled>
			</ViewHourStyled>
			<ViewDescriptionStyled>
				<TextDescriptionStyled fontSize={18}>
					{game.title}
				</TextDescriptionStyled>
				<ViewDetailStyled>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Ionicons name="md-people-circle-outline" size={14} color="white" />
						<Text
							style={{
								color: "white",
							}}
						>
							{game.type}
						</Text>
					</View>

					<ViewTypeStyled
						style={{
							borderRadius: 10,
						}}
					>
						<Text style={{ color: "white" }}>Subs 11 / 14</Text>
					</ViewTypeStyled>
				</ViewDetailStyled>
			</ViewDescriptionStyled>

			<ViewStatuStyled status={game.status.toLowerCase()}>
				<TextStatusStyled
					style={{ borderRadius: 10 }}
					status={game.status.toLowerCase()}
				>
					{game.status}
				</TextStatusStyled>
				<MaterialIcons name="arrow-forward-ios" size={20} color="white" />
			</ViewStatuStyled>
		</TouchableOpacityStyled>
	);
}

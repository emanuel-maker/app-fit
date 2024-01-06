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
	ViewSubsStyled,
	ViewTypeStyled,
} from "./styles";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

interface IProps {
	game: IGame;
	onPress?: () => void;
}

const GameCard = ({ game, onPress }: IProps) => {
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
					<ViewTypeStyled>
						<Ionicons name="md-people-circle-outline" size={14} color="white" />
						<TextDescriptionStyled fontSize={14}>
							{game.type}
						</TextDescriptionStyled>
					</ViewTypeStyled>

					<ViewSubsStyled
						style={{
							borderRadius: 10,
						}}
					>
						<Text style={{ color: "white" }}>
							Subs {game.totalPlayersJoined} / {game.totalPlayers}
						</Text>
					</ViewSubsStyled>
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
};

export default GameCard;

import type IDateItem from "../../models/DateItemModel";
import { TextStyled, TouchableOpacityStyled } from "./styles";

interface IProps {
	dateItem: IDateItem;
	handlePress: (id: number) => void;
}

export default function DateItem({ dateItem, handlePress }: IProps) {
	return (
		<TouchableOpacityStyled
			key={dateItem.id}
			onPress={() => { handlePress(dateItem.id); }}
			isSelected={dateItem.isSelected}
		>
			<TextStyled isSelected={dateItem.isSelected}>
				{dateItem.dayWeek}
			</TextStyled>
			<TextStyled isSelected={dateItem.isSelected}>{dateItem.day}</TextStyled>
		</TouchableOpacityStyled>
	);
}

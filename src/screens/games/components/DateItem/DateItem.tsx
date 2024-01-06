import type IDateItem from "../../models/DateItemModel";
import { TextStyled, TouchableOpacityStyled } from "./styles";

interface IProps {
	dateItem: IDateItem;
	dateIdSelected: number;
	handlePress: (id: number) => void;
}

const DateItem = ({ dateItem, dateIdSelected, handlePress }: IProps) => {
	const isSelected = dateItem.id === dateIdSelected;
	return (
		<TouchableOpacityStyled
			key={dateItem.id}
			onPress={() => {
				handlePress(dateItem.id);
			}}
			isSelected={isSelected}
		>
			<TextStyled isSelected={isSelected}>{dateItem.dayWeek}</TextStyled>
			<TextStyled isSelected={isSelected}>{dateItem.day}</TextStyled>
		</TouchableOpacityStyled>
	);
};

export default DateItem;

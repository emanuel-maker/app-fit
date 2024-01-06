import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const TouchableOpacityStyled = styled(TouchableOpacity)<{
	isSelected: boolean;
}>`
	align-items: center;
	justify-content: center;
	height: 60px;
	width: 60px;
	background-color: ${props => {
		const {
			theme: { colors },
			isSelected,
		} = props;
		return isSelected ? colors.primary : colors.secondary;
	}};
	border-radius: 10px;
	padding: 5px;
	margin-left: 4px;
`;

export const TextStyled = styled(Text)<{ isSelected: boolean }>`
	color: ${props => {
		const {
			theme: { colors },
			isSelected,
		} = props;
		return isSelected ? colors.black : colors.white;
	}};
	font-weight: bold;
	font-family: ${props => props.theme.fonts.regular};
`;

import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";

export const TouchableOpacityStyled = styled(TouchableOpacity)`
	flex-direction: row;
	gap: 5px;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.secondary};
	border-radius: 10px;
	margin-left: 4px;
	padding: 5px;
	border-width: 1px;
	border-color: gray;
`;

export const TextStyled = styled(Text)`
	color: ${props => props.theme.colors.white};
	text-align: center;
	font-family: ${props => props.theme.fonts.regular};
`;

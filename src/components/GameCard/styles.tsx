import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const TouchableOpacityStyled = styled(TouchableOpacity)`
	flex-direction: row;
	padding: 10px;
	margin-top: 5px;
	border-color: gray;
	border-radius: 10px;
	border-bottom-width: 1px;
`;

export const TextHourStyled = styled(Text)`
	color: ${props => props.theme.colors.white};
	font-family: ${props => props.theme.fonts.regular};
`;

export const ViewHourStyled = styled(View)`
	flex: 1;
	padding-top: 4px;
	align-items: center;
`;

export const ViewDescriptionStyled = styled(View)`
	flex: 3;
	border-left-width: 1px;
	border-color: gray;
	padding-left: 10px;
`;

export const ViewDetailStyled = styled(View)`
	flex-direction: row;
	gap: 6px;
`;

export const TextDescriptionStyled = styled(Text)<{ fontSize?: number }>`
	color: ${props => props.theme.colors.white};
	font-size: ${props => props.fontSize}px;
	font-family: ${props => props.theme.fonts.regular};
`;

export const ViewTypeStyled = styled(View)`
	flex-direction: row;
	align-items: center;
`;

export const ViewSubsStyled = styled(View)`
	border-radius: 10px;
`;

export const ViewStatuStyled = styled(View)<{ status: string }>`
	flex: 2;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;

export const TextStatusStyled = styled(Text)<{ status: string }>`
	text-align: center;
	color: ${props => props.theme.colors.white};
	font-size: 15px;
	padding: 5px;
	border-color: ${props => props.theme.game.status.colors[props.status]};
	border-radius: 10px;
	border-width: 1px;
	margin-right: 8px;
	font-family: ${props => props.theme.fonts.regular};
`;

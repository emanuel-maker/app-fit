import { type ReactNode } from "react";
import { TextStyled, TouchableOpacityStyled } from "./styles";

interface IProps {
	onPress?: () => void;
	name: string;
	children: ReactNode;
}

const SimpleFilter = ({ name, children }: IProps) => {
	return (
		<TouchableOpacityStyled>
			{children}
			<TextStyled>{name}</TextStyled>
		</TouchableOpacityStyled>
	);
};

export default SimpleFilter;

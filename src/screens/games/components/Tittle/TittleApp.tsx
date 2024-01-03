import { TextStyled, ViewStyled } from "./styles";

const TittleApp = () => {
	return (
		<ViewStyled>
			<TextStyled fontWeight="bold" fontSize={30}>
				Fútbol
			</TextStyled>
			<TextStyled fontWeight="normal" fontSize={28}>
				Mania
			</TextStyled>
		</ViewStyled>
	);
};

export default TittleApp;

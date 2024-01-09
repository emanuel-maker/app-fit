import {
	Pressable,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import {
	Ionicons,
	AntDesign,
	MaterialIcons,
	FontAwesome5,
	FontAwesome,
	Feather,
} from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useState } from "react";
import { ViewCategoryStyled } from "./styles";

const Divider = () => {
	return (
		<View
			style={{
				borderBottomColor: "gray",
				borderBottomWidth: 1,
				marginVertical: 10,
			}}
		/>
	);
};

const Info = () => {
	const [showMore, setShowMore] = useState(false);

	const handlerShowMore = () => {
		setShowMore(!showMore);
	};

	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: "black",
				paddingTop: 20,
				padding: 10,
			}}
			showsVerticalScrollIndicator={false}
		>
			<Text
				style={{
					color: "white",
					fontSize: 22,
					fontWeight: "bold",
				}}
			>
				Descripción de Juego
			</Text>
			<Text
				numberOfLines={showMore ? undefined : 2}
				style={{ color: "white", marginTop: 10, fontFamily: "regular" }}
			>
				Este evento tiene suplentes, estos partidos suelen tener una alta
				intensidad, por lo que se espera que los jugadores se cuiden y tomen un
				descanso adicional rotando posiciones.
				{"\n"}
				{"\n"}
				Recuerda:
				{"\n"}
				{"\n"}❌ No obtendrás reembolso si abandonas juego.
				{"\n"}
				{"\n"}⏰ Tienes que estar 15m antes para presentarte ante el
				organizador.
				{"\n"}
				{"\n"}🧤 Todos lo jugadores deberan pasar por porteria.
				{"\n"}
				{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
				responsables.
				{"\n"}
			</Text>

			<TouchableWithoutFeedback onPress={handlerShowMore}>
				<Text
					style={{
						color: "#BEEA00",
						marginTop: 10,
						marginBottom: 20,
						fontFamily: "regular",
					}}
				>
					{showMore ? "Ver menos" : "Ver más"}
				</Text>
			</TouchableWithoutFeedback>
			<TouchableOpacity
				style={{
					display: "flex",
					flexDirection: "row",
					borderRadius: 10,
					alignItems: "center",
					padding: 4,
					borderWidth: 1,
					borderColor: "gray",
					backgroundColor: "#1E1E1E",
				}}
			>
				<Ionicons name="md-location-outline" size={25} color="white" />
				<Text
					style={{
						color: "white",
						fontSize: 18,
						marginLeft: 10,
						fontFamily: "regular",
					}}
				>
					C. Encarnación 10, H. de Llobregat
				</Text>
				<MaterialIcons
					name="arrow-forward-ios"
					size={18}
					color="white"
					style={{ marginLeft: 10 }}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					flexDirection: "row",
					borderRadius: 10,
					width: "100%",
					alignItems: "center",
					padding: 4,
					borderWidth: 1,
					borderColor: "gray",
					backgroundColor: "#1E1E1E",
					marginTop: 10,
				}}
			>
				<Ionicons name="calendar" size={25} color="white" />
				<Text
					style={{
						color: "white",
						fontSize: 18,
						marginLeft: 10,
						fontFamily: "regular",
					}}
				>
					24 Jul, 20:30h - 20:45h
				</Text>
				<MaterialIcons
					name="arrow-forward-ios"
					size={18}
					color="white"
					style={{ marginLeft: 10 }}
				/>
			</TouchableOpacity>

			<Divider />
			<Text
				style={{
					color: "white",
					fontSize: 22,
					borderWidth: 1,
					borderRadius: 10,
					fontWeight: "bold",
				}}
			>
				Categorias
			</Text>
			<View
				style={{
					flexWrap: "wrap",
					flexDirection: "row",
					paddingTop: 10,
					paddingBottom: 20,
					gap: 5,
					width: "60%",
				}}
			>
				<ViewCategoryStyled style={{ borderRadius: 10 }}>
					<Ionicons name="md-people-circle-outline" size={14} color="white" />
					<Text style={{ color: "white" }}>8v8</Text>
				</ViewCategoryStyled>
				<ViewCategoryStyled style={{ borderRadius: 10 }}>
					<FontAwesome name="car" size={14} color="white" />
					<Text style={{ color: "white" }}>Fácil parking</Text>
				</ViewCategoryStyled>

				<ViewCategoryStyled style={{ borderRadius: 10 }}>
					<FontAwesome5 name="restroom" size={14} color="white" />
					<Text style={{ color: "white" }}>Vestuarios</Text>
				</ViewCategoryStyled>
				<ViewCategoryStyled style={{ borderRadius: 10 }}>
					<FontAwesome5 name="subway" size={14} color="white" />
					<Text style={{ color: "white" }}>Metro</Text>
				</ViewCategoryStyled>
				<ViewCategoryStyled style={{ borderRadius: 10 }}>
					<FontAwesome5 name="bus" size={14} color="white" />
					<Text style={{ color: "white" }}>Bus</Text>
				</ViewCategoryStyled>
				<ViewCategoryStyled style={{ borderRadius: 10 }}>
					<Feather name="sun" size={14} color="white" />
					<Text style={{ color: "white" }}>Campo abierto</Text>
				</ViewCategoryStyled>
				<ViewCategoryStyled style={{ borderRadius: 10 }}>
					<FontAwesome5 name="shower" size={14} color="white" />
					<Text style={{ color: "white" }}>Duchas</Text>
				</ViewCategoryStyled>
				<ViewCategoryStyled style={{ borderRadius: 10 }}>
					<MaterialIcons name="grass" size={14} color="white" />
					<Text style={{ color: "white" }}>Césped artificial</Text>
				</ViewCategoryStyled>
			</View>
		</ScrollView>
	);
};

export default Info;

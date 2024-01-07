import {
	Pressable,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useState } from "react";

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
				paddingTop: 15,
			}}
			showsVerticalScrollIndicator={false}
		>
			<View
				style={{
					borderRadius: 10,
					padding: 10,
				}}
			>
				<Text
					style={{
						color: "white",
						fontSize: 20,
						borderWidth: 1,
						borderRadius: 10,
						fontWeight: "bold",
					}}
				>
					Descripción de Juego
				</Text>
				<Text
					numberOfLines={showMore ? undefined : 2}
					style={{ color: "white", marginTop: 10 }}
				>
					🔥 Este evento tiene suplentes, estos partidos suelen tener una alta
					intensidad, por lo que se espera que los jugadores se cuiden y tomen
					un descanso adicional rotando posiciones.
					{"\n"}
					{"\n"}
					Recuerda:
					{"\n"}
					{"\n"}❌ No obtendrás reembolso si abandonas juego.
					{"\n"}
					{"\n"}⏰ Tienes que estar 15m antes para presentarte ante el
					organizador.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🧤 Todos lo jugadores deberan pasar por porteria.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🧤 Todos lo jugadores deberan pasar por porteria.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🧤 Todos lo jugadores deberan pasar por porteria.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🧤 Todos lo jugadores deberan pasar por porteria.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🧤 Todos lo jugadores deberan pasar por porteria.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🧤 Todos lo jugadores deberan pasar por porteria.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🧤 Todos lo jugadores deberan pasar por porteria.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🧤 Todos lo jugadores deberan pasar por porteria.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🧤 Todos lo jugadores deberan pasar por porteria.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🧤 Todos lo jugadores deberan pasar por porteria.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🆘 En caso de lesión, podemos ayudarte, pero no nos hacemos
					responsables.
					{"\n"}
					{"\n"}🧤 Todos lo jugadores deberan pasar por porteria.
				</Text>

				<TouchableWithoutFeedback onPress={handlerShowMore}>
					<Text style={{ color: "#BEEA00", marginTop: 10, marginBottom: 20 }}>
						{showMore ? "Ver menos" : "Ver más"}
					</Text>
				</TouchableWithoutFeedback>
				<TouchableOpacity
					style={{
						display: "flex",
						flexDirection: "row",
						backgroundColor: "#292929",
						borderRadius: 10,
						alignItems: "center",
						padding: 10,
						marginBottom: 10,
					}}
				>
					<Ionicons name="md-location-outline" size={30} color="white" />
					<Text
						style={{
							color: "white",
							fontSize: 18,
							marginLeft: 10,
						}}
					>
						C. Encarnación 10, H. de Llobregat
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						flexDirection: "row",
						backgroundColor: "#292929",
						borderRadius: 20,
						width: "100%",
						alignItems: "center",
						padding: 10,
					}}
				>
					<Ionicons name="calendar" size={30} color="white" />
					<Text style={{ color: "white", fontSize: 18, marginLeft: 10 }}>
						24 Jul, 20:30h - 20:45h
					</Text>
				</TouchableOpacity>

				<Divider />
				<Text
					style={{
						color: "white",
						fontSize: 20,
						borderWidth: 1,
						borderRadius: 10,
						fontWeight: "bold",
					}}
				>
					Categorias
				</Text>
				<Text style={{ color: "white" }}>🔥8vs8</Text>
			</View>
		</ScrollView>
	);
};

export default Info;

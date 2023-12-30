import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import {
  MaterialIcons,
  Octicons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDateItems } from "./hooks";
import { TittleApp, ImageAdvertising, GameCard, DateItem } from "./components";
import { useQuery, useMutation } from "react-query";
import { getMatchesByDate } from "./services/Transport";
import IGame from "@models/GameModel";

export default function GameScreen() {
  const insets = useSafeAreaInsets();

  const advertisings = [
    {
      id: 1,
      title: "Juego Semanal",
      description: "Cada lunes, no te pierdas!",
      uri: "https://picsum.photos/seed/picsum/200/300",
      author: "@Torneo Sky",
    },
    {
      id: 2,
      title: "¿Buscas entrenamiento?",
      description: "Contáctanos, y te ayudaremos",
      uri: "https://picsum.photos/seed/picsum/200/300",
      author: "@Brandon",
    },
  ];

  const [games, setGames] = React.useState<IGame[]>([]);

  const { dateItems, dateSelected, handlePress } = useDateItems();
  const { data } = useQuery(["matchesByDate", dateSelected], () =>
    getMatchesByDate(dateItems[dateSelected])
  );

  React.useEffect(() => {
    setGames(data || []);
  }, [data]);

  return (
    <View
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#141414",
        height: "100%",
        paddingTop: insets.top,
      }}
    >
      {/** Tittle */}
      <TittleApp />

      {/** Advertising */}
      <ScrollView
        style={{
          display: "flex",
          flexDirection: "row",
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {advertisings.map((advertising) => (
          <ImageAdvertising key={advertising.id} {...advertising} />
        ))}
      </ScrollView>

      {/** Dates */}
      <ScrollView
        style={{
          height: 90,
          display: "flex",
          flexDirection: "row",
          marginTop: 15,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {dateItems.map((dateItem) => (
          <DateItem
            key={dateItem.id}
            dateItem={dateItem}
            handlePress={handlePress}
          />
        ))}
      </ScrollView>

      {/** Filters */}
      <ScrollView
        style={{
          display: "flex",
          marginTop: 10,
          height: 60,
          marginBottom: 10,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={[styles.filterDeport]}>
          <Octicons name="filter" size={15} color="white" />
          <Text
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Filtros
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterDeport]}>
          <FontAwesome name="futbol-o" size={15} color="white" />
          <Text
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Fútbol Campo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterDeport]}>
          <Ionicons name="ios-people-circle-outline" size={15} color="white" />
          <Text
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            8vs8
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterDeport]}>
          <MaterialIcons name="photo-camera" size={15} color="white" />
          <Text
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Grabado
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterDeport]}>
          <FontAwesome name="futbol-o" size={15} color="white" />
          <Text
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Fútbol Sala
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/** Matches */}
      <ScrollView
        style={{
          display: "flex",
          height: "83%",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <View>
          <Text
            style={{
              paddingLeft: 4,
              fontSize: 18,
              marginTop: 15,
              color: "white",
            }}
          >
            Hoy, Vie 30 Diciembre 2023
          </Text>
          {games.map((game) => {
            return <GameCard game={game} key={game.id} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  filterDeport: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#292929",
    borderRadius: 10,
    marginLeft: 4,
    padding: 10,
  },
});

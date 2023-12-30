import { ImageBackground, TouchableOpacity, Text } from "react-native";

interface IProps {
  uri: string;
  title: string;
  description: string;
  author: string;
}

export default function ImageAdvertising({
  uri,
  title,
  description,
  author,
}: IProps) {
  return (
    <ImageBackground
      style={{
        marginLeft: 5,
      }}
      imageStyle={{ borderRadius: 10 }}
      source={{ uri }}
      resizeMode="cover"
    >
      <TouchableOpacity
        style={{
          display: "flex",
          backgroundColor: "#000000c0",
          padding: 10,
          height: 100,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          {title}
        </Text>
        <Text style={{ color: "white", fontSize: 13 }}>{description}</Text>
        <Text style={{ fontSize: 12, color: "#BEEA00" }}>{author}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

import { ImageBackground, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

export function Cover() {
  return (
    <ImageBackground
      source={require("@/assets/cover.webp")}
      style={styles.image}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.2)", "#000"]}
        style={styles.gradient}
      >
        <Text style={styles.classification}>12</Text>
        <Text style={styles.title}>Avengers</Text>
        <Text style={styles.type}>Ação, Aventura, Fantasia, Ficção</Text>
        <Text style={styles.duration}>03 horas e 02 minutos</Text>
      </LinearGradient>
    </ImageBackground>
  );
}

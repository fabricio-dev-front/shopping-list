import { Image, View } from "react-native";
import { Button } from "@/components/Button";

import { styles } from "./style";
import { Input } from "@/components/Input";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <Input placeholder="O que você deseja comprar?" />
      <Button text="Adicionar" activeOpacity={0.5} />
    </View>
  );
};

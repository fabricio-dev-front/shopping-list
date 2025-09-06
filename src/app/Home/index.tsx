import { Image, View } from "react-native";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { styles } from "./style";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você deseja comprar?" />
        <Button text="Adicionar" activeOpacity={0.5} />
      </View>
    </View>
  );
};

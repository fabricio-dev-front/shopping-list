import { Image, View } from "react-native";
import { Button } from "@/components/Button";

import { styles } from "./style";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <Button text="props" activeOpacity={0.5} />
    </View>
  );
};

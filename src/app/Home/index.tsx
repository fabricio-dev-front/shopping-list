import { Image, View } from "react-native";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { styles } from "./style";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você deseja comprar?" />
        <Button text="Adicionar" activeOpacity={0.5} />
      </View>

      <View style={styles.content}>
        <Filter status={FilterStatus.DONE} isActive />
        <Filter status={FilterStatus.PENDING} isActive={false} />
      </View>
    </View>
  );
};

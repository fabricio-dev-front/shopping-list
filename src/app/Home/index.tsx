import { Image, View, TouchableOpacity, Text } from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { Item } from "@/components/Item";

import { styles } from "./style";
import { FilterStatus } from "@/types/FilterStatus";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];

export const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você deseja comprar?" />
        <Button text="Adicionar" activeOpacity={0.5} />
      </View>

      <View style={styles.content}>
        <View style={styles.headerFilters}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity style={styles.buttonClear}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <Item
          data={{ status: FilterStatus.DONE, description: "Comprar pão" }}
          onStatus={() => {}}
          onRemove={() => {}}
        />
      </View>
    </View>
  );
};

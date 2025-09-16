import { useState } from "react";
import { Image, View, TouchableOpacity, Text, FlatList } from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { Item } from "@/components/Item";

import { styles } from "./style";
import { FilterStatus } from "@/types/FilterStatus";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];

const ITEMS_MOCK = [
  { id: "1", status: FilterStatus.DONE, description: "Comprar pão" },
  { id: "2", status: FilterStatus.PENDING, description: "Comprar leite" },
  { id: "3", status: FilterStatus.DONE, description: "Comprar ovos" },
  { id: "4", status: FilterStatus.PENDING, description: "Comprar frutas" },
  { id: "5", status: FilterStatus.DONE, description: "Comprar verduras" },
  { id: "6", status: FilterStatus.PENDING, description: "Comprar carne" },
];

export const Home = () => {
  const [filter, setFilter] = useState(FilterStatus.PENDING);

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
            <Filter
              key={status}
              status={status}
              isActive={status === filter}
              onPress={() => setFilter(status)}
            />
          ))}

          <TouchableOpacity style={styles.buttonClear}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ITEMS_MOCK}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item data={item} onStatus={() => {}} onRemove={() => {}} />
          )}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>Nenhum item adicionado.</Text>
          )}
        />
      </View>
    </View>
  );
};

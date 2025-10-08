import { useState, useEffect } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
} from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { Item } from "@/components/Item";

import { styles } from "./style";
import { FilterStatus } from "@/types/FilterStatus";
import { itemsStorage, ItemsTypeStrorage } from "@/storage/itemsStorege";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export const Home = () => {
  const [filter, setFilter] = useState(FilterStatus.PENDING);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<ItemsTypeStrorage[]>([]);

  async function handleAddItem() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "Adicione um item para comprar.");
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING,
    };

    await itemsStorage.addItem(newItem);
    await itemsByStatus();

    Alert.alert("Adicionar", `Item adicionado: ${description}`);
    setFilter(FilterStatus.PENDING);
    setDescription("");
  }

  async function itemsByStatus() {
    try {
      const data = await itemsStorage.getByStatus(filter);
      setItems(data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os itens.");
    }
  }

  async function handleRemoveItem(id: string) {
    try {
      await itemsStorage.removeItem(id);
      await itemsByStatus();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível remover o item.");
    }
  }

  async function onClear() {
    try {
      await itemsStorage.clear();
      setItems([]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível remover os itens.");
    }
  }

  function handleClearItems() {
    Alert.alert("Limpar", "Deseja realmente limpar todos os itens?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => onClear() },
    ]);
  }

  async function handleToggleStatus(id: string) {
    try {
      await itemsStorage.toggleStatus(id);
      await itemsByStatus();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível alterar o status do item.");
    }
  }

  useEffect(() => {
    itemsByStatus();
  }, [filter]);

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input
          placeholder="O que você deseja comprar?"
          value={description}
          onChangeText={(value) => setDescription(value)}
        />
        <Button text="Adicionar" onPress={handleAddItem} activeOpacity={0.5} />
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

          <TouchableOpacity
            style={styles.buttonClear}
            onPress={handleClearItems}
          >
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => handleToggleStatus(item.id)}
              onRemove={() => handleRemoveItem(item.id)}
            />
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

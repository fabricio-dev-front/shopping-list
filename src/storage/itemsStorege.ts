import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterStatus } from "@/types/FilterStatus";

const ITEMS_STORAGE_KEY = "@comprar:items";

export type ItemsTypeStrorage = {
  id: string;
  status: FilterStatus;
  description: string;
};

async function get(): Promise<ItemsTypeStrorage[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);
    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw new Error("GET_ITEMS " + error);
  }
}

async function getByStatus(status: FilterStatus): Promise<ItemsTypeStrorage[]> {
  const items = await get();
  return items.filter((item) => item.status === status);
}

async function saveItems(items: ItemsTypeStrorage[]): Promise<void> {
  try {
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    throw new Error("SAVE_ITEMS " + error);
  }
}

async function addItem(
  newItem: ItemsTypeStrorage
): Promise<ItemsTypeStrorage[]> {
  const items = await get();
  const updatedItems = [...items, newItem];
  await saveItems(updatedItems);
  return updatedItems;
}

async function removeItem(id: string): Promise<void> {
  const items = await get();
  const filterItems = items.filter((item) => item.id !== id);
  await saveItems(filterItems);
}

async function clear(): Promise<void> {
  try {
    await AsyncStorage.removeItem(ITEMS_STORAGE_KEY);
  } catch (error) {
    throw new Error("CLEAR_ITEMS " + error);
  }
}

export const itemsStorage = {
  get,
  getByStatus,
  addItem,
  removeItem,
  clear,
};

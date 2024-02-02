import { atom } from "nanostores";
import { persistentMap } from "@nanostores/persistent";
import type { WishlistItem } from "@typ/index";

export const isWishlistOpen = atom(false);

export const wishlistItems = persistentMap<Record<string, WishlistItem>>(
  "wishlistItems",
  {},
  {
    encode(value) {
      return JSON.stringify(value);
    },
    decode(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    },
  }
);

export function addWishlistItem({
  id,
  title,
  poster_path,
  type,
}: {
  id: string;
  title: string;
  poster_path: string;
  type: "movie" | "series";
}) {
  const existingEntry = wishlistItems.get()[`${id}-${type}`];
  if (!existingEntry) {
    wishlistItems.setKey(`${id}-${type}`, { id, title, poster_path, type });
  }
}

export function removeWishlistItem({
  id,
  type,
}: {
  id: string;
  type: "movie" | "series";
}) {
  const existingEntry = wishlistItems.get()[`${id}-${type}`];
  if (existingEntry) {
    // @ts-ignore
    wishlistItems.setKey(`${id}-${type}`, undefined);
  }
}

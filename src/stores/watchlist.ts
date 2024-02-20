import { atom } from "nanostores";
import { persistentMap } from "@nanostores/persistent";
import type { WatchlistItem } from "@typ/index";

export const isWatchlistOpen = atom(false);

export const watchlistItems = persistentMap<Record<string, WatchlistItem>>(
  "watchlistItems",
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

export function addWatchlistItem({
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
  const existingEntry = watchlistItems.get()[`${id}-${type}`];
  if (!existingEntry) {
    watchlistItems.setKey(`${id}-${type}`, { id, title, poster_path, type });
  }
}

export function removeWatchlistItem({
  id,
  type,
}: {
  id: string;
  type: "movie" | "series";
}) {
  const existingEntry = watchlistItems.get()[`${id}-${type}`];
  if (existingEntry) {
    // @ts-ignore
    watchlistItems.setKey(`${id}-${type}`, undefined);
  }
}

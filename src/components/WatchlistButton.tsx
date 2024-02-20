import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import type { Movie, Series } from "@typ/index";

import {
  watchlistItems,
  addWatchlistItem,
  removeWatchlistItem,
} from "@stores/watchlist";

export default function WatchlistButton({
  content,
  type,
}: {
  content: Movie | Series;
  type: "movie" | "series";
}) {
  const items = useStore(watchlistItems);

  const [isWatchlisted, setIsWatchlisted] = useState<boolean | null>(null);

  useEffect(() => {
    setIsWatchlisted(!!items[`${content.id.toString()}-${type}`]);
  }, [items]);

  const addItem = (content: Movie | Series, type: "movie" | "series") => {
    addWatchlistItem({
      id: content.id.toString(),
      title:
        type === "movie" ? (content as Movie).title : (content as Series).name,
      poster_path: content.poster_path,
      type,
    });
  };

  const removeItem = (content: Movie | Series, type: "movie" | "series") => {
    removeWatchlistItem({
      id: content.id.toString(),
      type,
    });
  };

  if (isWatchlisted === null) return null;

  return (
    <button
      type="button"
      style={{
        position: "absolute",
        top: "5px",
        right: "5px",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "100%",
        cursor: "pointer",
        border: "none",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
        zIndex: 5,
      }}
      onClick={
        isWatchlisted
          ? () => removeItem(content, type)
          : () => addItem(content, type)
      }
    >
      {isWatchlisted ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="green"
          width="24"
          height="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="gray"
          width="24"
          height="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 5v14M5 12h14"
            stroke="gray"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

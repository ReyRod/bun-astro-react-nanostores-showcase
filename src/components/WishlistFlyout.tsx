import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import {
  wishlistItems,
  isWishlistOpen,
  removeWishlistItem,
} from "@stores/wishlist";
import type { WishlistItem } from "@typ/index";

export default function WishlistFlyout() {
  const isOpen = useStore(isWishlistOpen);
  const items = useStore(wishlistItems);

  const [listItems, setListItems] = useState<Record<string, WishlistItem>>({});
  useEffect(() => {
    setListItems(items);
  }, [items]);

  const removeItem = (content: WishlistItem, type: "movie" | "series") => {
    removeWishlistItem({
      id: content.id.toString(),
      type,
    });
  };

  if (!isOpen) return null;

  return (
    <aside
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        height: "100vh",
        background: "white",
        paddingInline: "2rem",
        minWidth: "min(90vw, 300px)",
        maxWidth: "min(90vw, 300px)",
        borderLeft: "3px solid var(--color-bg-3)",
        paddingTop: "50px",
        display: "flex",
        justifyContent: "center",
        zIndex: 9,
      }}
    >
      {Object.values(listItems).length ? (
        <ul style={{ listStyle: "none", padding: 0 }} role="list">
          {Object.values(listItems).map((content) => (
            <li
              key={`${content.id}-${content.type}`}
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                marginTop: "5px",
                backgroundColor: "#23262d",
                color: "white",
                paddingRight: "10px",
                borderRadius: "5px",
                overflow: "clip",
                position: "relative",
              }}
            >
              <a
                href={`/${content.type === "movie" ? "movies" : "series"}/${
                  content.id
                }`}
              >
                <img
                  style={{ width: "4rem" }}
                  src={`https://image.tmdb.org/t/p/w400${content.poster_path}`}
                  alt={content.title}
                />
              </a>
              <div>
                <a
                  href={`/${content.type === "movie" ? "movies" : "series"}/${
                    content.id
                  }`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h3 style={{ marginBlock: "0.3rem" }}>{content.title}</h3>
                </a>
              </div>
              <button
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  width: "20px",
                  height: "20px",
                  background: "white",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100%",
                  fontSize: "0.7rem",
                }}
                onClick={() => removeItem(content, content.type)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your Wishlist is empty!</p>
      )}
    </aside>
  );
}

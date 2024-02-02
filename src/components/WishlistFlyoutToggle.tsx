import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { isWishlistOpen, wishlistItems } from "@stores/wishlist";

export default function WishlistFlyoutToggle() {
  const isOpen = useStore(isWishlistOpen);
  const items = useStore(wishlistItems);

  const [itemsNumber, setItemsNumber] = useState<number | null>(null);

  useEffect(() => {
    setItemsNumber(Object.keys(items).length);
  }, [items]);

  if (itemsNumber === null) return null;

  return (
    <button
      onClick={() => isWishlistOpen.set(!isOpen)}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        height: "40px",
        width: isOpen ? "40px" : "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#23262d",
        backgroundImage: "none",
        backgroundSize: "400%",
        backgroundPosition: "100%",
        padding: "20px",
        color: "white",
        fontSize: "1.1rem",
        transition: "color 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        borderRadius: isOpen ? "100%" : "8px",
        cursor: "pointer",
        border: "none",
        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
        zIndex: 10,
        fontWeight: "bold",
      }}
    >
      {!isOpen
        ? `Wishlist ${itemsNumber !== 0 ? `(${itemsNumber})` : ""}`
        : "X"}
    </button>
  );
}

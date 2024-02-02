import WishlistButton from "@components/WishlistButton";
import type { Movie, Series } from "@typ/index";

type AnchorLinkProps = {
  href: string;
  children: React.ReactNode;
};

function AnchorLink({ href, children }: AnchorLinkProps) {
  return (
    <a href={href} style={{ textDecoration: "none" }}>
      {children}
    </a>
  );
}

type ContentCardProps = {
  content: Movie | Series;
  type: "movie" | "series";
  showLink?: boolean;
};

export default function ContentCard({
  content,
  type,
  showLink = false,
}: ContentCardProps) {
  const path = `/${type === "movie" ? "movies" : "series"}/${content.id}`;
  const title =
    type === "movie" ? (content as Movie).title : (content as Series).name;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        overflow: "clip",
        position: "relative",
      }}
    >
      {showLink ? (
        <AnchorLink href={path}>
          <img
            src={`https://image.tmdb.org/t/p/w400${content.poster_path}`}
            alt={title}
          />
        </AnchorLink>
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w400${content.poster_path}`}
          alt={title}
        />
      )}

      <WishlistButton content={content} type={type} />

      {showLink ? (
        <AnchorLink href={path}>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              padding: "1rem",
            }}
          >
            {title}
          </h2>
        </AnchorLink>
      ) : (
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          {title}
        </h2>
      )}
    </div>
  );
}

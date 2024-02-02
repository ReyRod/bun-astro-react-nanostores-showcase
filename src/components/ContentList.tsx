import ContentCard from "@components/ContentCard";
import type { Movie, Series } from "@typ/index";

export default function ContentList({
  content,
  type,
}: {
  content: Movie[] | Series[];
  type: "movie" | "series";
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(24ch, 1fr))",
        gap: "1rem",
      }}
    >
      {content.map((element) => (
        <ContentCard key={element.id} content={element} type={type} showLink />
      ))}
    </div>
  );
}

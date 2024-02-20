import type { Movie, Series } from "@typ/index";

export default function ContentDetails({
  content,
}: {
  content: Movie | Series;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "10px",
        color: "black",
      }}
    >
      <div>
        <span style={{ fontWeight: "bold" }}>Overview: </span>
        <span>{content.overview}</span>
      </div>
      {content.homepage && (
        <div>
          <span style={{ fontWeight: "bold" }}>Homepage: </span>
          <span>{content.homepage}</span>
        </div>
      )}
      {((content as Movie).release_date ||
        (content as Series).first_air_date) && (
        <div>
          <span style={{ fontWeight: "bold" }}>Release Date: </span>
          <span>
            {(content as Movie).release_date ||
              (content as Series).first_air_date}
          </span>
        </div>
      )}
      <div>
        <span style={{ fontWeight: "bold" }}>Genres: </span>
        <span>{content.genres?.map((genre) => genre.name).join(", ")}</span>
      </div>
    </div>
  );
}

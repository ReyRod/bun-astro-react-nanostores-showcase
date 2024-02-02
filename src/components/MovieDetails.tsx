import type { Movie } from "@typ/index";

export default function MovieDetails({ movie }: { movie: Movie }) {
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
        <span>{movie.overview}</span>
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>Homepage: </span>
        <span>{movie.homepage}</span>
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>Release Date: </span>
        <span>{movie.release_date}</span>
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>Genres: </span>
        <span>{movie.genres?.map((genre) => genre.name).join(", ")}</span>
      </div>
    </div>
  );
}

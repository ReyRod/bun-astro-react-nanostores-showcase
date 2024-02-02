export type Pagination = {
  page: number;
  total_pages: number;
  total_results: number;
};

type Genres = {
  id: number;
  name: string;
};

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview?: string;
  release_date?: string;
  homepage?: string;
  genres?: Genres[];
};

export type Series = {
  id: number;
  name: string;
  poster_path: string;
  overview?: string;
  first_air_date?: string;
  homepage?: string;
  genres?: Genres[];
};

export type MoviesResponse = Pagination & {
  results: Movie[];
};

export type SeriesResponse = Pagination & {
  results: Series[];
};

export type WishlistItem = {
  id: string;
  title: string;
  poster_path: string;
  type: "movie" | "series";
};

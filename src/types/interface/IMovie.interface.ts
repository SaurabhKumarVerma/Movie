export interface IAppStatus {
  isLoading: boolean;
  isError: boolean;
}

export interface IMovie {
  id: number | undefined;
  movie: string | undefined;
  rating: number | undefined;
  image: string | undefined;
  imdb_url: string | undefined;
}

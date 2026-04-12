export type Movie = {
  id: number;
  title: string;
  name?: string;
  poster_path: string;
  backdrop_path?: string;
  overview?: string;
  tagline?: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  runtime?: number;
  genres?: { id: number; name: string }[];
  spoken_languages?: { english_name: string }[];
  production_companies?: { name: string }[];
  homepage?: string;
  episode_run_time?: number[];
  number_of_seasons?: number;
  number_of_episodes?: number;
  genre_ids?: number[]; //New
  adult?: boolean;
  content_rating?: string; // New Idade
 

};

/*export type Cast = {
  id: number;
  name: string;
  character?: string;
  profile_path: string | null;
};

export type Crew = {
  id: number;
  name: string;
  job?: string;
  profile_path: string | null;
};*/

export type Cast = {
  id: number;
  name: string;
  character?: string;
  profile_path: string | null;
};

export type Crew = {
  id: number;
  name: string;
  job?: string;
  department?: string;
  profile_path: string | null;
};

export type Tv = {
  id: number;
  name: string;
  title?: string;
  poster_path: string;
  backdrop_path?: string;
  overview?: string;
  tagline?: string;
  vote_average: number;
  first_air_date?: string;
  episode_run_time?: number[];
  number_of_seasons?: number;
  number_of_episodes?: number;
  genres?: { id: number; name: string }[];
  spoken_languages?: { english_name: string }[];
  production_companies?: { name: string }[];
  homepage?: string;
  content_rating?: string; // New Idade
};


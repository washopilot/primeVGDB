export interface Game {
  background_image: string;
  name: string;
  description: string;
}

export interface APIResponse<T> {
  results: Array<T>;
}

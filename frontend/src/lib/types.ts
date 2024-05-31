export type AppType = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  user: string;
  setUser: (user: string) => void;
};

export type GameData = {
  name: string;
  developers: string[];
  genres: string[];
  imageUrl: string;
  releaseDate: string;
  storeIds: { [key: number]: string };
};

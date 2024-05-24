export type AppType = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  isUser: boolean;
  setIsUser: (isUser: boolean) => void;
};

export type GameData = {
  name: string;
  developers: string[];
  genres: string[];
  imageUrl: string;
  releaseDate: string;
  storeIds: { [key: number]: string };
};

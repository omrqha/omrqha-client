export interface FavoritesServiceProviders {
  serviceProviderId: string;
}

export interface User {
  access_token?: string;
  displayName?: string;
  photo?: string;
  mobileNumber?: string;
  weddingDate?: string;
  favoritesServiceProviders?: FavoritesServiceProviders [];
}

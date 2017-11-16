export interface ServiceProvider {
  serviceProviderId: string;
  serviceProviderName: string;
  domainName: string;
  serviceProviderDesc: string;
  serviceProviderImagesUrl: [string];
  rating: { count: number; average: number; };
  defaultReview: string;
  address: string;
  reviews: [{
    score: number;
    comment: string;
    user:{
      userId: string;
      displayName: string;
      photo: string;
    }
  }];

}

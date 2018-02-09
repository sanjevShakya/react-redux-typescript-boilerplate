export interface ErrorResponse {
  response?: {
    data: {
      message: string;
      details: {
        [key: string]: string;
      };
    };
  };
}

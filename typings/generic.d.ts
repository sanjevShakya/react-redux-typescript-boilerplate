declare module "*.js" {
  const modules: {
    [key: string]: any;
  };

  export default modules;
}

declare const ENV: {
  API_URL: string;
};

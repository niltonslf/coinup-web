export type AuthLogin = {
  email: string;
  password: string;
};

export type AuthRegister = {
  email: string;
  password: string;
};

export type AuthUser = {
  name: string;
  email: string;
  currencyId: number;
  jwtToken: string;
};

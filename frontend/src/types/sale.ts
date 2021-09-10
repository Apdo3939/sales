export type SaleSum = {
  seller: string;
  sum: number;
};

export type SaleSuccess = {
  seller: string;
  visited: number;
  deals: number;
};

export type Sale = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: Date;
};

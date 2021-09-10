import { Seller } from "./seller";

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
  date: string;
  seller: Seller;
};

export type SalePage = {
  content?: Sale[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  numberOfElements?: number;
  first: boolean;
  number: number;
  size: number;
  empty?: boolean;
};

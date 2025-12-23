export interface StockPrice {
  symbol: string;
  price: number;
  change: number;
  timestamp: string; // ISO 8601 format
}

export interface UserPortfolio {
  userId: string;
  holdings: {
    symbol: string;
    quantity: number;
  }[];
}
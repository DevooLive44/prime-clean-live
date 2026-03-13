
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceInfo: string;
}

export interface QuoteRequest {
  rooms: string;
  size: string;
  type: 'residential' | 'commercial' | 'deep';
  details: string;
}

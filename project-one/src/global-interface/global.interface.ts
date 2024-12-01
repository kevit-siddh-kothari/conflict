import { addressDocument } from 'src/componets/address/entities/address.entity';

export interface comments {
  name: string;
  comment: string;
}

export interface addressResponse {
  message?: string;
  data?: addressDocument;
}

export interface filterQuery {
  sort?: string;
  skip?: number;
  limit?: number;
}

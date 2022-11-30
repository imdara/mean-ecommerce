import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class GetItemsService {
  constructor() {}

  fetchItems = async () => {
    const { data } = await axios.get('http://localhost:4000/api/products');
    return data;
  };
}

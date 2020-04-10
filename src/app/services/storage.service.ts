import { Injectable } from "@angular/core";

@Injectable()
export class StoreService {
  constructor() {}
  create(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("Error saving to localStorage", err);
    }
  }

  find(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      console.error("Error getting data from localStorage", err);
      return null;
    }
  }
}

import { Injectable } from "@angular/core";

@Injectable()
export class StoreService {
  constructor() {}
  create(key: string, value: any) {
    try {
      console.log("stored")
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("Error saving to localStorage", err);
    }
  }

  find(key: string) {
    try {
      console.log("find")
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      console.error("Error getting data from localStorage", err);
      return null;
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { StoreService } from "../../services/storage.service.ts";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  public list: string[] = [];
  constructor(private store: StoreService) {
    this.list = this.store.find("todolist");
    if (!this.list) {
      this.store.create("todolist", []);
      this.list = [];
    }
  }
  ngOnInit() {}
  onSubmit(value) {
    this.list.push(value)
    this.store.create("todolist", this.list);
  }
}

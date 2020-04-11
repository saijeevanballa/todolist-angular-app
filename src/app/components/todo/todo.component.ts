import { Component, OnInit, ViewChild } from "@angular/core";
import { StoreService } from "../../services/storage.service.ts";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  public list: any[] = [];
  constructor(private store: StoreService) {
    this.list = this.store.find("todolist");
    if (!this.list) {
      this.store.create("todolist", []);
      this.list = [];
    }
  }
  ngOnInit() {}
  onSubmit(value) {
    if (!!value && value.trim() != "") {
      this.list.push({ message: value, checked: false });
      this.store.create("todolist", this.list);
    }
  }
  onChecked(index) {
    this.list = this.list.map((obj, i) =>
      index == i ? { ...obj, checked: !obj.checked } : obj
    );
    this.store.create("todolist", this.list);
  }

  onDelete(index) {
    this.list = this.list.filter((obj, i) => index != i);
    this.store.create("todolist", this.list);
  }
}

import { Component, OnInit } from "@angular/core";
import { StoreService } from "../services/storage.service.ts"

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  public list: string[] = []
  constructor(private store: StoreService ) {

  }
  ngOnInit(){
    this.list = store.find("todolist")
    if(!list && !list.length){
      store.create("todolist", [])
    }
  }
  onSubmit(value){
    console.log(value)
    store.create(this.list.push(value))
  }

}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TodoComponent } from "./components/todo/todo.component";
import { StoreService } from "./services/storage.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, TodoComponent],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}

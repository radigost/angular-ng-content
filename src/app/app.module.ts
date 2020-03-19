import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { TestComponent } from "./testComponent";
import { MainAppComponent } from "./mainComponent";

@NgModule({
  declarations: [AppComponent, TestComponent, MainAppComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent, TestComponent, MainAppComponent]
})
export class AppModule {}

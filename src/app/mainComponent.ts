import { Component } from "@angular/core";

@Component({
  selector: "app-main-component",
  template: `
    <app-test-component [text]="passedText">
      <div>{{ passedText }}</div>
    </app-test-component>
  `
})
export class MainAppComponent {
  passedText = "##";
  isTextForAnonymus() {}
}

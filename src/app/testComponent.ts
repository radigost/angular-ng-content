import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-test-component",
  template: `
    <div>
      <div>Just text</div>
      <div>{{ text }}</div>
      <div>
        <ng-content></ng-content>
      </div>
      <div *ngIf="isTextForAnonymus">text is anonymus</div>
    </div>
  `
})
export class TestComponent implements OnChanges {
  @Input() text: string = "111";
  title = "CodeSandbox";
  isTextForAnonymus = false;

  ngOnChanges() {
    const anonymusLetter = "#";
    const isAnonymus = this.text
      .split("")
      .every(letter => letter === anonymusLetter);
    console.log(isAnonymus);
    this.isTextForAnonymus = isAnonymus;
  }
}

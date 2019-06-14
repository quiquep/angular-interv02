import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public fruits: Array<{ id: number; name: string; color: string }>;

  constructor() {
    console.log("test");

    this.fruits = [
      { id: 1, name: "Orange", color: "orange" },
      { id: 2, name: "Lemon", color: "lemon" },
      { id: 3, name: "Strawberry", color: "red" },
      { id: 4, name: "Apple", color: "green" }
    ];
  }

  moveFruitUp(index: number) {
    if (index > 0) {
      // TODO: MAKE A SWAP FUNCTION
      let a = this.fruits[index];
      let b = this.fruits[index - 1];
      this.fruits[index - 1] = a;
      this.fruits[index] = b;
    }
  }

  moveFruitDown(index: number) {
    console.log("revisar validacion", index, this.fruits.length);
    if (index < this.fruits.length - 1) {
      // TODO: MAKE A SWAP FUNCTION
      let a = this.fruits[index];
      let b = this.fruits[index + 1];
      this.fruits[index + 1] = a;
      this.fruits[index] = b;
    }
  }
}

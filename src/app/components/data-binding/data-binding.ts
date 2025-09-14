import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // string, number , boolean, date

  courseName: string = "Angular 20";
  stateName: string = "Maharashtra";
  inputType = "radio";
  myClassName: string = "bg-primary";
  rollNo: number = 123;
  isIndian: boolean = true;
  currentDate: Date = new Date();

  firstName = signal("Pratik Rane");

  constructor() {

  }

  changeCourseName() {
    this.courseName = "React JS";
    this.firstName.set("Samruddhi")
  }

  showAlert(message: string) {
    alert(message);
  }
}

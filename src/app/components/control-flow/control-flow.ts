import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFLow {

  isParaVisible: boolean = true;

  startMonth: string = "Feb";

  citList: string[] = ["Mumbai", "Pune", "Goa"];

  studentList: any[] = [
    { name: 'AAA', city: 'Mumbai', isActive: false },
    { name: 'BBB', city: 'Pune', isActive: false },
    { name: 'CCC', city: 'Goa', isActive: true },
    { name: 'DDD', city: 'Nashik', isActive: false }
  ]

  showP() {
    this.isParaVisible = true;
  }

  hideP() {
    this.isParaVisible = false;
  }
}

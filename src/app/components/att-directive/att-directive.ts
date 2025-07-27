import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe,DatePipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective implements OnInit, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {

  div1ClassName = signal<string>("");

  isDiv2Green: boolean = false;

  firstname: string = "Pratik Rane";
  courseName: string = "Angular 20";
  titleName: string = "Welcome to angular js";
  rollNoList = [11, 12, 13, 14, 15];

  studentObj: any={
    name: "Pratik Rane",
    city: "Mumbai",
    state: "Maharashtra"
  }

  currentDate: Date = new Date();

  constructor() {
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit")
    //to api call
    // to subscribe
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    //to deal with viewChild
    //subscribe
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")

    //unsubscribe
    //strict user from navigation
  }

  setBgClass(className: string) {
    this.div1ClassName.set(className)
  }

  toggleDiv2color() {
    this.isDiv2Green = !this.isDiv2Green;
  }
}

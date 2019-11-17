import { Component, OnInit } from "@angular/core";

@Component ({
  selector: 'app-WarningAlert',
  template: `
  <p>Attention please, you are in the danger</p>`,
  styles: [`
    p {
      color: red;
    }
  `]
})

export class WarningAlertComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }
}
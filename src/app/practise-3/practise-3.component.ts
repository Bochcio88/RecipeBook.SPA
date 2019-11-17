import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-practise-3',
    templateUrl: './practise-3.component.html',
    styleUrls: ['./practise-3.component.css']
})

export class Practise3Component implements OnInit {

    isClicked: boolean = false;
    log: any = [];

    constructor() {}

    ngOnInit() {}

    toggleButton() {
        this.isClicked = !this.isClicked;
        if(this.isClicked === true) {
            this.log.push(new Date().toLocaleString());
        }
        
    }
}
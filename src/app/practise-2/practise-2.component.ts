import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-practise-2',
    templateUrl: './practise-2.component.html',
    styleUrls: ['./practise-2.component.css']
})


export class Practise2Component implements OnInit {

    username = ''

    constructor() {}


    ngOnInit() {

    }

    checkUsername() {
        if (this.username === '') {
            return true;
        }
        return false;
    }

    cleanUp() {
        this.username = '';
    }
}
import { Component, OnInit, Input, DoCheck, OnChanges, SimpleChanges, 
        AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
        OnDestroy,
        ViewChild,
        ElementRef,
        ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

export class ServerElementComponent implements OnInit, DoCheck, OnChanges,
            AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, 
            OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('header') header: ElementRef;
  @ContentChild('content') content: ElementRef;
  

  constructor() { 
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Header: ' + this.header.nativeElement.textContent);
    console.log('Content:' + this.content.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    console.log('Content:' + this.content.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentCheck called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('Header: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewCheck called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-goo',
  templateUrl: './goo.component.html',
  styleUrls: ['./goo.component.scss']
})
export class GooComponent implements OnInit {

  @Input('foobar') foo = 'foo';

  @Input()
  title!: string;

  @Input()
  counter = 0;

  @Output()
  counterChange = new EventEmitter<number>();

  @Output()
  sayHi = new EventEmitter<string>();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
    console.log('constructor', this.title);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.title);
  }

  onSayHi() {
    this.sayHi.emit(this.title + 'Hello');
  }
}

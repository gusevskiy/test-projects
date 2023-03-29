import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent implements OnInit {
  phone = '111-11-1111';
  user = {
    name: 'Joh',
    surname: 'Doe',
  }

  boldText = `<b>I am a bold text</b>`

  login = '';
  password = '';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  get fullName() {
    return this.user.name + ' ' + this.user.surname;
  }

  ngOnInit(): void {
    setTimeout(() => this.updatePhone(), 3000);

  }
  updatePhone() {
    this.phone = Math.round(Math.random() * 10000000) + '';
  }

  onInput(event: Event, number: number, user: any) {
    const target = event.target as HTMLInputElement;
    this.phone = target.value;
    console.log(number, user);
  }

  onSubmit() {
    if (this.login && this.password) {
      // TODO submit
      alert(`You are authorized as ${this.login} with password ${this.password}.`);
      this.login = this.password = '';
      return;
  }

  alert('login and password are required fields!!!');
  }
}
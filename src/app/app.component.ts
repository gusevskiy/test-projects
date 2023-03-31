import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  expression = false;
  title = 'test-projects';
  age = 18;
  show = true;

  onSayHi(text: string) {
    console.log(text)
  }
}

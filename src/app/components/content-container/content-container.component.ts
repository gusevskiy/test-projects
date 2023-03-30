import { Component, Input, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent {
  @Input()
  template?: TemplateRef<{ $implicit: number }>;
}

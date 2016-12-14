import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <p>
      event-binding Works!
      <button (click)="onClicked()">Click me!</button>
    </p>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output('clickable') clicked = new EventEmitter<string>();
  onClicked() {
    this.clicked.emit('It works');
  }
}

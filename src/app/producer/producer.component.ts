import { Component } from '@angular/core';
import { SignalsService } from '../signals.service';

@Component({
  selector: 'app-producer',
  standalone: true,
  imports: [],
  templateUrl: './producer.component.html',
  styleUrl: './producer.component.scss'
})
export class ProducerComponent {
  index = 0;

  constructor(protected signals: SignalsService) {}

  increaseOffset() {
    this.signals.offset.update(value => value + 1);
  }

  decreaseOffset() {
    this.signals.offset.update(value => value - 1);
  }

  addItem() {
    this.signals.items.update(items => [...items, "new item" + this.index]);
    this.index++;
  }
}

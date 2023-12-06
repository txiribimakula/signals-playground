import { Component } from '@angular/core';
import { SignalsService } from '../signals.service';

@Component({
  selector: 'app-consumer',
  standalone: true,
  imports: [],
  templateUrl: './consumer.component.html',
  styleUrl: './consumer.component.scss'
})
export class ConsumerComponent {
  constructor(protected signals: SignalsService) {
  }

  increaseOffset() {
    this.signals.offset.update(value => value + 1);
  }

  decreaseOffset() {
    this.signals.offset.update(value => value - 1);
  }
}

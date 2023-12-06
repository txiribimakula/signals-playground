import { Component } from '@angular/core';
import { SignalsService } from '../signals.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-consumer',
  standalone: true,
  imports: [],
  templateUrl: './consumer.component.html',
  styleUrl: './consumer.component.scss',
})
export class ConsumerComponent {
  constructor(protected signals: SignalsService) {
    this.consume();
  }

  consume() {
    this.signals.currentItem$.subscribe((item) => {
      console.log('consumed ' + item + ' in consumer component');
      this.handle(item);
    });
  }

  async handle(item: string) {
    await this.work(item);
    console.log('handled ' + item + ' in consumer component');
    this.commit(item);
  }

  async work(item: string) {
    await new Promise(_ => setTimeout(_, 3000));
  }

  commit(item: string) {
    this.signals.offset.update((value) => value + 1);
    console.log('commited ' + item + ' in consumer component');
  }
}

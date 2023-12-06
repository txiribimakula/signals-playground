import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProducerComponent } from "./producer/producer.component";
import { ConsumerComponent } from "./consumer/consumer.component";
import { SignalsService } from './signals.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ProducerComponent, ConsumerComponent]
})
export class AppComponent {
  constructor(protected signals: SignalsService) {
  }
}

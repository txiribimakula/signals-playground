import { Injectable, Signal, computed, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  offset = signal(0);

  items = signal<string[]>([]);

  hasPendingItems: Signal<boolean> = computed(
    () => this.items().length > this.offset()
  );

  currentItem = computed(() => this.items()[this.offset()]);

  constructor() {
    toObservable(this.hasPendingItems).subscribe((hasPendingItems) =>
      console.log(hasPendingItems)
    );
    
    toObservable(this.currentItem).subscribe((item) =>
      console.log(item)
    );
  }
}

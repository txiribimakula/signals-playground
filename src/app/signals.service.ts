import { Injectable, Signal, computed, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, skipWhile } from 'rxjs';

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

  currentItem$ = toObservable(this.currentItem).pipe(filter(item => item != undefined));

  constructor() {
    toObservable(this.hasPendingItems).subscribe((hasPendingItems) =>
      console.log(hasPendingItems)
    );
  }
}

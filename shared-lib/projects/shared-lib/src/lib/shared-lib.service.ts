import { Injectable } from '@angular/core';
import { Subject, Observable, map, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedLibService {
  private eventEmitter = new Subject<any>();
  constructor() {}

  emit(eventName: string, data: any): void {
    this.eventEmitter.next({
      name: eventName,
      data,
    });
  }

  on(eventName: string): Observable<any> {
    return this.eventEmitter.asObservable().pipe(
      filter((event) => event.name === eventName),
      map((event) => event.data)
    );
  }
  
}

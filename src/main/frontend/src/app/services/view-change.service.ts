import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewChangeService {

  graphView = new BehaviorSubject<boolean>(false);

  constructor() { }

  getView(): Observable<boolean>{
    return this.graphView.asObservable();
  }

  changeToView(graphsView: boolean): void{
    this.graphView.next(graphsView);
  }
}

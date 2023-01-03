import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedgraphserviceService {

  private graphSubject = new Subject<any>();
  private archiveGraphSubject = new Subject<any>();
  private makeGraphSubject = new Subject<any>();
  private makeArchiveGraphSubject = new Subject<any>();

  constructor() { }

  makeGraphPublish(qualifiedName: string){
    this.makeGraphSubject.next(qualifiedName);
  }

  makeGraph(){
    return this.makeGraphSubject.asObservable();
  }

  makeArchiveGraphPublish(){
    this.makeArchiveGraphSubject.next(1);
  }

  makeArchiveGraph(){
    return this.makeArchiveGraphSubject.asObservable();
  }

  sendGraphClickEvent(type: string){
    this.graphSubject.next(type);
  }

  getGraphClickEvent(): Observable<any>{
    return this.graphSubject.asObservable();
  }

  sendArchiveGraphClickEvent(type: string){
    this.archiveGraphSubject.next(type);
  }

  getArchiveGraphClickEvent(): Observable<any>{
    return this.archiveGraphSubject.asObservable();
  }

}

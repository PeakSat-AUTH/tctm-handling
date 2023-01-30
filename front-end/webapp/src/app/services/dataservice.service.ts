import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { EnumValue } from "../Interfaces/ListParameterResponse";
@Injectable({
  providedIn: "root",
})
export class DataserviceService {
  private start = new BehaviorSubject<string>("");
  currentStart = this.start.asObservable();
  private stop = new BehaviorSubject<string>("");
  currentStop = this.stop.asObservable();
  private count = new BehaviorSubject<string>("");
  currentCount = this.count.asObservable();
  private parameterName = new BehaviorSubject<string>("");
  currentName = this.parameterName.asObservable();
  private ngIF = new BehaviorSubject<boolean>(true);
  currentNgIF = this.ngIF.asObservable();

  enumaratedMap = new Map();
  private enumVal = new BehaviorSubject<EnumValue[]>([]);
  currentEnumVal = this.enumVal.asObservable();

  constructor() {}

  changeQueries(start: string, stop: string, count: string): void {
    this.start.next(start);
    this.stop.next(stop);
    this.count.next(count);
  }
  
  changeParameterName(name: string): void {
    this.parameterName.next(name);
  }

  checkEnumMap(message: EnumValue[]): void {
    this.enumVal.next(message);
    for (let i = 0; i < message.length; i++) {
      if (this.enumaratedMap.has(message[i].label) == false) {
        this.enumaratedMap.set(message[i].label, Number(message[i].value));
      }
    }
  }
}

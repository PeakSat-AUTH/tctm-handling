import { ThrowStmt } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { EnumValue } from "../Interfaces/ListParameterResponse";
import { Observable, Subject } from "rxjs";
import { CommandInfo } from "../Interfaces/Telecommands";
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
  private sendTcSubject = new Subject<any>();
  private destroyTcSubject = new Subject<any>();

  enumaratedMap = new Map();
  private enumVal = new BehaviorSubject<EnumValue[]>([]);
  currentEnumVal = this.enumVal.asObservable();

  greekTime = new BehaviorSubject<Date>(new Date());
  currentgreekTime = this.greekTime.asObservable();

  utcTime = new BehaviorSubject<Date>(new Date());
  currentUTCTime = this.utcTime.asObservable();

  constructor() {}

  changeTime(time: Date): void {
    this.greekTime.next(time);
    this.utcTime.next(
      new Date(time.getTime() + time.getTimezoneOffset() * 60000)
    );
  }

  sendTC(tc: CommandInfo) {
    this.sendTcSubject.next(tc);
  }

  receiveAndMakeTC() {
    return this.sendTcSubject.asObservable();
  }

  destroyTC(tcResponse: any): void {
    this.destroyTcSubject.next(tcResponse);
  }

  directiveDestroyTC() {
    return this.destroyTcSubject.asObservable();
  }

  changeQueries(start: string, stop: string, count: string) {
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

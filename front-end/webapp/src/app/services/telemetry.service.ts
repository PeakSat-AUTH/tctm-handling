import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import {
  BehaviorSubject,
  Observable,
} from "rxjs";
import { TimeSeries } from "../Interfaces/ArchiveParameters";
import {
  ListParametersResponse,
  ParameterInfo,
} from "../Interfaces/ListParameterResponse";
import { ListParameterHistoryResponse } from "../Interfaces/ParameterHistory";

@Injectable({
  providedIn: "root",
})
export class TelemetryService {
  private sampleSource = new BehaviorSubject<string>("");
  currentSample = this.sampleSource.asObservable();

  private telemetryValSource = new BehaviorSubject<string>("");
  currentTelemetryVal = this.telemetryValSource.asObservable();

  private apiUrl = "http://localhost:8090/api/mdb/AcubeSAT/parameters";
  private historyUrl = "";
  private samplesUrl = "";

  private acubeSATUrl =
    "http://localhost:8090/api/mdb/AcubeSAT/parameters?q=%2FAcubeSAT%2F";
  private pusUrl =
    "http://localhost:8090/api/mdb/AcubeSAT/parameters?q=%2Fpus%2F";
  private pus_not_usedUrl =
    "http://localhost:8090/api/mdb/AcubeSAT/parameters?q=%2Fpus-not-used%2F";
  private pus_verificationUrl =
    "http://localhost:8090/api/mdb/AcubeSAT/parameters?q=%2Fpus-verification%2F";

  private yamcsUrl =
    "http://localhost:8090/api/mdb/AcubeSAT/parameters?q=yamcs";

  private telemetryEnum = "";

  constructor(private http: HttpClient) {}

  getTelemetryResponse(): Observable<ListParametersResponse> {
    return this.http.get<ListParametersResponse>(this.apiUrl);
  }

  getAcubeSATTelemetryResponse(): Observable<ListParametersResponse> {
    return this.http.get<ListParametersResponse>(this.acubeSATUrl);
  }

  getPusTelemetryResponse(): Observable<ListParametersResponse> {
    return this.http.get<ListParametersResponse>(this.pusUrl);
  }

  getPusNotUsedTelemetryResponse(): Observable<ListParametersResponse> {
    return this.http.get<ListParametersResponse>(this.pus_not_usedUrl);
  }

  getPusVerificationTelemetryResponse(): Observable<ListParametersResponse> {
    return this.http.get<ListParametersResponse>(this.pus_verificationUrl);
  }

  getYamcsTelemetryResponse(): Observable<ListParametersResponse> {
    return this.http.get<ListParametersResponse>(this.yamcsUrl);
  }

  getSamplesValueResponse(): Observable<TimeSeries> {
    return this.http.get<TimeSeries>(this.samplesUrl);
  }

  getHistoryValueResponse(): Observable<ListParameterHistoryResponse> {
    return this.http.get<ListParameterHistoryResponse>(this.historyUrl);
  }

  changeSample(message: string): void {
    this.sampleSource.next(message);
    this.samplesUrl = "";
    this.historyUrl = "";
    this.sampleSource.subscribe((data) => {
      this.samplesUrl = this.samplesUrl.concat(
        "http://localhost:8090/api/archive/AcubeSAT/parameters",
        data,
        "/samples"
      );

      this.historyUrl = this.historyUrl.concat(
        "http://localhost:8090/api/archive/AcubeSAT/parameters",
        data
      );
    });
  }

  telemetryValuesEnum(message: string): void {
    this.telemetryValSource.next(message);
    this.telemetryEnum = "";
    this.telemetryValSource.subscribe((data) => {
      this.telemetryEnum = this.telemetryEnum.concat(
        "http://localhost:8090/api/mdb/AcubeSAT/parameters",
        data
      );
    });
  }

  getParameterEnumTypes(): Observable<ParameterInfo> {
    return this.http.get<ParameterInfo>(this.telemetryEnum);
  }
}

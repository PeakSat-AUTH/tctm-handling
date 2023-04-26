import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TimeSeries } from "../Interfaces/ArchiveParameters";
import { ListParametersResponse, ParameterInfo} from "../Interfaces/ListParameterResponse";
import { ListParameterHistoryResponse } from "../Interfaces/ParameterHistory";
import { InstanceHandlerService } from "./instance-handler.service";
import { yamcsBaseUrl } from "../Interfaces/GraphData";

@Injectable({
  providedIn: "root",
})
export class TelemetryService {
  private sampleSource = new BehaviorSubject<string>("");
  currentSample = this.sampleSource.asObservable();
  yamcsInstanceName: string = "OBC";
  private telemetryValSource = new BehaviorSubject<string>("");
  currentTelemetryVal = this.telemetryValSource.asObservable();

  private apiUrl = `${yamcsBaseUrl}/mdb/${this.yamcsInstanceName}/parameters`;
  private historyUrl = "";
  private samplesUrl = "";

  private acubeSATUrl = `${this.apiUrl}/?q=%2FAcubeSAT%2F`;
  private pusUrl = `${this.apiUrl}/?q=%2Fpus%2F`;
  private pus_not_usedUrl = `${this.apiUrl}/?q=%2Fpus-not-used%2F`;
  private pus_verificationUrl = `${this.apiUrl}/?q=%2Fpus-verification%2F`;

  private yamcsUrl = `${this.apiUrl}/?q=yamcs`;

  private telemetryEnum = "";

  constructor(
    private http: HttpClient,
    private instanceHandler: InstanceHandlerService
  ) {
    this.instanceHandler
      .getInstance()
      .subscribe((instanceName) => (this.yamcsInstanceName = instanceName));
  }

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
      //"http://localhost:8090/api/archive/AcubeSAT/parameterss",
      this.samplesUrl = this.samplesUrl.concat(
        yamcsBaseUrl,
        "/archive/",
        this.yamcsInstanceName,
        "/parameters",
        data,
        "/samples"
      );

      this.historyUrl = this.historyUrl.concat(
        yamcsBaseUrl,
        "/archive/",
        this.yamcsInstanceName,
        "/parameters",
        data
      );
    });
    console.log(this.samplesUrl);
  }

  telemetryValuesEnum(message: string): void {
    this.telemetryValSource.next(message);
    this.telemetryEnum = "";
    this.telemetryValSource.subscribe((data) => {
      // "http://localhost:8090/api/mdb/AcubeSAT
      this.telemetryEnum = this.telemetryEnum.concat(
        yamcsBaseUrl,
        "/mdb/",
        this.yamcsInstanceName,
        "/parameters",
        data
      );
    });
  }

  getParameterEnumTypes(): Observable<ParameterInfo> {
    return this.http.get<ParameterInfo>(this.telemetryEnum);
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TimeSeries } from "../Interfaces/ArchiveParameters";
import { ListParametersResponse } from "../Interfaces/ListParameterResponse";
import { Ranges } from "../Interfaces/Ranges";
@Injectable({
  providedIn: "root",
})

/**
 * Responsible for sending http requests to yamcs
 */

export class HttpService {
  private apiUrl = "http://localhost:8090/api/mdb/AcubeSAT/parameters/?limit=108"; //by inscreasing the limit, we get the /yamcs/ parameters, which dont work with the current sidenav implementation
  private archiveUrl = "http://localhost:8090/api/archive/AcubeSAT/parameters";
  //yamcs file url is http://localhost:8090/api/mdb/AcubeSAT/parameters/?q=%2Fyamcs%2F

  constructor(private http: HttpClient) {}

  /**
   * 
   * @returns an observable of the list of the parameters that yamcs contains 
   */

  getParameters(): Observable<ListParametersResponse>{
    return this.http.get<ListParametersResponse>(this.apiUrl); 
  }

  /**
   * @parameterName = the parameter's qualifiedName
   * @start = the time we want to start getting the samples
   * @stop = the stop time we want to stop getting the samples
   * @count = number of intervals to use, default is 500
   * @returns the samples of a specific parameter as an observable if that parameter is not an enumeration,
   * because enums do not have samples
   */

  getSamples(
    parameterName: string,
    start: string,
    stop: string,
    count: string
  ): Observable<TimeSeries> {
    let url =
      this.archiveUrl +
      parameterName +
      "/samples?" +
      "start=" +
      start +
      "&" +
      "stop=" +
      stop +
      "&" +
      "count=" +
      count;
    return this.http.get<TimeSeries>(url);
  }

  /**
    @parameterName = the parameter's qualifiedName
    @start = the time we want to start getting the samples
    @stop = the stop time we want to stop getting the samples
    @returns the ranges of a specific parameter if that parameter is an enumeration
    */

  getArchivedEnumSamples(
    parameterName: string,
    start: string,
    stop: string
  ): Observable<Ranges> {
    let url = this.archiveUrl.concat(
      parameterName,
      "/ranges?",
      "start=",
      start,
      "&" + "stop=",
      stop
    );
    return this.http.get<Ranges>(url);
  }

}

import { Component, OnInit, ViewChild } from "@angular/core";
import { ParameterInfo, pusNameList } from "src/app/ListParameterResponse";
import { TelemetryService } from "src/app/services/telemetry.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
@Component({
  selector: "app-telemetry",
  templateUrl: "./telemetry.component.html",
  styleUrls: ["./telemetry.component.css"],
})
export class TelemetryComponent implements OnInit {
  public parameterInfo: ParameterInfo[] = [];
  public parameterInfoName: string[] = [];
  public displayedCol: string[] = ["telemetry", "type"];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private telemetryService: TelemetryService) {}

  ngOnInit(): void {
    this.telemetryService.getTelemetryResponse().subscribe((data) => {
      //this.parameterInfo = [] ;
      this.parameterInfo = [...this.parameterInfo, ...data.parameters];
    });
    //this.paginator

    //console.log(this.parameterInfo.length)
  }

  logRowData(row: any) {
    console.log(row);
  }

  applyFilter(filterValue: string) {
    // this.parameterInfo.filter = filterValue.trim().toLowerCase() ;
  }
}

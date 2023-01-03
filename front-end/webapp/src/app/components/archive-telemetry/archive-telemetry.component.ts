import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ParameterInfo, pusNameList } from "src/app/ListParameterResponse";
import { TelemetryService } from "src/app/services/telemetry.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { DataSource } from "@angular/cdk/collections";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { DataserviceService } from "src/app/services/dataservice.service";
import { GraphsComponent } from "../graphs/graphs.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Sample, TimeSeries } from "src/app/ArchiveParameters";
import { async, lastValueFrom } from "rxjs";
import { ParameterValue } from "src/app/ParameterHistory";
import { MatStepper } from "@angular/material/stepper";
import { timeValidation } from "../../validators/time-validation";
import { SharedgraphserviceService } from "src/app/services/sharedgraphservice.service";

@Component({
  selector: "app-archive-telemetry",
  templateUrl: "./archive-telemetry.component.html",
  styleUrls: ["./archive-telemetry.component.css"],
})
export class ArchiveTelemetryComponent implements OnInit {
  public folders: string[] = [
    "AcubeSAT",
    "pus",
    "pus-not-used",
    "pus-verification",
    "yamcs", //problematic one
  ];
  public folderCol: string[] = ["folder"];
  public displayedCol: string[] = ["telemetry", "type"];
  public firstStep: boolean = false;
  public formFillFields: string[] = ["start", "stop", "count"];
  public secondStep: boolean = false;
  public parameterSendName: string | undefined;
  private start: string = "";
  private stop: string = "";
  private count: string = "";
  private startedit: string = "";
  private stopedit: string = "";
  public starthint: Date = new Date(); //string = ""; //
  public stophint: Date = new Date(); //string = ""; //
  qualifiedName: string = "";
  public parameterasync: ParameterInfo[] = [];
  public parameterasyncName: ParameterInfo[] = [];
  private asyncTimeArray: Sample[] = [];
  public asyncHistoryParameter: ParameterValue[] = [];
  tableDataSource!: MatTableDataSource<ParameterInfo>;
  public currentFolder: string = "";
  private samplesData!: TimeSeries;

  archiveTelemetryForm = this.fb.group(
    {
      start: ["", Validators.required], //more validators required
      stop: ["", Validators.required],
      count: ["", Validators.required],
    },
    { validator: timeValidation }
  );

  constructor(
    private telemetryService: TelemetryService,
    private fb: FormBuilder,
    private dataservice: DataserviceService,
    private graphs: GraphsComponent,
    private snackBar: MatSnackBar,
    private cdRef: ChangeDetectorRef, 
    private sharedService: SharedgraphserviceService
  ) {}

  async ngOnInit(): Promise<void> {
    // let data = await lastValueFrom(
    //   this.telemetryService.getTelemetryResponse()
    // );
    let acubeSAT = await lastValueFrom(
      this.telemetryService.getAcubeSATTelemetryResponse()
    );
    let pus = await lastValueFrom(
      this.telemetryService.getPusTelemetryResponse()
    );
    let pus_not_used = await lastValueFrom(
      this.telemetryService.getPusNotUsedTelemetryResponse()
    );
    let pus_verification = await lastValueFrom(
      this.telemetryService.getPusVerificationTelemetryResponse()
    );

    let yamcsData = await lastValueFrom(
      this.telemetryService.getYamcsTelemetryResponse()
    );
    this.parameterasync = this.parameterasync.concat(
      acubeSAT.parameters,
      pus.parameters,
      pus_not_used.parameters,
      pus_verification.parameters,
      yamcsData.parameters
    );

    this.dataservice.currentStart.subscribe((start) => (this.start = start));
    this.dataservice.currentStop.subscribe((stop) => (this.stop = stop));
    this.dataservice.currentCount.subscribe((count) => (this.count = count));
    this.telemetryService.currentSample.subscribe(
      (message) => (this.qualifiedName = message)
    );
  }
  async logRowData(row: any, stepper: MatStepper) {
    this.dataservice.changeParameterName(row.qualifiedName);

    this.cdRef.detectChanges();
    this.parameterSendName = row.name;
    this.qualifiedName = row.qualifiedName;
    console.log(this.qualifiedName);
    this.telemetryService.changeSample(this.qualifiedName);
    try{
      this.samplesData = await lastValueFrom(
      this.telemetryService.getSamplesValueResponse()
      );
    }catch(error){
      console.log(error);
    }
    this.asyncTimeArray = this.samplesData.sample;
    if (this.asyncTimeArray == undefined) {
      window.alert("This telemetry has no samples. Please pick another one");
      /* here needs implementation for starthint and stophint  */
    } else {
      this.secondStep = true;
      this.starthint = this.asyncTimeArray[0].time;
      this.stophint = this.asyncTimeArray[this.asyncTimeArray.length - 1].time;
    }

    let historyData = await lastValueFrom(
      this.telemetryService.getHistoryValueResponse()
    );

    this.asyncHistoryParameter = historyData.parameter;

    stepper.next();
  }

  logFolderRowData(row: any, stepper: MatStepper) {
    this.currentFolder = row;
    console.log(this.currentFolder);
    this.pickCorrectFolder(row, stepper);
  }

  backNavigation() {
    this.firstStep = false;

    this.parameterasyncName = [];
    this.currentFolder = "";
  }

  backToparameter() {
    this.secondStep = false;
  }

  onSubmit() {
    this.dataservice.changeQueries(
      this.archiveTelemetryForm.get(["start"])!.value,
      this.archiveTelemetryForm.get(["stop"])!.value,
      this.archiveTelemetryForm.get(["count"])!.value
    );
    this.addArchiveGraph();
  }

  pickCorrectFolder(row: any, stepper: MatStepper) {
    this.parameterasyncName = [];
    this.firstStep = true;
    this.cdRef.detectChanges(); // trigger the change detection manually to apply the completed state to the first step, which allows the stepper to move to the next step

    for (let i = 0; i < this.parameterasync.length; i++) {
      if (this.parameterasync[i].qualifiedName.includes("/" + row + "/")) {
        this.parameterasyncName = this.parameterasyncName.concat(
          this.parameterasync[i]
        );
      }
    }
    this.tableDataSource = new MatTableDataSource(this.parameterasyncName);
    stepper.next();
  }

  isYamcs(folder: string): boolean {
    if (folder == "yamcs") {
      return true;
    } else {
      return false;
    }
  }

  // pickCorrectSamples(stepper: MatStepper) {
  //   this.starthint = this.asyncTimeArray[0].time;
  //   this.stophint = this.asyncTimeArray[this.asyncTimeArray.length - 1].time; // this.historyParameter[0].generationTime;
  //   stepper.next();
  // }

  // changeStartStopTime() {

  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }
  addArchiveGraph(): void {
    this.dataservice.changeView(true);
    this.sharedService.makeArchiveGraphPublish();
  }

  changeToCorrectTime() {
    if (
      this.archiveTelemetryForm.get("stop")!.value == "" ||
      this.archiveTelemetryForm.get("start")!.value == "" ||
      this.archiveTelemetryForm.get("count")!.value == ""
    ) {
      window.alert("Please enter start, stop time & count");
    } else if (
      this.archiveTelemetryForm.get("start")!.value >
      this.archiveTelemetryForm.get("stop")!.value
    ) {
      window.alert("Please enter start time bigger than stop time");
    } else {
      this.archiveTelemetryForm
        .get("start")!
        .patchValue(
          JSON.stringify(this.archiveTelemetryForm.get("start")!.value)
        );
      this.startedit = this.archiveTelemetryForm.get("start")!.value;
      this.startedit = this.startedit.replace(/"/g, ""); // The "g" represents the "global modifier". This means that the replace will replace all copies of the matched string with the replacement string you provide.
      this.archiveTelemetryForm.get("start")!.patchValue(this.startedit);

      this.archiveTelemetryForm
        .get("stop")!
        .patchValue(
          JSON.stringify(this.archiveTelemetryForm.get("stop")!.value)
        );
      this.stopedit = this.archiveTelemetryForm.get("stop")!.value;
      this.stopedit = this.stopedit.replace(/"/g, "");
      this.archiveTelemetryForm.get("stop")!.patchValue(this.stopedit);

      //this.start = this.archiveTelemetryForm.get('start').value ;
    }
  }

  backToTime() {
    this.archiveTelemetryForm.get("start")!.patchValue("");
    this.archiveTelemetryForm.get("stop")!.patchValue("");
    this.archiveTelemetryForm.get("count")!.patchValue("");
  }

  openSnackBar(message: string, action: string | undefined) {
    this.snackBar.open(message, action, {
      duration: 5000,
      panelClass: ["black-snackbar"], // color of snackbar
    });
  }
}

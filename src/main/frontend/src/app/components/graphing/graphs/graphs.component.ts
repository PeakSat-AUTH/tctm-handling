import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { lastValueFrom } from 'rxjs';
import { createdRealTimeGraphsInstanceAndQualifiedNames } from 'src/app/Interfaces/GraphData';
import { ListParametersResponse, ParameterInfo } from 'src/app/Interfaces/ListParameterResponse';
import { HttpService } from 'src/app/services/http.service';
import { InstanceHandlerService } from 'src/app/services/instance-handler.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SharedgraphserviceService } from 'src/app/services/sharedgraphservice.service';
import { WebsocketService } from '../../../services/websocket.service';
import { ViewChangeService } from 'src/app/services/view-change.service';

@Component({
  selector: 'app-graphs',
  templateUrl: 'graphs.component.html',
  styleUrls: ['./graphs.component.css']
})

export class GraphsComponent implements OnInit {

  parametersList!: ListParametersResponse;  // includes a list of all parameters (maybe make this a globabal variable)
  displayedCol: string[] = ["Parameter Names", "Parameter Types"];
  tableDataSource!: MatTableDataSource<ParameterInfo>;
  graphsView!: boolean;
  yamcsInstanceName: string = "OBC";

  constructor(private wss: WebsocketService,
              private httpService: HttpService,
              private sharedService: SharedgraphserviceService,
              private notifService: NotificationService,
              private instanceHandler: InstanceHandlerService,
              private viewChangeService: ViewChangeService
    ) {
      this.wss.listen();
      this.instanceHandler.getInstance().subscribe((instanceName) => (this.yamcsInstanceName = instanceName));
     }

     async ngOnInit(): Promise<void> {
      this.parametersList = await lastValueFrom(this.httpService.getParameters());  
      this.parametersList.parameters = this.parametersList.parameters.filter((param) => (param.hasOwnProperty('type')));
      this.tableDataSource = new MatTableDataSource(this.parametersList.parameters);
      this.viewChangeService.getView().subscribe((view) => {
        this.graphsView = view;
      });
    }
  
   /**
    * Checks if the graph of a specific parameter is created, by checking if its qualified name and instance
    * exists in the createdRealTimeGraphsQualifiedNames array.
    *  
    * If it isn't, we are requesting a wss call to yamcs and also creating the graph,
    * by publishing a click event to the add-graph.directive,
    * which is responsible for the creation of the graph.
    * 
    * If it is, we are displaying a notification to the user, saying that the graph 
    * already exists.
    * 
    * @param qualifiedName the qualified name of the parameter we're requesting
    */
  
    addGraph(qualifiedName: string): void{
      if(!createdRealTimeGraphsInstanceAndQualifiedNames.includes(this.yamcsInstanceName + qualifiedName)){
        this.wss.newParameterRequest(qualifiedName);
        this.sharedService.makeGraphPublish(qualifiedName);
        this.graphsView = true;
        this.viewChangeService.changeToView(this.graphsView);
      }else{
        this.notifService.notification$.next("Graph already exists");
      }
    }

    applyFilter(event: Event): void {
      const filteredValue = (event.target as HTMLInputElement).value;
      this.tableDataSource.filter = filteredValue.trim().toLowerCase();
    }

    changeView(graphViewChange: boolean): void{
      this.graphsView = graphViewChange;
      this.viewChangeService.changeToView(this.graphsView);
    }
}
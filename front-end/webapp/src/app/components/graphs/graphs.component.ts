import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-graphs',
  templateUrl: 'graphs.component.html',
  styleUrls: ['./graphs.component.css']
})

export class GraphsComponent implements OnInit {

  showGraphs: boolean = true;

  constructor(private dataservice:DataserviceService, private wss: WebsocketService) { }


  /**
  * Invokes websocket service and subscribes to method listen().
  * Changes from graph view to archive telemetry view.
  */
  ngOnInit(): void {
    this.wss.listen();  
    this.dataservice.currentNgIF.subscribe((ngif) => this.showGraphs = ngif);
  }

}
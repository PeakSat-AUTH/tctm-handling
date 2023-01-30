import { Component, OnInit} from '@angular/core';
import { ListParametersResponse} from 'src/app/Interfaces/ListParameterResponse';
import { WebsocketService } from 'src/app/services/websocket.service';
import { HttpService } from 'src/app/services/http.service';
import { lastValueFrom } from 'rxjs';
import { SharedgraphserviceService } from 'src/app/services/sharedgraphservice.service';
import { createdRealTimeGraphsQualifiedNames, parameterNames } from 'src/app/Interfaces/GraphData';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  parametersList!: ListParametersResponse;  // includes a list of all parameters (maybe make this a globabal variable)
  fileNames: string[] = [] //stores the file names dynamically
  parameterNames: string[] = [];

  constructor( private httpService: HttpService,
    private wss: WebsocketService, 
    private sharedService: SharedgraphserviceService,
    private notifService: NotificationService) {
    
  }

  ngAfterViewInit(): void{
    setTimeout(() => {
    let arrow = document.querySelectorAll(".arrow") as NodeListOf<Element>;
    for (let i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e)=>{
        // @ts-ignore
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
      });
    }
    let sidebar = document.querySelector(".sidebar") as HTMLVideoElement;
    let sidebarBtn = document.querySelector(".bx-menu") as HTMLVideoElement;
    sidebarBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("close");
    });
    }, 250);
  }

  async ngOnInit(): Promise<void> {
    this.parametersList = await lastValueFrom(this.httpService.getParameters());  
    for(let i=0; i<this.parametersList.parameters.length; i++){
      this.parameterNames.push(this.parametersList.parameters[i].name);
      parameterNames.push(this.parametersList.parameters[i].name);
      let regexName = this.parametersList.parameters[i].qualifiedName.match(/ *\/[^/]*\/ */g); //gets the file's name e.g. /pus/ as a regexp so it needs to get converted to a string below
      let fileName = <string>regexName?.toString();
      if(!this.fileNames.includes(fileName)){
        this.fileNames.push(fileName);
      }
    } 
  }

 /**
  * Checks if the graph of a specific parameter is created, by checking if its qualified name
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
    if(!createdRealTimeGraphsQualifiedNames.includes(qualifiedName)){
      this.wss.newParameterRequest(qualifiedName);
      this.sharedService.makeGraphPublish(qualifiedName);
    }else{
      this.notifService.notification$.next("Graph already exists");
    }
  }
  
}

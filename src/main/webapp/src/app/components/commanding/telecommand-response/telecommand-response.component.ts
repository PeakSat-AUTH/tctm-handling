import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { CommandHistoryAttribute, CommandHistoryEntry } from 'src/app/Interfaces/TcHistory';
import { MatTooltip } from '@angular/material/tooltip';
import { TelecommandsComponent } from '../telecommands/telecommands.component';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-telecommand-response',
  templateUrl: './telecommand-response.component.html',
  styleUrls: ['./telecommand-response.component.css']
})
export class TelecommandResponseComponent implements OnInit {

  response!: any; //getting passed by the tc-item and getting set in the directive
  tcStatus!: CommandHistoryEntry;
  tcStatusArray: CommandHistoryAttribute[] = [];
  tcVerifierArray: CommandHistoryAttribute[] = [];

  constructor(private httpService: HttpService, private telecommands: TelecommandsComponent, private dataService: DataserviceService) { }

  async ngOnInit(): Promise<void> {
    this.tcStatus = await lastValueFrom(this.httpService.getTcResponse(this.response.id));
    console.log(this.tcStatus);
    for(let i=0; i<this.tcStatus.attr.length; i++){
      if(this.tcStatus.attr[i].name.startsWith('Verifier') && this.tcStatus.attr[i].name.endsWith("Status")){
        this.tcVerifierArray.push(this.tcStatus.attr[i]);
      }else if(this.tcStatus.attr[i].name.startsWith("Acknowledge") && this.tcStatus.attr[i].name.endsWith("Status")){
        this.tcStatusArray.push(this.tcStatus.attr[i]);
      }
    }  

    for(let i=1; i<=3; i++){
      setTimeout(() => this.reloadData(), 5000*i);
    }
      
    }

    async reloadData(): Promise<void>{
        this.tcStatus = await lastValueFrom(this.httpService.getTcResponse(this.response.id));
        console.log(this.tcStatus);
        this.tcVerifierArray.length = 0;
        this.tcStatusArray.length = 0;
        for(let i=0; i<this.tcStatus.attr.length; i++){
          if(this.tcStatus.attr[i].name.startsWith('Verifier') && this.tcStatus.attr[i].name.endsWith("Status")){
            this.tcVerifierArray.push(this.tcStatus.attr[i]);
          }else if(this.tcStatus.attr[i].name.startsWith("Acknowledge") && this.tcStatus.attr[i].name.endsWith("Status")){
            this.tcStatusArray.push(this.tcStatus.attr[i]);
          }
        }
    }

    sendAnotherTC(): void{
      this.dataService.destroyTC(undefined);
      this.telecommands.onViewChange();
    }

    getValue(assignment: any): any{
      return Object.values(assignment.value)[1];
    }
  }

  

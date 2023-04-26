import { Directive, ViewContainerRef } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { CommandInfo } from 'src/app/Interfaces/Telecommands';
import { TelecommandItemComponent } from '../telecommand-item/telecommand-item.component';
import { TelecommandResponseComponent } from '../telecommand-response/telecommand-response.component';
import { InstanceHandlerService } from 'src/app/services/instance-handler.service';

@Directive({
  selector: '[appCreateTcItem]'
})
export class CreateTcItemDirective {

  yamcsInstanceName = "OBC";

  constructor(private dataService: DataserviceService, private viewRef: ViewContainerRef, private instanceHandler: InstanceHandlerService) { 
    this.dataService.receiveAndMakeTC().subscribe((tc) => this.makeTC(tc));
    this.dataService.directiveDestroyTC().subscribe((tcResponse) => this.destroyTcRef(tcResponse))
    this.instanceHandler.getInstance().subscribe((instanceName) => (this.yamcsInstanceName = instanceName))
  }

  makeTC(tc: CommandInfo): void{
    this.viewRef.remove();
    const currentTC = this.viewRef.createComponent(TelecommandItemComponent);
    currentTC.instance.currentTC = tc;
    currentTC.instance.yamcsInstanceName = this.yamcsInstanceName;
  }

  destroyTcRef(tcResponse?: any): void{
    this.viewRef.remove();
    /**
     * Remove these 2 lines below if you do not want to create the tc response component
     */
    if(tcResponse !== undefined){
      const currentTcHistory = this.viewRef.createComponent(TelecommandResponseComponent);
      currentTcHistory.instance.response = tcResponse;
    }
  }

  emptyDirective(): void{
    this.viewRef.remove();
  }

}

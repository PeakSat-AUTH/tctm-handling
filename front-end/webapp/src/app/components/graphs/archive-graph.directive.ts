import { Directive, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { archiveGraphNames } from 'src/app/GraphData';
import { SharedgraphserviceService } from 'src/app/services/sharedgraphservice.service';
import { ArchiveGraphComponent } from '../archive-graph/archive-graph.component';

@Directive({
  selector: '[appArchiveGraph]'
})
export class ArchiveGraphDirective{
  makeArchiveGraphSubscription !: Subscription;
  clickEventSubscription !: Subscription;
  constructor(private viewContainerRef: ViewContainerRef, private sharedService: SharedgraphserviceService) {
    this.clickEventSubscription = this.sharedService.getArchiveGraphClickEvent().subscribe((type) => this.deleteArchiveGraph(type));
    this.makeArchiveGraphSubscription = this.sharedService.makeArchiveGraph().subscribe(() => this.makeArchiveGraph());
   }

  makeArchiveGraph(){
   this.viewContainerRef.createComponent(ArchiveGraphComponent);
  }

  deleteArchiveGraph(type: string){
    let index = archiveGraphNames.findIndex((itsName) => (itsName == type));
    this.viewContainerRef.remove(index);
    archiveGraphNames.splice(index,1);
  }

}

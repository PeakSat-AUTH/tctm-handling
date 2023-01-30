import { Directive, ViewContainerRef } from '@angular/core';
import { callMatchingMap, calls, createdRealTimeGraphsQualifiedNames } from 'src/app/Interfaces/GraphData';
import { GraphItemComponent } from '../graph-item/graph-item.component';
import { SharedgraphserviceService } from 'src/app/services/sharedgraphservice.service';
import { Subscription } from 'rxjs';
import { WebsocketService } from 'src/app/services/websocket.service';

@Directive({
  selector: '[appAddGraph]'
})

/**
 * Responsible for the creation/deletion of the graph-item.component
 */

export class AddGraphDirective{
clickEventsubscription !: Subscription;
makeGraphSubscription !: Subscription;

/**
 * Subscribes to the sidenav and listens for the click of a parameter in order to create the GraphItemComponent.
 * Subscribes to the GraphItem's component X button and listens for clicks in order to delete that specific GraphComponent.
 */

constructor(public viewContainerRef: ViewContainerRef, private sharedService: SharedgraphserviceService, private wss: WebsocketService) {
  this.makeGraphSubscription = this.sharedService.makeGraph().subscribe((name) => this.makeGraph(name));
  this.clickEventsubscription = this.sharedService.getGraphClickEvent().subscribe((qualifiedName) => this.deleteGraph(qualifiedName));
 }

/**
 * Creates a viewRef (check angular's documentation) of a GraphItemComponent.
 * Sets its qualifiedName equal to the @param qualifiedName which is obtained from the sidenav click.
 * Stores the GraphItemComponent's qualified name in an array.
 * 
 * @param qualifiedName = the parameter's qualified name
 */

makeGraph(qualifiedName: string): void{
  const graphitem = this.viewContainerRef.createComponent(GraphItemComponent);
  graphitem.instance.qualifiedName = qualifiedName;
  createdRealTimeGraphsQualifiedNames.push(graphitem.instance.qualifiedName);
}

/**
 * Deletes a specific GraphItemComponent when the according X button is clicked.
 * Doing that by searching for its qualifiedName in the Array and finding
 * its index.
 * After that it removes the component from the array and the ViewContainerRef.
 * Also cancels the wss call, and deletes the call from the calls array and the map 
 * in order to stop receiving unwanted data.
 * 
 * @param qualifiedName = the parameter's qualified name
 */

deleteGraph(qualifiedName: string): void{
  let index = createdRealTimeGraphsQualifiedNames.findIndex((specificQualifiedName: string) => specificQualifiedName == qualifiedName);
  this.viewContainerRef.remove(index);
  createdRealTimeGraphsQualifiedNames.splice(index,1);
  this.wss.cancelCall(calls[index]);
  callMatchingMap.delete(calls[index]);
  calls.splice(index,1);
  }
}

import { ViewContainerRef, Directive,OnInit } from '@angular/core';
import { ArchiveTelemetryComponent } from '../archive-telemetry/archive-telemetry.component';

@Directive({
  selector: '[appArchiveTelemetry]'
})
export class ArchiveTelemetryDirective implements OnInit{

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.viewContainerRef.createComponent(ArchiveTelemetryComponent);
  }
}

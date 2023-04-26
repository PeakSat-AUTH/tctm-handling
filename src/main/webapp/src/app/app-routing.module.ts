import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphItemComponent } from './components/graphing/graph-item/graph-item.component';
import { ArchiveTelemetryComponent } from './components/graphing/archive-telemetry/archive-telemetry.component';
import { TelemetryComponent } from './components/telemetry/telemetry.component';
import { TelecommandsComponent } from './components/commanding/telecommands/telecommands.component';

const routes: Routes = [
  { path: 'graphs', component: GraphItemComponent },
  { path: '', redirectTo: 'graphs', pathMatch: 'full' },
  { path: 'archive-telemetry', component: ArchiveTelemetryComponent},
  { path: 'telemetry-table', component: TelemetryComponent },
  { path: 'telecommands', component: TelecommandsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents= [] 
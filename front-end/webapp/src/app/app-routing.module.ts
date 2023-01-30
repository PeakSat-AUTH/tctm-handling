import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphItemComponent } from './components/graph-item/graph-item.component';
import { ArchiveTelemetryComponent } from './components/archive-telemetry/archive-telemetry.component';
import { TelemetryComponent } from './components/telemetry/telemetry.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'graphs', component: GraphItemComponent },
  { path: 'archive-telemetry', component: ArchiveTelemetryComponent},
  { path: 'telemetry-table', component: TelemetryComponent }
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
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material/material.module";
import { HeaderComponent } from "./components/header/header.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatGridListModule } from "@angular/material/grid-list";
import { GraphsComponent } from "./components/graphing/graphs/graphs.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { GraphItemComponent } from "./components/graphing/graph-item/graph-item.component";
import { HttpService } from "./services/http.service";
import { TelemetryComponent } from "./components/telemetry/telemetry.component";
import { RouteReuseStrategy, RouterModule, Routes } from "@angular/router";
import { ArchiveGraphComponent } from "./components/graphing/archive-graph/archive-graph.component";
import { ArchiveTelemetryComponent } from "./components/graphing/archive-telemetry/archive-telemetry.component";
import { ReactiveFormsModule } from "@angular/forms";

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
} from "@angular-material-components/datetime-picker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";



import { AddGraphDirective } from './components/graphing/graphs/add-graph.directive';
import { ArchiveGraphDirective } from './components/graphing/graphs/archive-graph.directive';
import { CustomRouteReuseStrategy } from "./Route Reusal/custom-route-reuse-strategy.service";
import { TelecommandsComponent } from './components/commanding/telecommands/telecommands.component';
import { TelecommandItemComponent } from './components/commanding/telecommand-item/telecommand-item.component';
import { CreateTcItemDirective } from './components/commanding/telecommands/create-tc-item.directive';
import { TelecommandResponseComponent } from './components/commanding/telecommand-response/telecommand-response.component';
import { MatTooltip, MatTooltipModule } from "@angular/material/tooltip";
import { APP_BASE_HREF } from "@angular/common";


const appRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "",
  },
  { path: "telemetry-table", component: TelemetryComponent },
  { path: "archive-telemetry", component: ArchiveTelemetryComponent },
  { path: "graphs", component: GraphsComponent },
  { path: 'telecommands', component: TelecommandsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    GraphsComponent,
    GraphItemComponent,
    TelemetryComponent,
    ArchiveGraphComponent,
    ArchiveTelemetryComponent,
    AddGraphDirective,
    ArchiveGraphDirective,
    TelecommandsComponent,
    TelecommandItemComponent,
    CreateTcItemDirective,
    TelecommandResponseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatSidenavModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    MatExpansionModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MatSnackBarModule,
    NgxMatDatetimePickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxMatNativeDateModule,
    MatTooltipModule,
  ],
  providers: [
    GraphItemComponent,
    GraphsComponent,
    HttpService,
    MatDatepickerModule,
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    },
    {
      provide: APP_BASE_HREF,
      useFactory: () => {
        // base href is set in index.html so that it can be applied
        // for loading static resources. Here we derive APP_BASE_HREF
        // from it (keep context path, but remove static path).
        // This is the value used by Angular Router where we don't
        // want to see the static prefix.
        const baseEl = document.getElementsByTagName('base')[0];
        return baseEl.getAttribute('href')?.replace('static/', '');
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

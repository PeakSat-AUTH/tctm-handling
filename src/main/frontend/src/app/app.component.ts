import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NavigationEnd, Router } from "@angular/router";
import { NotificationService } from "./services/notification.service";
import { WebsocketService } from "./services/websocket.service";
import { InstanceHandlerService } from "./services/instance-handler.service";
import { ViewChangeService } from "./services/view-change.service";
import { DataserviceService } from "./services/dataservice.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  homeUrl: boolean = true;
  graphsView!: boolean;
  time!: Date;
  utcTime!: Date;

  constructor(
    private wss: WebsocketService,
    private notificationService: NotificationService,
    private snackBar: MatSnackBar,
    private router: Router,
    private instanceHandlerService: InstanceHandlerService,
    private viewChangeService: ViewChangeService,
    private dataService: DataserviceService
  ) {
    this.notificationService.notification$.subscribe((message) => {
      this.snackBar.open(message, "OK", { duration: 3000 });
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == "/") {
          this.homeUrl = true;
        } else {
          this.homeUrl = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this.dataService.currentgreekTime.subscribe((time) => {
      this.time = time;
    });
    this.dataService.currentUTCTime.subscribe((time) => {
      this.utcTime = time;
    });

    this.wss.newConnection();
    this.viewChangeService.getView().subscribe((view) => {
      this.graphsView = view;
    });
    setInterval(() => {
      this.time = new Date();
      this.dataService.changeTime(this.time);
    }, 1000);
  }

  onInstanceClick(instanceClick: string) {
    this.instanceHandlerService.updateInstance(instanceClick);
  }

  changeView(): void {
    this.viewChangeService.changeToView(true);
  }
}

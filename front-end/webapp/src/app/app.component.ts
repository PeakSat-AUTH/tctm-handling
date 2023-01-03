import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, Router } from '@angular/router';
import { NotificationService } from './services/notification.service';
import { WebsocketService } from './services/websocket.service';
import { DataserviceService } from './services/dataservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  homeUrl : boolean = true ; 
   
  constructor(private wss:WebsocketService, 
    private notificationService: NotificationService,
    private snackBar: MatSnackBar, 
    private router: Router,
    private dataService: DataserviceService) { 
    this.notificationService.notification$.subscribe(message => {
      this.snackBar.open(message, "OK",{ duration: 3000});
    });
    this.router.events.subscribe((event) => {       
      if(event instanceof NavigationEnd){ 
        if(event.url=="/"){ 
          this.homeUrl = true ; 
        }
        else { 
          this.homeUrl = false ; 
        }
       
      }     })
  
  }

    ngOnInit(): void {
      this.wss.newConnection();
    }

    changeView(){
      this.dataService.changeView(true);
    }
}

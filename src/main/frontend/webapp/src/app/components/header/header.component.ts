import { Component, OnInit } from '@angular/core';
import { InstanceHandlerService } from 'src/app/services/instance-handler.service';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  instance!: string;
  utcTime!: Date;

  constructor(private instanceHandlerService: InstanceHandlerService, private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.instanceHandlerService.getInstance().subscribe(instance => this.instance = instance);

    this.dataService.currentUTCTime.subscribe((time) => {
      this.utcTime = time;
    });
  }

  // renders the correct name in the div tag 
  name: string="Spacecraft Operations"; 

  getName(): string{
    if(!this.name)
    {
      this.name="username";
    }
    return this.name; 
  }

}

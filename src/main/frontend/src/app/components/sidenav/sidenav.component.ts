import { ViewChangeService } from "src/app/services/view-change.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataserviceService } from "src/app/services/dataservice.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent implements OnInit {
  graphsView!: boolean;

  constructor(
    private router: Router,
    private viewChangeService: ViewChangeService,
  ) {}

  ngAfterViewInit(): void {
    let arrow = document.querySelectorAll(".arrow") as NodeListOf<Element>;
    for (let i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        // @ts-ignore
        let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
      });
    }
    let sidebar = document.querySelector(".sidebar") as HTMLVideoElement;
    let sidebarBtn = document.querySelector(".bx-menu") as HTMLVideoElement;
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });
  }

  ngOnInit(): void {
    this.router.navigate(["/graphs"]); //This is temporary for the campaign
    setTimeout(() => {
      console.log("graphs");
      this.router.navigate([""]);
    }, 25);

    this.viewChangeService.getView().subscribe((view) => {
      this.graphsView = view;
    });
  }

  changeView(): void {
    this.viewChangeService.changeToView(false);
  }
}

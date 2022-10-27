import { Component, OnInit } from '@angular/core';
import {Tour} from "../../model/tour";
import {TourService} from "../../service/tour.service";
import {Router} from "@angular/router";
import swal from "sweetalert";

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour-create.component.html',
  styleUrls: ['./tour-create.component.css']
})
export class TourCreateComponent implements OnInit {

  tour: Tour = {
    id:0,
    title:"name",
    description: "Mo ta",
    price: 0
  };

  constructor(private tourService: TourService,
              private router: Router) {

  }

  ngOnInit(): void {
  }
  createTour() {
    swal("Thêm thành công", "good", "success")
    this.tourService.createTour(this.tour)
      .subscribe(() => {
        this.router.navigate(['/'])
      });
  }
}

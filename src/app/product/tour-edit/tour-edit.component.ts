import { Component, OnInit } from '@angular/core';
import {Tour} from "../../model/tour";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TourService} from "../../service/tour.service";
import swal from "sweetalert";

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent implements OnInit {
  tour: Tour = {
    id:0,
    title:"name",
    description: "Mo ta",
    price: 0
  };
  id: number | undefined;
  constructor(private tourService: TourService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getTour(this.id);
    })
  }

  ngOnInit(): void {
  }

  getTour(id: number){
    this.tourService.getTour(id).
    subscribe(product =>{
      this.tour = product;
    });
  }

  updateTour(){
    swal("Sửa thành công", "good", "success");
    this.tourService.updateTour(this.tour.id, this.tour).subscribe(()=>{
      this.router.navigate(['/'])
    });
    // this.router.navigateByUrl("/");
  }
}

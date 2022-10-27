import { Component, OnInit } from '@angular/core';
import {Tour} from "../../model/tour";
import {TourService} from "../../service/tour.service";
import swal from "sweetalert";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
tours: Tour[]=[]

  constructor(private tourService: TourService) {
  this.getAll();
  }

  ngOnInit(): void {
  }
  getAll(): Tour[]{
    this.tourService.getAllTour().subscribe(
      tours=>{
        this.tours= tours;
      }
    )
    return this.tours;
  }
  delete(id: any){

    swal({
      title: "Bạn chắc muốn xóa chứ",
      text: "Nếu xóa, bạn sẽ không thể khôi phục lại được",
      icon: "warning",
      // @ts-ignore
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Xong, bạn đã xóa rồi đó", {
            icon: "success",
          });
          this.tourService.deleteTour(id).subscribe(
            next =>{this.tours = this.getAll();
            },
            error => {
              alert("error")
            }
          );
        } else {
          swal("Thứ bạn cần xóa đã k được xóa");
        }
      });
  }

}

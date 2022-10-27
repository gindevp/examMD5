import {Component, OnInit} from '@angular/core';
import {Tour} from "../../model/tour";
import {TourService} from "../../service/tour.service";
import swal from "sweetalert";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  tours: Tour[] = []

  constructor(private tourService: TourService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(): Tour[] {
    this.tourService.getAllTour().subscribe(
      tours => {
        this.tours = tours;
      }
    )
    return this.tours;
  }

  delete(id: any) {

    swal({
      title: "Xóa tuor",
      text: `Tour du lịch: ${this.findTourById(id).title}
Giá: ${this.findTourById(id).price}
Giới thiệu: ${this.findTourById(id).description}`,
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
            next => {
              this.tours = this.getAll();
            },
            error => {
              alert("error")
            }
          );
        } else {
          swal("Thứ bạn cần xóa đã không được xóa");
        }
      });
  }

  detail(id: number) {
    console.log(this.tours)
    swal({
      title: "Show detail",
      text: `Tour du lịch: ${this.findTourById(id).title}
Giá: ${this.findTourById(id).price}
Giới thiệu: ${this.findTourById(id).description}`,
    })
  }
  findTourById(id: number): Tour{
    // @ts-ignore
    let tour: Tour={}
    for (let i = 0; i < this.tours.length; i++) {
      if(this.tours[i].id==id){
        return tour=this.tours[i];
      }
    }
    return tour;
  }
}

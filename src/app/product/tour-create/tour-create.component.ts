import { Component, OnInit } from '@angular/core';
import {Tour} from "../../model/tour";
import {TourService} from "../../service/tour.service";
import {Router} from "@angular/router";
import swal from "sweetalert";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";


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
  imgSrc:any='../../../assets/img_1.png';
  selectedImage: any = null;
  constructor(private tourService: TourService,
              private router: Router,
              private storage: AngularFireStorage) {

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
uploadFile(){
    if(this.selectedImage!=null){
      console.log("ten file "+this.selectedImage.name)
      const filePath= `${this.selectedImage.name.split('.').splice(0,-1).join('.')}_${new Date().getTime()}`
      console.log("filePath "+filePath)
      const fileRef= this.storage.ref(filePath);
      console.log(fileRef)
      this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
        finalize(()=>{
          fileRef.getDownloadURL().subscribe(url=>{
            console.log("url"+url)
            this.imgSrc=url;
          })
        })
      ).subscribe();
    }
}
  showPreview(event: any) {
  if(event.target.files && event.target.files[0]){
    const reader = new FileReader();
    reader.onload=(e:any)=>this.imgSrc=e.target.result;
    reader.readAsDataURL(event.target.files[0])
    this.selectedImage= event.target.files[0];
    this.uploadFile();
  }else {
    this.imgSrc='../../../assets/img_1.png'
    this.selectedImage=null;
  }
  }
}

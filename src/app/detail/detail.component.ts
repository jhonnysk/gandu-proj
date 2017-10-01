import { Component, OnInit } from '@angular/core';
import {HttpTestService} from '../http-test.service';
import { Router,ActivatedRoute,NavigationEnd } from '@angular/router';

import { FileUploader } from 'ng2-file-upload';

import { DomSanitizer } from '@angular/platform-browser';

import { WOW } from 'wowjs/dist/wow.min';
const URL = 'http://127.0.0.1:3000/api';
var modal;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	id: number;
  private sub: any;
  name:string;
imagesBasic = [
          { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg", description: "Image 1" },
          { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg", description: "Image 2" },
          { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg", description: "Image 3" },
          { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg", description: "Image 4" },
          { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg", description: 'Image 5' },
          { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg", description: 'Image 6' },
          { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg", description: 'Image 7' },
          { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg", description: 'Image 8' },
          { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg", thumb: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg", description: 'Image 9' }
    ];
  public uploader:FileUploader = new FileUploader({url: URL});

  localImageUrl=[];
  imageFromServer=[];
  modalImgSrc="";
  firstSlide=[];
  carusels=[];

  constructor(private httpTestService:HttpTestService, private router:Router,private route:ActivatedRoute,private sanitizer:DomSanitizer) {

    router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          console.log(e.url);
          if(e.url==="/detail"){
            $('.hostel-lp .navbar').css('background-color', "#26a69a");
          }

        }
      });


   }

  ngOnInit() {  	
     new WOW().init();
    // 
  // console.log(this.httpTestService.paramCheck(this.route));
  // this.id=this.httpTestService.paramCheck(this.route).id;
  // this.name=this.httpTestService.paramCheck(this.route).name;
      var count=0;
    this.httpTestService.getImageFromServer().subscribe(
      images=>{
        this.imageFromServer=images;
        // console.log(this.imageFromServer);
        
        for(var i=0;i<3;i++){
          var obj={'img':this.imageFromServer[i].img,'caption':this.imageFromServer[i].caption};
          this.firstSlide.push(obj);
          count++;
        }

        for(var i=0;i<(this.imageFromServer.length/3)-1;i++){
          
          var slides=[];

          for(var j=0;j<3;j++){
            var obj={'img':this.imageFromServer[count].img,'caption':this.imageFromServer[count].caption};
            slides.push(obj);
            count++;
          }
          this.carusels.push(slides);
        }

      },error=>alert(error),()=>console.log('finished')
      );

   this.uploader.onAfterAddingFile = (file)=> { 
     
         file.withCredentials = false; 
       let url = (window.URL) ? window.URL.createObjectURL(file._file) : (window as any).webkitURL.createObjectURL(file._file);
        this.localImageUrl.push(url);
    };

    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('data', JSON.stringify(fileItem.formData[0])); 
    }
  }

  ngAfterViewInit(){
   modal = document.getElementById('myModal');
  }

  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

      openModal(imgSrc){
     modal.style.display = "block";
     this.modalImgSrc=imgSrc;
  }
  closeModal(){
    modal.style.display = "none";
  }

}

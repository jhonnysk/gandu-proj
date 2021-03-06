import { Component, OnInit } from '@angular/core';
import {HttpTestService} from '../http-test.service';
import { Router,ActivatedRoute,NavigationEnd } from '@angular/router';

import { FileUploader } from 'ng2-file-upload';

import { DomSanitizer } from '@angular/platform-browser';
import { Lightbox } from 'angular2-lightbox';


import { WOW } from 'wowjs/dist/wow.min';
// const URL = 'http://127.0.0.1:3000/api';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	id: number;
  private sub: any;
  name:string;

  public uploader:FileUploader ;

  localImageUrl=[];
  imageFromServer=[];
  modalImgSrc="";
  firstSlide=[];
  carusels=[];

  constructor(private httpTestService:HttpTestService, private router:Router,private route:ActivatedRoute,private sanitizer:DomSanitizer,
              private _lightbox: Lightbox) {
    this.uploader= new FileUploader({url: this.httpTestService.getApiUrl()+'/api'});
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
        
         // this.imageFromServer=images;
        for(var i=0;i<images.length;i++){
          var obj={_id:images[i]._id,'src':images[i].img,'caption1':images[i].caption};
          this.imageFromServer.push(obj);
        }
        // console.log(this.imageFromServer);
        
        // for(var i=0;i<3;i++){
        //   var obj={'img':this.imageFromServer[i].img,'caption':this.imageFromServer[i].caption};
        //   this.firstSlide.push(obj);
        //   count++;
        // }

        // for(var i=0;i<Math.ceil((this.imageFromServer.length/3))-1;i++){
          
        //   var slides=[];
        //     for(var j=0;j<3;j++){
        //       if(this.imageFromServer[count]){
        //         var obj={'img':this.imageFromServer[count].img,'caption':this.imageFromServer[count].caption};
        //         slides.push(obj);
        //         count++;  
        //       }
              
        //     }            
          
        //   this.carusels.push(slides);
        // }

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
  }

  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.imageFromServer, index);
  }

  deleteImage(imgId,imgSrc,index:number){
    imgSrc=imgSrc.substring(imgSrc.indexOf('uploads')-1);
    this.httpTestService.deleteImageServer(imgId,imgSrc).subscribe(
      data=>{
        if(data.Delete){
          this.imageFromServer.splice(index,1);
        }
      },error=>console.log(error),()=>console.log("finished")
      );
  }
  
}

import { Component } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'File Upload';
 public uploader :FileUploader = new FileUploader({url:'localhost:8000/api/upload'});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
}
public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
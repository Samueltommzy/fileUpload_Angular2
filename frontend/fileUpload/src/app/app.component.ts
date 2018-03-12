import { Component } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 public:FileUploader = new FileUploader({url:'localhost:8000/api/upload'});
}
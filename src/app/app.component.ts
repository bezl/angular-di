import { Component } from '@angular/core';
import { ZooService } from './zoo/services/zoo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-DI';

  constructor(public zooService: ZooService) {
  }
}

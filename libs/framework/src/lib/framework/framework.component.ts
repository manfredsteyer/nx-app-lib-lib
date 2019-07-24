import { Component, OnInit } from '@angular/core';
import { CoreService } from '@myapp/core'

@Component({
  selector: 'myapp-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {

  constructor(private coreService: CoreService) { }

  result = this.coreService.add(1,2);

  ngOnInit() {
  }

}

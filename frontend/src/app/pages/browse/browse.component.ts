import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {


  constructor(private rest: RestService) {
    rest.getAll('/category').subscribe(categories => console.log(categories));
  }
  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories;

  constructor(private rest: RestService) {
    rest.getAll('/category').subscribe(categories => {
      this.categories = categories;
      console.log(categories);
    });
  }

  ngOnInit() {
  }

}

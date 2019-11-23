import {Injectable} from '@angular/core';
import {GeneralService} from './general.service';
import {RestService} from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private general: GeneralService,
              private rest: RestService) {

  public getCategories() {

  }
}

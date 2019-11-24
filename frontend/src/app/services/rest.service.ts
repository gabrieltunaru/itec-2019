import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GeneralService} from './general.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient,
              private general: GeneralService) {
  }

  public getAll(endpoint) {
    return this.http.get('api/' + endpoint, this.general.getHttpOptions());
  }

  public addOne(endpoint, data) {
    return this.http.post('api/' + endpoint, data, this.general.getHttpOptions());
  }

  public upload(file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post('api/general/image', formData, this.general.getHttpOptions());
  }
}

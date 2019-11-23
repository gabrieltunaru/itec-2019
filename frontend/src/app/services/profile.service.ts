import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {GeneralService} from './general.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private options;

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar,
              private generalService: GeneralService) {
    this.options = generalService.getHttpOptions();
  }

  setBuyerProfile(profile) {
    this.http.post('/api/profile/', profile, this.options)
      .subscribe(res => {
          console.log('asd');
        },
        error => {
          console.error(error);
          this.snackBar.open(this.generalService.formatError(error.error));
        });
  }

  getBuyerProfile() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/profile', this.options)
        .subscribe(res => {
          resolve(res);
        }, error => {
          console.error(error);
          this.snackBar.open(this.generalService.formatError(error.error));
          reject(error);
        });
    });
  }
}

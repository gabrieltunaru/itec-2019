import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {GeneralService} from './general.service';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private user;

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar,
              private generalService: GeneralService,
              private authService: AuthService) {
    authService.getCurrentUser().then(user => this.user = user).catch(err => console.log(err));
  }

  setBuyerProfile(profile, type) {
    this.http.post('/api/profile/' + type, profile, this.generalService.getHttpOptions())
      .subscribe(res => {
          console.log('asd');
        },
        error => {
          console.error(error);
          this.snackBar.open(this.generalService.formatError(error.error));
        });
  }

  getBuyerProfile(type) {
    return new Promise((resolve, reject) => {
      this.http.get('/api/profile/' + type, this.generalService.getHttpOptions())
        .subscribe(res => {
          resolve(res);
        }, error => {
          console.error(error);
          this.snackBar.open(this.generalService.formatError(error.error));
          reject(error);
        });
    });
  }

  uploadBuyerPhoto(file, type) {
    const formData = new FormData();
    formData.append('file', file);
    console.log(file, formData);
    this.http.post('api/profile/' + type + '/photo', formData, this.generalService.getHttpOptions())
      .subscribe(res => {
        console.log(res);
      }, error => {
        this.generalService.resolveError(error);
      });
  }

  async getBuyerPhoto(type) {
    const profile: any = await this.getBuyerProfile(type);
    this.http.get('api/profile/' + type + '/photo/' + profile.photo, this.generalService.getHttpOptions()).subscribe(res => {
      return res;
    }, err => this.generalService.resolveError(err));
  }

}

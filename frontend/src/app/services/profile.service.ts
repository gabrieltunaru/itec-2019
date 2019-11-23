import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {GeneralService} from './general.service';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private options;
  private fileOptions;
  private user;

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar,
              private generalService: GeneralService,
              private authService: AuthService) {
    this.options = generalService.getHttpOptions();
    this.fileOptions = generalService.getFileHttpOptions();
    authService.getCurrentUser().then(user => this.user = user);
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

  uploadBuyerPhoto(file) {
    const formData = new FormData();
    formData.append('file', file);
    console.log(file, formData);
    this.http.post('api/profile/buyerPhoto', formData, this.fileOptions)
      .subscribe(res => {
        console.log(res);
      }, error => {
        this.generalService.resolveError(error);
      });
  }

  async getBuyerPhoto() {
    const profile: any = await this.getBuyerProfile();
    this.http.get('api/profile/buyerPhoto/' + profile.photo, this.options).subscribe(res => {
      return res;
    }, err => this.generalService.resolveError(err));
  }
}

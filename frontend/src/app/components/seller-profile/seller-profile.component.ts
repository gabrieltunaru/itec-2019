import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.scss']
})
export class SellerProfileComponent implements OnInit {

  public profile: any = {
    name: '',
    phone: '',
    billingAddress: '',
    deliveryAddress: '',
    type: ''
  };
  public checked;

  public photo;

  constructor(private profileService: ProfileService,
              private sanitizer: DomSanitizer,
              private cdr: ChangeDetectorRef) {
    this.updatePhoto();
  }

  ngOnInit() {
  }

  log(asd) {
    console.log(asd);
  }

  onSubmit() {
    this.profileService.setBuyerProfile(this.profile, 'seller');
    // console.log(this.profile);
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file: File = event.target.files[0];
      this.profileService.uploadBuyerPhoto(file, 'seller');
      setTimeout(this.updatePhoto, 2000);
    }
  }

  updatePhoto() {
    this.profileService.getBuyerProfile('seller').then(profile => {
      if (profile) {
        const profile2: any = profile;
        this.profile = profile2;
        if (profile2.photo) {
          this.photo = 'http://localhost:3000/api/profile/buyerPhoto/' + profile2.photo;
          this.cdr.detectChanges();
        }
      }
    });
  }

}

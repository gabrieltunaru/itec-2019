import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profile: any = {
    name: '',
    phone: '',
    billingAddress: '',
    deliveryAddress: ''
  };

  constructor(private profileService: ProfileService) {
    this.profileService.getBuyerProfile().then(profile => this.profile = profile);
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(localStorage.getItem('token'));
    this.profileService.setBuyerProfile(this.profile);
  }

}

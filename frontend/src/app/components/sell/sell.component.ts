import {Component, OnInit} from '@angular/core';
import {RestService} from '../../services/rest.service';
import {GeneralService} from '../../services/general.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  public item = {
    owner: '',
    name: '',
    per: '',
    price: 0,
    quantity: 0,
    category: '',
    photo: '',
  };
  public categories;
  public text;

  constructor(private rest: RestService,
              private general: GeneralService,
              private auth: AuthService) {
    rest.getAll('/category/sub').subscribe(categories => {
      this.categories = categories;
    });
    // @ts-ignore
    auth.getCurrentUser().then(user => this.item.owner = user._id);
  }

  ngOnInit() {
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file: File = event.target.files[0];
      this.rest.upload(file).subscribe(filedata => {
        const file2: any = filedata;
        this.item.photo = file2.data;
        this.text = file2.original;


        // this.item.photo = filename;
      }, error => this.general.resolveError(error));
    }
  }

  onSubmit() {
    this.rest.addOne('/item', this.item).subscribe(res =>
        this.general.openSnackBar('Success', 1),
      error => this.general.resolveError(error)
    );
  }

}

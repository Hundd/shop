import { Component, OnInit, Inject } from '@angular/core';
import { ConstantsService } from './../../core/constants.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  constructor(@Inject(ConstantsService) private constant: any) {
    console.log(this.constant);
  }

  ngOnInit() {}
}

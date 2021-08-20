import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations

})
export class LandingPageComponent implements OnInit {

  /**
 * Constructor
 *
 * @param {FuseConfigService} _fuseConfigService
 * @param {FormBuilder} _formBuilder
 */

  constructor(
    private _fuseConfigService: FuseConfigService,
  ) {
    // Configure the layout
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };

  }


  ngOnInit() {
  }

}

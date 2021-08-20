import { Component, ViewEncapsulation } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector: 'pricing-style-1',
    templateUrl: './style-1.component.html',
    styleUrls: ['./style-1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PricingStyle1Component {
    /**
     * Constructor
     */
    constructor(private _fuseConfigService: FuseConfigService,
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

}

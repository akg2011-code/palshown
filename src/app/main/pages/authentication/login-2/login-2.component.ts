import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'login-2',
    templateUrl: './login-2.component.html',
    styleUrls: ['./login-2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class Login2Component implements OnInit {
    loginForm: FormGroup;
    loginLoader: boolean
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private loginService: LoginService,
        private router: Router,
        private _snackBar: MatSnackBar,


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

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            companyId: "1",
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    login() {
        this.loginLoader = true
        return this.loginService.loginUser(this.loginForm.value).subscribe(res => {
            console.log('res :>> ', res);
            this.loginLoader = false
            this.router.navigateByUrl("/pages/profile");
        },
            err => {
                this._snackBar.open(err.error, "close", {
                    duration: 4000,
                });
                this.loginLoader = false
                console.log('err :>> ', err);
            })
    }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {ProfileService} from '../profile.service'

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.page.html',
    styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

    profileForm: FormGroup;

    constructor(private profileService: ProfileService,
                private router: Router) {
    }

    ngOnInit() {
       this.createProfileForm();
    }

    // Method: creates a form to fill out profile details
    createProfileForm() {
        this.profileForm = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            dob: new FormControl('', Validators.required),
            gender: new FormControl('', Validators.required),
        });
    }

    submit() {
        console.log(this.profileForm.value);
        this.profileService.setProfileInfo(this.profileForm.value);
    }
}

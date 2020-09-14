import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';
import {Profile} from '../profile';

@Component({
    selector: 'app-view-profile',
    templateUrl: './view-profile.page.html',
    styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {

    profileDetails: Profile;

    constructor(private profileService: ProfileService) {
    }

    ngOnInit() {
        this.profileService.getProfileInfo()
            .then((details: Profile) => this.profileDetails = details);
    }

}

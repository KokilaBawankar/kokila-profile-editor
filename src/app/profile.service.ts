import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

import {Profile} from './profile';


@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private storage: Storage) {
    }

    setProfileInfo(profile: Profile) {
        return this.storage.set('profileDetails', profile);
    }

    getProfileInfo(): Promise<Profile> {
        return this.storage.get('profileDetails');
    }

}

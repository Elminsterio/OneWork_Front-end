import { Component } from '@angular/core';
import { StateStoreService } from '@core/services';
import { SessionStoreService } from '@sections/session/services';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public stateSS: StateStoreService,
    public sessionSS: SessionStoreService
  ) { }

  sidenavToggle() {
    this.stateSS.userInterface.coreSidenavClosed = !this.stateSS.userInterface.coreSidenavClosed;
  }

  printState() {
    console.log('--------------- 📂 STATE 👀 ---------------');
    console.log('📱 UserInterface:');
    console.log('UserInterface data', this.stateSS.userInterface);
    console.log('UserInterace observers', this.stateSS.userInterface$['source']);
    console.log('🔐 Session:');
    console.log('Session data', this.stateSS.session);
    console.log('Session observers', this.stateSS.session$['source']);
    console.log('🧑‍💻 Users:');
    console.log('Users data', this.stateSS.users);
    console.log('Users observers', this.stateSS.users$['source']);
    console.log('💼 Offers:');
    console.log('Offers data', this.stateSS.offers);
    console.log('Offers observers', this.stateSS.offers$['source']);
  }

  bin() {
    this.stateSS.clear();
  }

  fakeLogin() {
    this.sessionSS.login({
      password: 'localadmin',
      _id: '629e6e68a3ed5db57d8768c7',
      contactData: '',
      corporationName: '',
      creationDate: '2022-06-06T21:15:20.523Z',
      descriptionCorporate: '',
      email: 'localadmin',
      international: false,
      recruiterName: '',
      recruiterSurname1: '',
      recruiterSurname2: '',
      verified: false
    });
  }

}

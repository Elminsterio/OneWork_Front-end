import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { State } from '@core/models';
import { User } from '@shared/models';
import { StateStoreService } from '@core/services';
import { SessionService } from '@sections/session/services';
import { Session, SessionApiResponse } from '@sections/session/models';

@Injectable({
  providedIn: 'root'
})
export class SessionStoreService {

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private stateStoreService: StateStoreService,
  ) { }

  registerWorker(session: Session) {
    this.sessionService.registerWorker(session).subscribe(
      (response: SessionApiResponse) => {
        if (response.ok) {
          this.stateStoreService.state.users = [
            ...this.stateStoreService.state.users,
            response.user
          ];
          
          // this.router.navigate(['session', 'profile']);
        } else {
          throw new Error(response.err.message);
        }
      },
      (error: any) => {
        throw new Error(error);
      }
    );
  }

  registerRecruiter(session: Session) {
    this.sessionService.registerRecruiter(session).subscribe(
      (response: SessionApiResponse) => {
        if (response.ok) {
          this.stateStoreService.state.users = [
            ...this.stateStoreService.state.users,
            response.user
          ];
          
          // this.router.navigate(['session', 'profile']);
        } else {
          throw new Error(response.err.message);
        }
      },
      (error: any) => {
        throw new Error(error);
      }
    );
  }

  login(session: Session) {
    this.sessionService.login(session).subscribe(
      (response: SessionApiResponse) => {
        if (!response.ok) {
          throw new Error(response.err.message);
        } else if (response.token?.length > 0) {
          this.stateStoreService.update({
            session: {
              user: response.user as User,
              token: response.token
            }
          } as State);
          
          // this.router.navigate(['session', 'profile']);
        }
      },
      (error: any) => {
        throw new Error(error);
      }
    );
  }

  updateUserProfile(session: Session) {
    this.sessionService.updateUserProfile(session).subscribe(
      (response: SessionApiResponse) => {
        if (!response.ok) {
          throw new Error(response.err.message);
        } else if (response.token?.length > 0) {
          this.stateStoreService.update({
            session: {
              user: response.user as User
            }
          } as State);
        }
      },
      (error: any) => {
        throw new Error(error);
      }
    );
  }

}

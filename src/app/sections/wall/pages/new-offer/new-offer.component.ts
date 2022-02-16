import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateStoreService } from '@core/services';
import { Offer, User } from '@shared/models';
import { OfferStoreService, UserStoreService } from '@shared/services';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.scss']
})
export class NewOfferComponent implements OnInit {

  public reactiveForm!: FormGroup;
  public isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private offerSS: OfferStoreService,
    private userSS: UserStoreService,
    public stateSS: StateStoreService
  ) { }

  ngOnInit(): void {
    if (
      (!this.stateSS.users || this.stateSS.users.length === 0)
    ) {
      this.userSS.getUsers();
    }

    this.formatReactiveForm();
  }

  formatReactiveForm() {
    this.reactiveForm = this.formBuilder.group(
      {
        salary: [''],
        title: [''],
        requirements: [''],
        abandoned: [false],
        workplaceAddress: [''],
        description: [''],
        status: [''],
        worker: null
      }
    );
  }

  submitForm() {
    this.isSubmitted = true;

    let offer: Offer = this.reactiveForm.getRawValue();

    offer = {
      ...offer,
      recruiter: this.stateSS.state.session.user,
      worker: this.stateSS.users.find(
        user => user._id === this.reactiveForm.controls.worker.value._id
      )
    };

    if (this.reactiveForm.valid) {
      this.offerSS.newOffer(offer);
    } else {
      throw new Error('Form error');
    }
  }

  getIdTrackFn = (i: number, item: any) => item._id;

}

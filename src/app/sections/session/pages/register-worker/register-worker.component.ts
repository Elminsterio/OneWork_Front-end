import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Session } from '@sections/session/models';
import { SessionStoreService } from '@sections/session/services';
@Component({
  selector: 'app-register-worker',
  templateUrl: './register-worker.component.html',
  styleUrls: ['./register-worker.component.scss']
})
export class RegisterWorkerComponent implements OnInit {

  public reactiveForm!: FormGroup;
  public isSubmitted = false;
  
  constructor(
    private sessionStoreService: SessionStoreService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formatReactiveForm();
  }

  formatReactiveForm() {
    this.reactiveForm = this.formBuilder.group(
      {
        email: [''],
        password: [''],
        name: ['']
      }
    );
  }

  submitForm() {
    this.isSubmitted = true;
    
    const session = <Session>{
      user: {
        email: this.reactiveForm.get('email')!.value,
        password: this.reactiveForm.get('password')!.value,
        name: this.reactiveForm.get('name')!.value
      }
    };

    if (this.reactiveForm.valid) {
      this.sessionStoreService.registerWorker(session);
    } else {
      throw new Error('Form error');
    }
  }

}

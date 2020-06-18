import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'fp-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  myTestForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', {
      updateOn: 'blur',
      validators: [Validators.required, Validators.email]
    })
  })
  constructor() { }

  ngOnInit(): void {
    this.myTestForm.controls.userName.statusChanges.subscribe(status => {
      if(status === 'INVALID') {
        this.myTestForm.controls.email.disable()
      } else {
        this.myTestForm.controls.email.enable()
      }
    })
  }
  submitForm() {
    if(this.myTestForm.valid) {
      setTimeout(() => {
        this.myTestForm.reset();
      }, 2000)
    }
  }

}

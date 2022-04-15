import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ssnForm: FormGroup;
  public submitted: boolean;

  constructor(private fb: FormBuilder) {
    this.ssnForm = this.fb.group({
      ssn: ['', Validators.required]
    });
    this.submitted = false;
  }

  ngOnInit(): void {
  }

  public get f(): FormGroup['controls'] {
    return this.ssnForm.controls;
  }

  public initSign(): void {

  }

}

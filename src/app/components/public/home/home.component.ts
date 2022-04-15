import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ssnForm: FormGroup;
  public submitted: boolean;
  public loading: boolean;
  public success: boolean;
  public msg: string;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.ssnForm = this.fb.group({
      ssn: ['', Validators.required]
    });
    this.submitted = false;
    this.loading = false;
    this.success = false;
    this.msg = '';
  }

  ngOnInit(): void {
  }

  public get f(): FormGroup['controls'] {
    return this.ssnForm.controls;
  }

  public initSign(): void {
    this.submitted = true;
    this.loading = true;
    if (this.ssnForm.invalid) {
      this.loading = false;
      return;
    }

    console.log(this.ssnForm.value.ssn);

    this.auth.initSign(this.ssnForm.value.ssn).subscribe({
      next: (data: any) => {
        this.success = true;
        this.msg = data['msg'];
      }, error: (err: any) => {
        this.success = false;
        this.msg = err.error.message;
      }
    })
  }

}

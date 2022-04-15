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

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.ssnForm = this.fb.group({
      ssn: ['', Validators.required]
    });
    this.submitted = false;
    this.loading = false;
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

    this.auth.initSign(this.ssnForm.value.ssn).subscribe({
      next: (data: any) => {
        console.log(data);
      }, error: (err: any) => {
        console.log(err);
      }
    })
  }

}

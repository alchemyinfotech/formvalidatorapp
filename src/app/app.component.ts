import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formvalidatorapp';
  angForm:FormGroup;
  constructor(private fb:FormBuilder)
  {
    this.angForm=this.fb.group({company:['',Validators.required]});
    this.createForm();
  }
  createForm()
  {
    this.angForm=this.fb.group({name:['',Validators.required],
    address:['',Validators.required]});
}
}
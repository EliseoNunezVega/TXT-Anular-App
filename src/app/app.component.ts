import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Eliseo Nunez Vega';
  public blogs = [];
  public form : FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group(
      {
        'inputTitle':[null, Validators.required],
        'inputText':[null, Validators.required]
      }
    )

  }

  onSubmit(){
    this.blogs = [this.form.value.inputTitle, this.form.value.inputText];
  }

}

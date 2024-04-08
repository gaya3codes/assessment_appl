import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormControlDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { pointerScalerOption } from './pointerScalerOptionModel';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-rating-scale-configuration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './rating-scale-configuration.component.html',
  styleUrl: './rating-scale-configuration.component.scss',
})
export class RatingScaleConfigurationComponent {
  pointScalerSelected: boolean = false;
  // pointScalerSelection = this.fb.group({
  //   threePointer: [''],
  //   fivePointer: [''],
  // });
  pointerScalerOptions = this.fb.group({
    name: ['', Validators.required],
    weightage: [0, Validators.required],
    color: ['', Validators.required],
  });

  pointerScalerOptionsForm = this.fb.group({
    pointerScalerOptionsArray: this.fb.array(
      [this.pointerScalerOptions],
      Validators.required
    ),
  });

  constructor(private fb: FormBuilder) {
    console.log(this.pointerScalerOptionsForm);
  }

  get pointerScalerOptionsArray(): FormArray {
    return <FormArray>this.pointerScalerOptionsForm.value;
  }

  set pointerScalerOptionsArray(value: pointerScalerOption) {
    this.pointerScalerOptionsArray.push(value);
  }
  onSubmit() {
    if (this.pointerScalerOptionsForm.valid) {
      console.log(this.pointerScalerOptionsForm.value);
      this.pointerScalerOptions;
    }
  }

  isPointScalerSelected(value: number) {
    this.pointScalerSelected = false;

    console.log(value);
    let i = 0;
    while (i < value) {
      console.log(i);
      this.pointerScalerOptionsArray.push(this.pointerScalerOptions);
      i++;
    }
    this.pointScalerSelected = true;
  }
}

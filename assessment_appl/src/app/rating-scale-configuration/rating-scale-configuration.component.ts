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
    pointerScalerOptionsArray: this.fb.array([], Validators.required),
  });

  constructor(private fb: FormBuilder) {
    console.log(this.pointerScalerOptionsForm);
  }

  get pointerScalerOptionsArray(): FormArray {
    return this.pointerScalerOptionsForm.controls[
      'pointerScalerOptionsArray'
    ] as FormArray;
  }

  onSubmit() {
    if (this.pointerScalerOptionsForm.valid) {
      console.log(this.pointerScalerOptionsForm.value);
      this.pointerScalerOptions;
    }
  }

  addpointerScalerOption() {
    const array = this.pointerScalerOptionsForm.controls
      .pointerScalerOptionsArray as FormArray;
    array.push(this.pointerScalerOptions);
    //this.pointerScalerOptionsArray.push(this.pointerScalerOptions);
    console.log(this.pointerScalerOptionsArray);
  }

  deletePointerScaleroption(pos: number) {
    const array = this.pointerScalerOptionsForm.controls
      .pointerScalerOptionsArray as FormArray;
    array.controls.splice(pos, 2);
    console.log(array);
  }

  isPointScalerSelected($event: any) {
    this.pointScalerSelected = false;

    let value = $event.value;
    console.log(value);
    if (this.pointerScalerOptionsArray.length !== 0) {
      if (value === '3') {
        this.deletePointerScaleroption(3);
      } else if (value === '5') {
        console.log(5);
        for (let i = 0; i < 2; i++) {
          console.log(i);
          this.addpointerScalerOption();
        }
      }
    }
    if (this.pointerScalerOptionsArray.length === 0) {
      let i = 0;
      while (i < value) {
        console.log(i);
        this.addpointerScalerOption();
        i++;
      }
    }

    this.pointScalerSelected = true;
  }
}

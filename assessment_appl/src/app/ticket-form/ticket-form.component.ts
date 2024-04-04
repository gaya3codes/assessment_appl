import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { SaveTicketDataService } from '../save-ticket-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.scss',
})
export class TicketFormComponent implements OnInit {
  ticketForm = this.fb.group({
    projectName: ['', Validators.required],
    assessorName: ['', Validators.required],
    startDate: ['', Validators.required],
    standard: ['', Validators.required],
    sponsorName: ['', Validators.required],
    sponsorCompany: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ticketService: SaveTicketDataService
  ) {}
  ngOnInit(): void {
    // if (this.ticketService.getTicketFormData) {
    //   this.ticketForm = this.ticketService.getTicketFormData();
    //   console.log(this.ticketForm);
    // }
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      this.ticketService.setTicketFormData(this.ticketForm.value);
      this.router.navigateByUrl('uploadFile');
    }
  }
}

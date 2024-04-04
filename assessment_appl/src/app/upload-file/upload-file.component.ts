import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss',
})
export class UploadFileComponent {}

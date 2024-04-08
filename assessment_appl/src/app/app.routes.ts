import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RatingScaleConfigurationComponent } from './rating-scale-configuration/rating-scale-configuration.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { DisplayQuestionsComponent } from './display-questions/display-questions.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
  },
  { path: 'ticketForm', component: TicketFormComponent },
  { path: 'ticketList', component: TicketListComponent },
  { path: 'uploadFile', component: UploadFileComponent },

  {
    path: 'configureRatingScale',
    component: RatingScaleConfigurationComponent,
  },
  { path: 'displayQuestions', component: DisplayQuestionsComponent },
];

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaveTicketDataService {
  ticketData!: any;
  constructor() {}

  setTicketFormData(data: any) {
    this.ticketData = data;
    console.log(this.ticketData);
  }

  getTicketFormData() {
    return this.ticketData;
  }
}

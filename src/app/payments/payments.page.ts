import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
  standalone: false
})
export class PaymentsPage implements OnInit {
  @Input() embedded = false;
  paymentUnavailableMessage =
    'Stripe is not configured for this Angular web build. Replace the old Cordova plugin flow with Stripe.js before enabling payments.';

  cardinfo: any = {
    number: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  }

  constructor() { }

  ngOnInit() {
  }

  pay() {
    window.alert(this.paymentUnavailableMessage);
  }

}

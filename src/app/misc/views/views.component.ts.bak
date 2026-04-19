import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-views',
  standalone: false,
  templateUrl: './views.html',
  styleUrl: './views.css',
})
export class Views implements OnInit {
  redirectUrl: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.redirectUrl = this.route.snapshot.queryParamMap.get('redirectUrl');
    const isSeller = !!localStorage.getItem('admin');
    const isCustomer = !!localStorage.getItem('customer');

    if (isSeller) {
      this.router.navigate(['/seller', 'products']);
      return;
    }

    if (isCustomer) {
      this.router.navigate(['/customer', 'shop']);
    }
  }
}

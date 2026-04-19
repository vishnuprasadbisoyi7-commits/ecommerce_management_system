import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

interface MenuItem {
  id: string;
  title: string;
  route?: string;
  type: 'link' | 'section';
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit, OnDestroy {
  isHidden = false;
  isVisible = false;
  @HostBinding('style.display') hostDisplay = 'none';
  expandedSections: Set<string> = new Set();
  private routerSubscription?: Subscription;
  private toggleSubscription?: Subscription;

  menuStructure: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadMenuForRole();

    const toggleHandler = () => {
      this.isHidden = !this.isHidden;
    };
    this.toggleSubscription = new Subscription();
    window.addEventListener('toggleSidebar', toggleHandler);
    this.toggleSubscription.add({ unsubscribe: () => window.removeEventListener('toggleSidebar', toggleHandler) });

    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.loadMenuForRole();
        this.updateActiveState(event.url);
      });

    this.updateActiveState(this.router.url);
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
    this.toggleSubscription?.unsubscribe();
  }

  loadMenuForRole(): void {
    const isSeller = !!localStorage.getItem('admin');
    const isCustomer = !!localStorage.getItem('customer');
    this.isVisible = isSeller || isCustomer;
    this.hostDisplay = this.isVisible ? 'block' : 'none';

    if (!this.isVisible) {
      this.menuStructure = [];
      return;
    }

    if (isSeller) {
      this.menuStructure = [
        {
          id: 'seller',
          title: 'Seller',
          type: 'section',
          children: [
            { id: 'seller-products', title: 'Products', route: '/seller/products', type: 'link' },
            { id: 'seller-upload', title: 'Add Product', route: '/seller/upload', type: 'link' }
          ]
        }
      ];
      return;
    }

    if (isCustomer) {
      this.menuStructure = [
        {
          id: 'customer',
          title: 'Customer',
          type: 'section',
          children: [
            { id: 'customer-shop', title: 'Shop', route: '/customer/shop', type: 'link' },
            { id: 'customer-cart', title: 'Cart', route: '/customer/cart', type: 'link' },
            { id: 'customer-orders', title: 'Orders', route: '/customer/orders', type: 'link' }
          ]
        }
      ];
      return;
    }

    this.menuStructure = [
      {
        id: 'explore',
        title: 'Explore',
        type: 'section',
        children: [
          { id: 'explore-shop', title: 'Shop', route: '/customer/shop', type: 'link' }
        ]
      },
      {
        id: 'auth',
        title: 'Login',
        type: 'section',
        children: [
          { id: 'auth-seller', title: 'Seller Login', route: '/seller-signup', type: 'link' },
          { id: 'auth-customer', title: 'Customer Login', route: '/customer-signup', type: 'link' }
        ]
      }
    ];
  }

  isActive(item: MenuItem): boolean {
    const currentUrl = this.router.url;
    if (item.route) {
      return currentUrl === item.route;
    }
    return false;
  }

  isExpanded(sectionId: string): boolean {
    return this.expandedSections.has(sectionId);
  }

  toggleSection(sectionId: string): void {
    if (this.expandedSections.has(sectionId)) {
      this.expandedSections.delete(sectionId);
    } else {
      this.expandedSections.add(sectionId);
    }
  }

  private updateActiveState(url: string): void {
    this.menuStructure.forEach((item) => {
      if (item.type === 'section' && item.children) {
        const shouldExpand = item.children.some(child => child.route === url);
        if (shouldExpand) {
          this.expandedSections.add(item.id);
        }
      }
    });
  }
}

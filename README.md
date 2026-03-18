# PROJECT DOCUMENTATION — E‑COMMERCE ANGULAR CLIENT

**Document Date:** March 18, 2026  
**Project Name:** E‑Commerce Angular Client  
**Backend:** Spring Boot REST API  
**Authentication:** JWT Token Based  

---

## 1. INTRODUCTION
This project is a single‑page e‑commerce frontend application built with Angular. It supports customer shopping and seller (admin) product management. The backend is a Spring Boot REST service secured with JWT tokens.

---

## 2. OBJECTIVES
1. Provide a responsive shopping experience for customers.
2. Enable sellers to manage products via a secure admin flow.
3. Maintain secure authentication using JWT.
4. Support cart, checkout, and order workflows.

---

## 3. TECHNOLOGY STACK

**Frontend:**  
- Angular (TypeScript)  
- RxJS  
- HTML/CSS  

**Backend:**  
- Spring Boot REST API  
- JWT Authentication  

**Tools:**  
- npm  
- Angular CLI  

---

## 4. SYSTEM ARCHITECTURE
The system follows a client‑server model.

**Frontend (Angular):**  
- Feature modules: Customer, Seller, Signup  
- Services for API communication  
- Guards for route protection  
- Local storage for session state  

**Backend (Spring Boot):**  
- REST API endpoints  
- JWT issuing and validation  
- Product, cart, and order management  

---

## 5. MODULES IN THE PROJECT
1. **Customer Module**  
   - Product browsing  
   - Search  
   - Cart  
   - Checkout  
   - Orders  

2. **Seller Module**  
   - Product listing  
   - Product add/update/delete  

3. **Signup Module**  
   - Customer login/signup  
   - Seller login/signup  

4. **Shared**  
   - Header navigation  
   - Auth guards  
   - API services  

---

## 6. FUNCTIONAL REQUIREMENTS

**Customer Requirements**  
1. Register and login as customer.  
2. Browse and search products.  
3. View product details.  
4. Add/remove items in cart.  
5. Checkout with address details.  
6. Place orders.  
7. View and cancel orders.  

**Seller (Admin) Requirements**  
1. Register and login as seller.  
2. Add new products.  
3. Update existing products.  
4. Delete products.  
5. View all products.  

**System Requirements**  
1. Show different menus for customer and seller.  
2. Protect routes with guards.  
3. Store JWT securely and attach to API calls.  
4. Support guest cart and sync on login.  

---

## 7. NON‑FUNCTIONAL REQUIREMENTS
1. **Security:** JWT tokens for authentication.  
2. **Performance:** Fast page load and API responses.  
3. **Reliability:** Orders and carts should not lose data.  
4. **Usability:** Clear navigation for customer and seller.  
5. **Maintainability:** Modular code structure.  
6. **Scalability:** Future support for categories, filters, and analytics.  

---

## 8. DATABASE / DATA MODELS (FRONTEND VIEW)
- Signup/User  
- Product  
- Cart  
- Order  
- Price Summary  

These are defined in `src/app/models/dataTypes.ts`.

---

## 9. CURRENT FEATURES (IMPLEMENTED)
- Customer signup/login  
- Seller signup/login  
- Product listing  
- Product details  
- Cart operations  
- Checkout with address form  
- Order creation and history  
- Product CRUD for sellers  

---

## 10. BACKEND INTEGRATION (SPRING BOOT + JWT)
1. JWT token is returned on login.  
2. Token is stored in local storage.  
3. Token is sent in `Authorization: Bearer <token>` header.  
4. Protected routes require authentication.  

---

## 11. LIMITATIONS / GAPS
1. Mixed API base URLs across services.  
2. No payment gateway integration.  
3. No pagination or filters.  
4. No product reviews/ratings.  
5. Minimal error handling.  
6. No central HTTP interceptor.  

---

## 12. FUTURE ENHANCEMENTS (REAL‑WORLD FEATURES)

**Shopping Features**  
1. Categories and collections  
2. Sorting and filtering  
3. Wishlists  
4. Discount coupons  
5. Product reviews and ratings  
6. Inventory tracking  

**Seller Features**  
1. Seller dashboard  
2. Bulk upload  
3. Product image uploads  
4. Order management  

**System Improvements**  
1. HTTP interceptor for JWT  
2. Better error handling  
3. Role‑based access control  
4. Unit and e2e tests  

---

## 13. RECOMMENDED NEW COMPONENTS
1. Dresses Collection  
2. Watches Collection  
3. Sports Collection  
4. Category Landing Pages  
5. Deals and Promotions  
6. Brand Pages  

---

## 14. CONCLUSION
The application provides a working e‑commerce flow for both customers and sellers with Spring Boot + JWT secured API. It is a solid foundation for a real‑world application and can be extended with category pages, advanced search, payment gateways, and richer seller tools.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PeopleComponent } from 'src/app/pages/people/people.component';
import { ProductComponent } from 'src/app/pages/product/product.component';
import { IncomeAndExpensesComponent } from 'src/app/pages/income-and-expenses/income-and-expenses.component';
import { BuyAndSellComponent } from 'src/app/pages/buy-and-sell/buy-and-sell.component';
import { SupportComponent } from 'src/app/pages/support/support.component';
import { PersianDatePipe } from 'src/app/pipes/persian-date.pipe';
import { NewFactorComponent } from 'src/app/pages/new-factor/new-factor.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CreditCardDirective } from 'src/app/directive/credit-card.directive';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    PeopleComponent,
    ProductComponent,
    NewFactorComponent,
    IncomeAndExpensesComponent,
    BuyAndSellComponent,
    SupportComponent,
    PersianDatePipe,
    CreditCardDirective
  ]
})

export class AdminLayoutModule {}

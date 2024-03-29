import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { IncomeModel } from 'src/app/models/income.model';
import { ProductModel } from 'src/app/models/product.model';
import { SupportModel } from 'src/app/models/support.model';
import { AuthService } from 'src/app/services/auth.service';
import { BillService } from 'src/app/services/bill.service';
import { FinancialService } from 'src/app/services/financial.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PeopleService } from 'src/app/services/people.service';
import { ProductService } from 'src/app/services/product.service';
import { TiketService } from 'src/app/services/tiket.service';
import { GlobalContanst } from 'src/app/shared/globalContanst';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  people_size: number = 0;
  product_size: number = 0;
  factor_size: number = 0;

  totalSellYear: number = 0;
  totalBuyYear: number = 0;
  totalSellMonth: number = 0;
  totalBuyMonth: number = 0;

  productdata: ProductModel[]=[];
  tiketdata: SupportModel[] = [];
  financdata:IncomeModel[] =[];
  
  responseMessage:string;

  constructor(private _authService:AuthService ,private _financialService:FinancialService ,private _tiketService: TiketService, private notificationService:NotificationService, private _productService:ProductService , private _billService:BillService ,private _personService:PeopleService){

  }
  ngOnInit() {


    this.getPeopleSize();
    this.getProductSize();
    this.getFactorSize();

    this.tableProductData();
    this.tableTiketData();
    this.tableFinancData();


    this.getBuyTotalMonth();
    this.getBuyTotalYear();
    this.getSellTotalMonth();
    this.getSellTotalYear();

  }

  getPeopleSize(){
    var email = this._authService.getUserEmail();
    this._personService.getPeople_size(email).subscribe((res :any)=>{
      this.people_size = res?.count;
    })
  }

  getProductSize(){
    var email = this._authService.getUserEmail();
    this._productService.getProduct_size(email).subscribe((res :any)=>{
      this.product_size = res?.count;
    })
  }

  getFactorSize(){
    var email = this._authService.getUserEmail();
    this._billService.getFactor_size(email).subscribe((res :any)=>{
      this.factor_size = res?.count;
    })
  }

  getSellTotalYear(){
    var email = this._authService.getUserEmail();
    this._billService.getSellTotalYear(email).subscribe((res :any)=>{
      this.totalSellYear = res?.STotal;
    })
  }

  getBuyTotalYear(){
    var email = this._authService.getUserEmail();
    this._billService.getBuyTotalYear(email).subscribe((res :any)=>{
      this.totalBuyYear = res?.STotal;
    })
  }

  getSellTotalMonth(){
    var email = this._authService.getUserEmail();
    this._billService.getSellTotalMonth(email).subscribe((res :any)=>{
      this.totalSellMonth = res?.STotal;
    })
  }
  

  getBuyTotalMonth(){
    var email = this._authService.getUserEmail();
    this._billService.getBuyTotalMonth(email).subscribe((res :any)=>{
      this.totalBuyMonth = res?.STotal;
    })
  }
  tableProductData(){
    var email = this._authService.getUserEmail();
    this._productService.getproduct(email).subscribe((res:any)=>{
      this.productdata = res;
    },(err:any)=>{
      if(err.error?.message){
        this.responseMessage = err.error?.message;
      }
      else{
        this.responseMessage = GlobalContanst.genericError;
      }
      this.notificationService.showError(this.responseMessage);
    })
  
  }

  tableTiketData(){
    var email = this._authService.getUserEmail();
    this._tiketService.gettiket(email).subscribe((res:any)=>{
      this.tiketdata = res;
      },(err:any)=>{
      if(err.error?.message){
        this.responseMessage = err.error?.message;
      }
      else{
        this.responseMessage = GlobalContanst.genericError;
      }
      this.notificationService.showError(this.responseMessage);
    })
  }


  tableFinancData(){
    var email = this._authService.getUserEmail();
    this._financialService.getfinancial(email).subscribe((res:any)=>{
      this.financdata = res;
    },(err:any)=>{
      if(err.error?.message){
        this.responseMessage = err.error?.message;
      }
      else{
        this.responseMessage = GlobalContanst.genericError;
      }
      this.notificationService.showError(this.responseMessage);
    })
  
  }
}

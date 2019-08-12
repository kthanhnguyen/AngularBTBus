import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaitapBusComponent } from './baitap-bus.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';



@NgModule({
  declarations: [BaitapBusComponent, DanhSachGheComponent, ItemGheComponent],
  exports: [BaitapBusComponent],
  imports: [
    CommonModule
  ]
})
export class BaitapBusModule { }

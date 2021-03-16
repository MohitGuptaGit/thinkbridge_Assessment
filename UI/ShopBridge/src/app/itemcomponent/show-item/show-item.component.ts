import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {

  constructor(private service:SharedService) { }
  ItemList:any=[];

  ModalTitle: string | undefined;
  ActivateAddEditItemComp:boolean=false;
  itm:any;

  ngOnInit(): void {
    this.refreshItemList();
  }

  addClick(){
    this.itm={
      ItemId:0,
      ItemName:"",
      ItemDescription:"",
      ItemPrice:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Add Item";
    this.ActivateAddEditItemComp=true;

  }

  editClick(item: any){
    this.itm=item;
    this.ModalTitle="Edit Item";
    this.ActivateAddEditItemComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteItem(item.ItemId).subscribe(data=>{
        alert(data.toString());
        this.refreshItemList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditItemComp=false;
    this.refreshItemList();
  }

  refreshItemList(){
    this.service.getItemList().subscribe(data=>{
      this.ItemList=data;
    });

}
}

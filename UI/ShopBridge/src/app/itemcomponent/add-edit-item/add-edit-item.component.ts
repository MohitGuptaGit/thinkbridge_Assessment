import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.css']
})
export class AddEditItemComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() itm:any;
  Item_Id!: string;
  Item_Name!: string;
  Item_Description!: string;
  Item_Price!: string;
  PhotoFileName!: string;
  PhotoFilePath!: string;

  ItemList:any=[];

  ngOnInit(): void {
    this.loadItemList();
  }
  loadItemList(){
    this.service.getAllItemNames().subscribe((data:any)=>{
      this.ItemList=data;

      this.Item_Id=this.itm.Item_Id;
      this.Item_Name=this.itm.Item_Name;
      this.Item_Description=this.itm.Item_Description;
      this.Item_Price=this.itm.Item_Price;
      this.PhotoFileName=this.itm.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }

  addItem(){
    var val = {Item_Id:this.Item_Id,
                Item_Name:this.Item_Name,
                Item_Description:this.Item_Description,
                Item_Price:this.Item_Price,
            PhotoFileName:this.PhotoFileName};

    this.service.addItem(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateItem(){
    var val = {Item_Id:this.Item_Id,
      Item_Name:this.Item_Name,
      Item_Description:this.Item_Description,
      Item_Price:this.Item_Price,
      PhotoFileName:this.PhotoFileName};

    this.service.updateItem(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  // uploadPhoto(event : any){
  //   var file=event.target.files[0];
  //   const formData:FormData=new FormData();
  //   formData.append('uploadedFile',file,file.name);

  //   this.service.UploadPhoto(formData).subscribe((data:any)=>{
  //     this.PhotoFileName=data.toString();
  //     this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
  //   })

  

}

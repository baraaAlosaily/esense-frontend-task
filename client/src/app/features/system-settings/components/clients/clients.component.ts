import { Component, inject } from '@angular/core';
import { ApiService } from '../../../../core/services/api/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IElement } from '../../../../interfaces';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent {
  modalTitle:string='';
  selectedElement:any;
  apiService=inject(ApiService);
  $elements=this.apiService.getElements();

  /*
  * @property nameForm
  * @type FormGroup
  * @description This property is used to create a form group
  * */
  nameForm=new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  ngOnInit(): void {
    this.$elements=this.apiService.getElements();
  }

  /*
  * @method openAddModal
  * @description This method is used to open the add modal
  * @returns void
  * */
  openAddModal() {
    this.modalTitle='إضافة الاسم';
  }

  /*
  * @method searchInputChange
  * @param $event:string
  * @description This method is used to search for an element
  * @returns void
  * */
  searchInputChange($event:string){
    if($event===''){
      this.$elements=this.apiService.getElements();
      return;
    }else{
      this.$elements=this.apiService.searchAction($event)
    }
  }

  /*
  * @method allActions
  * @param $event:any
  * @description This method is used to handle all actions
  * @returns void
  *   */
  allActions($event:any){
    switch($event.action){
      case 'edit':
        this.selectedElement=$event.data;
        this.modalTitle='تعديل على الاسم';
        this.nameForm.patchValue({
          name: this.selectedElement.name,
          description: this.selectedElement.description
        });
        break;
      case 'delete':
        this.deleteName($event.data);
        break;
      case 'save':
        this.saveEvent($event.data);
        break;
      case 'close':
        this.closeModalEvent();
        break;
    }
  }

  /*
  * @method closeModalEvent
  * @description This method is used to close the modal
  * @returns void
  * */
  closeModalEvent(){
    this.modalTitle='';
    this.selectedElement=null;
    this.nameForm.reset();
  }

  /*
  * @method saveEvent
  * @param modalTitle:string
  * @description This method is used to save the event
  * @returns void
  * */
  saveEvent(modalTitle:string){
    if(modalTitle==='إضافة الاسم'){
      this.addName();
    }else if(modalTitle==='تعديل على الاسم'){
      this.editName();
    }
  }

  /*
  * @method addName
  * @description This method is used to add a new element
  * @returns void
  * */
  addName(){
    this.nameForm.markAllAsTouched();
    if(this.nameForm.valid){
      const newElement:IElement={
        id:Math.floor(Math.random()*1000),
        name:this.nameForm.value.name as string,
        description:this.nameForm.value.description as string
      }
      this.apiService.addElement(newElement).subscribe((_element)=>{
        this.closeModalEvent();
      });
    }else{
      console.log('Form is invalid');
    }
  }

  /*
  * @method editName
  * @description This method is used to edit an element
  * @returns void
  * */
  editName(){
    this.nameForm.markAllAsTouched();
    if(this.nameForm.valid){
      const updatedElement:IElement={
        id:this.selectedElement.id as number,
        description:this.nameForm.value.description as string,
        name:this.nameForm.value.name as string,
      }
      this.apiService.updateElement(updatedElement).subscribe((element)=>{
        this.closeModalEvent();
      });
    }else{
      console.log('Form is invalid');
    }
  }

  /*
  * @method deleteName
  * @param element:IElement
  * @description This method is used to delete an element
  * @returns void
  * */
  deleteName(element:IElement){
    this.apiService.deleteElement(element.id).subscribe(()=>{
      this.$elements=this.apiService.getElements();
      this.closeModalEvent();
    });
  }


}

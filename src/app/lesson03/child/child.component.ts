import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent {
  // @Input() userName!: string;
  // @Output() changeCount = new EventEmitter<boolean>();
  // change(status: boolean): void {
  //   this.changeCount.emit(status)
  // }
  @Input('tasks')
  public taskList: { name: string, status: boolean, done: string }[];

  @Output() decrease = new EventEmitter<void>();


  public modal = false;
  public modalName!: string;
  public editStatus = false;
  public editIndex!: number;

  constructor() {
    this.taskList = []
  }

  onCheckboxChange(event: any, task: { name: string, status: boolean, done: string }) {
    task.status = event.target.checked;
    task.done = task.status ? "Done" : "In PROGRESS";
  }
  
  deleteNames(index: number): void {
    this.taskList.splice(index, 1);
    this.decrease.emit();  
  }

  editNames(index: number): void {
    console.log(this.taskList[index].name);
    this.modal = true;
    this.modalName = this.taskList[index].name
    this.editIndex = index;
    this.editStatus = true;
  }

  saveNames(): void {
    this.taskList[this.editIndex].name = this.modalName
    this.modalName = '' 
    this.modal = false;
    this.editStatus = false;
  }

}

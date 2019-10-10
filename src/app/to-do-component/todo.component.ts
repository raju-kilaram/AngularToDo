import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'to-do',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class ToDOComponent{
  
    todoItem: any = {};
    todoList: any[] = [
    {
        "title": "task1",
        "desc": "to complete task1",
        "tsp": "10/10/2015",
        "status": "C"
    },
    {
        "title": "task2",
        "desc": "to complete task2",
        "tsp": "10/10/2015",
        "status": "A"
    }
];

modalRef: NgbModalRef;

    constructor(private modalService: NgbModal){}

    markAsComplete(index){
        this.todoList[index].status = "C"
    }

    openAddTaskModal(content){
        this.modalRef = this.modalService.open(content);
    }

    addNewTask(){
        this.todoItem.tsp = new Date();
        this.todoItem.status = "A";
        this.todoList.push(this.todoItem);
        this.modalRef.close();   
    }

    removeTask(index){
        this.todoList.splice(index,1);
    }
}
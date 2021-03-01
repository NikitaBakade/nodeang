import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NodeService } from './node.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  databaseValues : any;

  open = [
    'Get to work',
    'Pick up groceries',
    'Fall asleep'
  ];

  inprogress = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
    'Go home'
  ];

  completed = [
    'Take bath',
    'Wash car',
    'hello'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    
  }

  constructor(private node:NodeService){}

  ngOnInit(){
    this.node.selectData("fetch_data").subscribe(
      (res)=>{
        // console.log(res);
        this.databaseValues = res;
      }
    )
  }
}

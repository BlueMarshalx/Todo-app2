import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TaskManageService } from '../services/task-manage.service';
import { TaskModel } from '../classes/task.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, OnInit {

  public taskModel: TaskModel;

  constructor(private _taskManageService: TaskManageService) {}
  // dataSource = new TaskDataSource(this.taskManageService);
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'status', 'date', 'manage'];

  ngOnInit() {
    this._taskManageService.loadTask(1).subscribe((taskModel: TaskModel) => {
      this.taskModel = taskModel;
    });
  }

  public onChecked(event: any): void {
    console.log(event.currentTarget.checked);
    if (event.currentTarget.checked) {
      this.taskModel.taskDate = new Date();
    } else {
      this.taskModel.taskDate = undefined;
    }
    this._taskManageService.updateTask(this.taskModel);
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
  }
}

// export class TaskDataSource extends DataSource<any> {
//   constructor(private taskManageService: TaskManageService) {
//     super();
//   }
//   connect(): Observable<TaskModel[]> {
//     return this.taskManageService.loadTask();
//   }
//   disconnect() {}
// }

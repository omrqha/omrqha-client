import TaskData from './task-data.interface';

export interface Task {
  categoryName: string;
  order: number;
  tasks: [TaskData],
}

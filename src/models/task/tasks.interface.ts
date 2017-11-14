import Task from './task.interface';
import Category from './category.interface';
export interface Tasks {
  tasks: [Task];
  tasksCategories: [Category]
}

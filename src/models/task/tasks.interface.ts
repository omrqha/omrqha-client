
export interface Task {
  categoryName: string;
  order: number;
  tasks: [{
    taskName: string,
    selected: boolean,
    order: number
  }]
}


export interface Category {
  key: string;
  value: string;
}

export interface Tasks {
  tasks: [Task];
  tasksCategories: [Category]
}

import { Action } from 'redux';
import { CounterActions } from './app.actions';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

export interface toDoAppState {
  tasksDone: number[];
  tasks: Array<task>;
  categoryList: Array<category>;
};

export interface task {
  title: string;
  done: boolean;
  description: string;
  taskId: number;
};

export interface category {
  categoryId: string;
  categoryName: string;
  children: boolean;
  tasks: Array<task>;
  visible: boolean;
  active: boolean;
};

export const INITIAL_STATE: toDoAppState = {
  tasksDone: [0, 10],
  tasks: [],
  categoryList: [
    {
      categoryName : 'str',
      categoryId: '1',
      children: true,
      tasks: [
        {
          title : "work22222222222!",
          done : false,
          description : "1234",
          taskId: 1,
        },
        {
          title : "worrrk!",
          done : false,
          description : "",
          taskId: 2,
        },
        {
          title : "worrrk!",
          done : false,
          description : "",
          taskId: 3, 
        }
      ],
      visible : true,
      active : false,
    },
    {
      categoryName : 'str',
      categoryId: '1.1',
      children: false,
      tasks: [
        {
          title : "work1111111111111!",
          done : false,
          description : "",
          taskId: 1,
        },
        {
          title : "worrrk!",
          done : false,
          description : "",
          taskId: 2,
        }
      ],
      visible : true,
      active : false,
    },
    {
      categoryName : 'str2',
      categoryId: '2',
      children: false,
      tasks: [
        {
          title : "work1234!",
          done : false,
          description : "",
          taskId: 1,
        }
      ],
      visible : true,
      active : false,
    }
  ]
};

export function rootReducer(lastState: toDoAppState, action: Action): toDoAppState {
  switch(action.type) {
    case CounterActions.SELECTCATEGORY: 
      lastState.categoryList.forEach(elem => elem.active = false);
      let current = lastState.categoryList
        .find(elem => elem === CounterActions.category);
      current.active = true;
      lastState.tasks = current.tasks;
    return { 
      categoryList: lastState.categoryList, 
      tasks: lastState.tasks,
      tasksDone: lastState.tasksDone
    };

    case CounterActions.DELETECATEGORY:
      let IdDeletedCategory: string = CounterActions.category.categoryId;
      let newState = lastState.categoryList.filter(
        elem => !elem.categoryId.includes(IdDeletedCategory));
      let parentId = IdDeletedCategory.split('.').slice(0, -1).join('.');
      let possibleChildren = newState.filter(
        elem => elem.categoryId.includes(parentId));
      if (possibleChildren.length === 1) {
        newState.find(elem => elem.categoryId === parentId).children = false;
      }
      lastState.tasks = [];
    return { 
      categoryList: newState, 
      tasks: lastState.tasks,
      tasksDone: lastState.tasksDone
    };

    case CounterActions.RENAMECATEGORY:
      lastState.categoryList.find(elem => elem === CounterActions.category)
      .categoryName = CounterActions.newName;
    return { 
      categoryList: lastState.categoryList,
      tasks: lastState.tasks,
      tasksDone: lastState.tasksDone
    };

    case CounterActions.ADDNESTEDCATEGORY:
      let expandableСategory = lastState.categoryList
        .find(elem => elem === CounterActions.category);
      expandableСategory.children = true;
      let {newId, prevId} = createNewChildrenId(expandableСategory.categoryId, lastState.categoryList)
      let newCategory: category = {
        categoryName : CounterActions.newName,
        categoryId: newId,
        children: false,
        tasks: [],
        visible : true,
        active : false,
      }
      let prevElem = lastState.categoryList.find(elem => elem.categoryId === prevId);
      lastState.categoryList.splice(lastState.categoryList
        .indexOf(prevElem) + 1, 0, newCategory);
    return { 
      categoryList: lastState.categoryList,
      tasks: lastState.tasks,
      tasksDone: lastState.tasksDone
    };

    case CounterActions.TOGGLENESTEDCATEGORY:
    let IdToggledCategory: string = CounterActions.category.categoryId;
    let toggledState = lastState.categoryList
      .filter(elem => elem.categoryId.includes(IdToggledCategory))
      .slice(1)
      .forEach(elem => CounterActions.toggleCount % 2 === 1 ? 
          elem.visible = false 
          : elem.visible = true);
      
    return { 
      categoryList: lastState.categoryList,
      tasks: lastState.tasks,
      tasksDone: lastState.tasksDone
    };

    case CounterActions.CREATENEWCATEGORY:
      let IdforNewCategory = createNewId(lastState.categoryList);
      let createdCategory: category = {
        categoryName : CounterActions.newName,
        categoryId: IdforNewCategory,
        children: false,
        tasks: [],
        visible : true,
        active : false,
      }
      lastState.categoryList.push(createdCategory);
    return { 
      categoryList: lastState.categoryList,
      tasks: lastState.tasks,
      tasksDone: lastState.tasksDone
    };

    case CounterActions.ADDNEWTASK:
      let activeCategory = lastState.categoryList.find(elem => elem.active === true);
      
      if (activeCategory) {
        let taskId: number;
        if (activeCategory.tasks.length !== 0) {
          taskId = activeCategory.tasks[activeCategory.tasks.length - 1].taskId + 1;
        }else {
          taskId = 1;
        }
        
        let newTask: task = {
          title: CounterActions.newName,
          done: false,
          description: "",
          taskId: taskId,
        }
        activeCategory.tasks.push(newTask);
        return { 
          categoryList: lastState.categoryList,
          tasks: lastState.tasks,
          tasksDone: lastState.tasksDone
        };
      }
      alert('Select category');
    return lastState;

    case CounterActions.TOGGLECHECKBOX:
      let countTasks: number = 0;
      let doneTasks: number = 0;
      lastState.categoryList.forEach(category => category.tasks.forEach(task => {
        countTasks++;
        if(task.done === true) {
          doneTasks++;
        }
      }))
      lastState.tasksDone = [doneTasks, countTasks];      
    return { 
      categoryList: lastState.categoryList,
      tasks: lastState.tasks,
      tasksDone: lastState.tasksDone
    };

    case CounterActions.SEARCH:    
      lastState.categoryList.forEach(elem => elem.active = false);
      let showTasks = [];
      lastState.categoryList.forEach(elem => {
        elem.tasks.forEach(task => {
          if (task.title.includes(CounterActions.searchSubStr) && 
              task.done === CounterActions.searchDone) {
            showTasks.push(task);
          }
        })
      });
      lastState.tasks = showTasks;
    return { 
      categoryList: lastState.categoryList,
      tasks: lastState.tasks,
      tasksDone: lastState.tasksDone
    };

  }

  return lastState;
};



function createNewChildrenId (parentId: string, arr: Array<category>) {
  for (let index = 1;  ; index++) {
    let str = parentId + '.' + index;
    let sub = arr.filter(elem => elem.categoryId === str);
    if (!sub.length) {
      if(index === 1) {
        let result = { newId: str, prevId: parentId};
        return result;
      }
      let result = { newId: str, prevId: parentId + '.' + --index}
      return result;
    }
  }
}

function getParentId (childId) {
  let parentId = childId.split('.').slice(0, -1).join('.');
  return parentId
}

function createNewId (arr: Array<category>): string {
  if (arr.length === 0) {
    return '1';
  }
  let lastIndex = arr[arr.length-1].categoryId.split('.')[0];
  return String(+lastIndex + 1) ;
}
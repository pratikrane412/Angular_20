import { Routes } from '@angular/router';
import { AddEmployee } from './components/add-employee/add-employee';
import { ControlFLow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { EmployeeList } from './components/employee-list/employee-list';
import { AttDirective } from './components/att-directive/att-directive';
import { GetApi } from './components/get-api/get-api';
import { User } from './components/user/user';

export const routes: Routes = [
    {
        path: 'addemployee',
        component: AddEmployee
    },
    {
        path: 'controlflow',
        component: ControlFLow
    },
    {
        path: 'databinding',
        component: DataBinding
    },
    {
        path: 'employeelist',
        component: EmployeeList
    },
    {
        path: 'attdirective',
        component: AttDirective
    },
    {
        path: 'getapi',
        component: GetApi
    },
    {
        path: 'users',
        component: User
    }
];

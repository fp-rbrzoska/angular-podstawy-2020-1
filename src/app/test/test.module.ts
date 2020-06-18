import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { RouterModule, Routes } from '@angular/router';
import { TestFormComponent } from './test-form/test-form.component';

const routes: Routes = [
  { path: '', component: TestComponent },
  { path: '2', component: Test2Component }
]

@NgModule({
  declarations: [TestComponent, Test2Component, Test3Component, TestFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class TestModule { }

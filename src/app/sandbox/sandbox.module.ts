import { NgModule } from '@angular/core';
import {SandboxComponent} from './sandbox.component';
import {BrowserModule} from '@angular/platform-browser';
import {TreeService} from './tree.service';
import {TreeNodeComponent} from './tree-node/tree-node.component';


@NgModule({
  declarations: [
    SandboxComponent,
    TreeNodeComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    SandboxComponent
  ],
  providers: [
    TreeService
  ]
})
export class SandboxModule { }

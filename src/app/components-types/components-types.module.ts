import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsTypesRoutingModule } from './components-types-routing.module';
import { ComponentsTypesComponent } from './components-types.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersService } from './services/users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ComponentsTypesComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsTypesRoutingModule,

    SharedModule
  ],
  providers: [UsersService],
})
export class ComponentsTypesModule { }

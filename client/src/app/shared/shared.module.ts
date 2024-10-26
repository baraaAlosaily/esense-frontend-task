import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './components/avatar/avatar.component';
import { CardComponent } from './components/card/card.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TitleComponent } from './components/title/title.component';
import { RouterModule } from '@angular/router';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [AvatarComponent,
    CardComponent,
    CustomButtonComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    TitleComponent,
    TextInputComponent,
    NoDataFoundComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AvatarComponent,
    CardComponent,
    CustomButtonComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    TitleComponent,
    TextInputComponent,
    NoDataFoundComponent,
    ModalComponent
  ]
})
export class SharedModule { }

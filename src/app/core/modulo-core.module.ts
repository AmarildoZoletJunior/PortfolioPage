import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';



@NgModule({
  declarations: [HeaderMainComponent, HomeComponent, FooterMainComponent, ProjetosComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderMainComponent,
    HomeComponent
  ]
})
export class ModuloCoreModule { }

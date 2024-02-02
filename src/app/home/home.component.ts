import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CardsServicesComponent } from '../servicios/cards-services/cards-services.component';
import { MapComponent } from '../map/map.component';
import { BeneficiosCardsComponent } from '../beneficios-cards/beneficios-cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
  CardsServicesComponent,
  MapComponent,
  BeneficiosCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 

}




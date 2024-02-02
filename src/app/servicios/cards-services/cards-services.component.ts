import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-services.component.html',
  styleUrl: './cards-services.component.scss'
})
export class CardsServicesComponent {
  servicios = [
    {
      titulo: 'SOLUCIÓN WIFI',
      imagenUrl: 'https://i.postimg.cc/6QrkGvsh/9994b089-3050-4d69-b385-508e3c08aaeb.jpg',
    },
    {
      titulo: 'DISEÑO DE REDES',
      imagenUrl: 'https://i.postimg.cc/XqV39nxG/b73cee3c-ec39-4c90-a824-877a99f07ba8.jpg',
    },
    {
      titulo: 'SEGURIDAD Y VIGILANCIA',
      imagenUrl: 'https://i.postimg.cc/wjvfCj9V/9641adfa-5ab0-4d85-b42d-b2ff73f731f9.jpg',
    },
    {
      titulo: 'FORMULACION,DESARROLLO Y ADMINISTRACION DE PROYECTOS TIC',
      imagenUrl: 'https://i.postimg.cc/x8GdrNwp/proyecto-explicando-equipo-mujer-discutir-financiero.jpg',
    },
    {
      titulo: 'INFRAESTRUCTURA TIC',
      imagenUrl: 'https://i.postimg.cc/CxPmXkZc/2dabfbee-a82b-4b60-803b-8bf378454681.jpg',
    },
    {
      titulo: 'VIRTUALIZACION',
      imagenUrl: 'https://i.postimg.cc/0Qw6PRVz/0eda936c-2b7a-4932-a760-108429ff84fa.jpg',
    },
    {
      titulo: 'FIREWALL',
      imagenUrl: 'https://i.postimg.cc/3wsKYy4T/6f112ef6-c64a-45ac-b9f3-90e059fd44b5.jpg',
    },
    {
      titulo: 'BALANCEADORES WAN',
      imagenUrl: 'https://i.postimg.cc/TYmGJjwv/hombre-conectando-cable-ethernet-enrutador-inalambrico.jpg',
    },
  ];
}

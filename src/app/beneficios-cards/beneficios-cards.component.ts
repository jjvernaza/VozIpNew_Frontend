import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beneficios-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beneficios-cards.component.html',
  styleUrl: './beneficios-cards.component.scss'
})
export class BeneficiosCardsComponent {
  beneficios = [
    {
      titulo: 'CONECTIVIDAD PTP Y PMTP',
      descripcion: 'Conectar uno o más puntos remotos (nodos) con un punto central (base). Permite conexiones de larga distancia. Incluye montaje de infraestructura, instalación de antenas,  radioenlaces a nivel local y metropilitanos con distancias hasta de 100KM.',
    },
    {
      titulo: 'NETWORKING',
      descripcion: 'VozIpCompany posee una vasta experiencia en la implementación de infraestructuras de redes, ya sea LAN o WAN, tanto estructuradas por cables como de forma inalámbrica. Esto nos capacita para ofrecer las soluciones más adecuadas a las necesidades de tu empresa en términos de comunicación, disponibilidad, y seguridad para un óptimo manejo de datos. Contamos con la experiencia necesaria para garantizar la eficiente gestión de la infraestructura de tu empresa.',
    },
    {
      titulo: 'FORMULACION, DESARROLLO Y ADMINISTRACION DE PROYECTOS TIC',
      descripcion: 'VozIpCompany ofrece a sus clientes un paquete integral mediante un portafolio de servicios tecnológicos. Esto abarca el diseño, instalación, pruebas, puesta en marcha, operación y mantenimiento, incluyendo servicios asociados, infraestructura y administración de proyectos TIC.',
    },
  ];
}

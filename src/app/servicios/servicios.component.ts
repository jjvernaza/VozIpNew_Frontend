import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {
  servicios = [
    {
      titulo: 'SOLUCIÓN WIFI',
      descripcion: 'Diseño, configuración, instalación,funcionamiento y mantenimiento de todos los elementos físicos y virtuales necesarios para conectar entre sí los dispositivos generadores y receptores.',
      imagenUrl: 'https://i.postimg.cc/6QrkGvsh/9994b089-3050-4d69-b385-508e3c08aaeb.jpg',
    },
    {
      titulo: 'DISEÑO DE REDES',
      descripcion: 'Durante la fase inicial de planificación de un proyecto de redes, se lleva a cabo el proceso de establecer los fundamentos. Este enfoque asiste en la identificación de las restricciones del proyecto, a la par que considera los diversos desafíos que pueden surgir durante la ejecución e implementación.',
      imagenUrl: 'https://i.postimg.cc/XqV39nxG/b73cee3c-ec39-4c90-a824-877a99f07ba8.jpg',
    },
    {
      titulo: 'SEGURIDAD Y VIGILANCIA',
      descripcion: 'Es una tecnología de observación visual que fusiona las ventajas analógicas de los sistemas tradicionales de CCTV (Circuito Cerrado de Televisión) con los beneficios digitales de las redes de comunicación IP. Esto posibilita la supervisión de imágenes y audio de manera local y/o remota, además de facilitar el procesamiento digital de las imágenes. VozIpCompany se especializa en ofrecer soluciones innovadoras en este ámbito.',
      imagenUrl: 'https://i.postimg.cc/wjvfCj9V/9641adfa-5ab0-4d85-b42d-b2ff73f731f9.jpg',
    },
    {
      titulo: 'FORMULACION,DESARROLLO Y ADMINISTRACION DE PROYECTOS TIC',
      descripcion: 'VozIpCompany se destaca en la formulación, desarrollo y administración de proyectos TIC. Nuestra experiencia se refleja en la capacidad para concebir, implementar y gestionar proyectos tecnológicos de manera eficiente, garantizando soluciones innovadoras y adaptadas a las necesidades específicas de nuestros clientes.',
      imagenUrl: 'https://i.postimg.cc/x8GdrNwp/proyecto-explicando-equipo-mujer-discutir-financiero.jpg',
    },
    {
      titulo: 'INFRAESTRUCTURA TIC',
      descripcion: 'Proveemos e instalamos torres autoportantes y reforzadas, estaciones de transmisión (cuatro equipos, respaldo de energía, cerramientos, sistemas de puesta a tierra), sistemas de videovigilancia, acceso biométrico, así como también realizamos cableado estructurado y despliegue de redes de fibra óptica.',
      imagenUrl: 'https://i.postimg.cc/CxPmXkZc/2dabfbee-a82b-4b60-803b-8bf378454681.jpg',
    },
    {
      titulo: 'VIRTUALIZACION',
      descripcion: 'La virtualización es el proceso mediante el cual se crea, a través de software, una representación virtual de un recurso tecnológico, como una plataforma de hardware, un sistema operativo, un dispositivo de almacenamiento u otros elementos de red. ',
      imagenUrl: 'https://i.postimg.cc/0Qw6PRVz/0eda936c-2b7a-4932-a760-108429ff84fa.jpg',
    },
    {
      titulo: 'FIREWALL',
      descripcion: 'Es dispositivo de seguridad para los contenidos de red que monitorea tanto el tráfico entrante como el saliente. Este dispositivo toma decisiones sobre la permisión o bloqueo de tráfico específico según un conjunto predefinido de reglas.',
      imagenUrl: 'https://i.postimg.cc/3wsKYy4T/6f112ef6-c64a-45ac-b9f3-90e059fd44b5.jpg',
    },
    {
      titulo: 'BALANCEADORES WAN',
      descripcion: 'Dispositivos que ofrecen respaldo para situaciones de contingencia y aseguran una alta disponibilidad en conexiones a Internet y redes privadas virtuales (VPN).',
      imagenUrl: 'https://i.postimg.cc/TYmGJjwv/hombre-conectando-cable-ethernet-enrutador-inalambrico.jpg',
    },
  ];
}

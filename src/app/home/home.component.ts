import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  servicios = [
    {
      titulo: 'Servicio 1',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imagenUrl: 'url_de_la_imagen_1.jpg',
    },
    {
      titulo: 'Servicio 2',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imagenUrl: 'url_de_la_imagen_2.jpg',
    },
    {
      titulo: 'Servicio 3',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imagenUrl: 'url_de_la_imagen_3.jpg',
    },
    {
      titulo: 'Servicio 4',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imagenUrl: 'url_de_la_imagen_4.jpg',
    },
  ];
  Productos = [
    {
      titulo: 'Productos 1',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imagenUrl: 'url_de_la_imagen_1.jpg',
    },
    {
      titulo: 'Productos 2',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imagenUrl: 'url_de_la_imagen_2.jpg',
    },
    {
      titulo: 'Productos 3',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imagenUrl: 'url_de_la_imagen_3.jpg',
    },
    {
      titulo: 'Productos 4',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imagenUrl: 'url_de_la_imagen_4.jpg',
    },
  ];
}




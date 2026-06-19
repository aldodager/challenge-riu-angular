import { Component } from '@angular/core';

type ContentCard = {
  id: number;
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  desktopOnly?: boolean;
};

type CarouselItem = {
  id: number;
  title: string;
  description: string;
  linkLabel: string;
  imageSrc: string;
  imageAlt: string;
};

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly hero = {
    date: 'Lorem ipsum dolor sit amet.',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    imageSrc: 'assets/images/placeholder-image.svg',
    imageAlt: 'Imagen principal del contenido'
  };

  readonly articles: ContentCard[] = [
    {
      id: 1,
      date: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
      imageSrc: 'assets/images/placeholder-image.svg',
      imageAlt: 'Imagen relacionada al artículo'
    },
    {
      id: 2,
      date: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
      imageSrc: 'assets/images/placeholder-image.svg',
      imageAlt: 'Imagen relacionada al artículo'
    },
    {
      id: 3,
      date: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
      imageSrc: 'assets/images/placeholder-image.svg',
      imageAlt: 'Imagen relacionada al artículo'
    },
    {
      id: 4,
      date: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
      imageSrc: 'assets/images/placeholder-image.svg',
      imageAlt: 'Imagen relacionada al artículo'
    },
    {
      id: 5,
      date: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
      imageSrc: 'assets/images/placeholder-image.svg',
      imageAlt: 'Imagen relacionada al artículo',
      desktopOnly: true
    },
    {
      id: 6,
      date: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
      imageSrc: 'assets/images/placeholder-image.svg',
      imageAlt: 'Imagen relacionada al artículo',
      desktopOnly: true
    }
  ];

  readonly carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      linkLabel: 'Lorem ipsum',
      imageSrc: 'assets/images/placeholder-image.svg',
      imageAlt: 'Imagen destacada'
    },
    {
      id: 2,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      linkLabel: 'Lorem ipsum',
      imageSrc: 'assets/images/placeholder-image.svg',
      imageAlt: 'Imagen destacada'
    },
    {
      id: 3,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      linkLabel: 'Lorem ipsum',
      imageSrc: 'assets/images/placeholder-image.svg',
      imageAlt: 'Imagen destacada'
    },
    {
      id: 4,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      linkLabel: 'Lorem ipsum',
      imageSrc: 'assets/images/placeholder-image.svg',
      imageAlt: 'Imagen destacada'
    }
  ];

  readonly textBlock = {
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.'
  };
}
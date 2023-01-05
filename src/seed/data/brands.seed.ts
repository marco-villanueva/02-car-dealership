import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Chevrolet',
    createdAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: 'Kia',
    createdAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: 'Nissan',
    createdAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: 'MG',
    createdAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: 'Nissan',
    createdAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: 'Volkswagen',
    createdAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: 'Kia',
    createdAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: 'Renault',
    createdAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: 'Mazda',
    createdAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: new Date().getTime()
  },
];

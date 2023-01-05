import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Onix',
  },
  {
    id: uuid(),
    brand: 'Kia',
    model: 'Rio',
  },
  {
    id: uuid(),
    brand: 'Nissan',
    model: 'Versa',
  },
  {
    id: uuid(),
    brand: 'MG',
    model: 'MG5',
  },
  {
    id: uuid(),
    brand: 'Nissan',
    model: 'Sentra',
  },
  {
    id: uuid(),
    brand: 'Volkswagen',
    model: 'Virtus',
  },
  {
    id: uuid(),
    brand: 'Kia',
    model: 'Rio Hatchback',
  },
  {
    id: uuid(),
    brand: 'Renault',
    model: 'Kwid',
  },
  {
    id: uuid(),
    brand: 'Mazda',
    model: 'Mazda2',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Yaris',
  },
];

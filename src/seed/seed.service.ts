import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED, BRANDS_SEED } from './data';

@Injectable()
export class SeedService {

  constructor(
    private readonly carService: CarsService,
    private readonly brandService: BrandsService
  ){}

  populateDB(){

    this.carService.fillCarsWithSeedData( CARS_SEED );
    this.brandService.fillBrandsWithSeedData( BRANDS_SEED );

    return 'seed executed successfully'
  }
}

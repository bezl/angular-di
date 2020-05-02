import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from './models/animal';
import { ZooService } from './services/zoo.service';
import { ZOO } from './models/zoo';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ZooModule {
  static forRoot(animals: Animal[] = []): ModuleWithProviders<ZooModule> {
    return {
      ngModule: ZooModule,
      providers: [
        ZooService,
        ...animals.map<Provider>(animal => ({
          provide: ZOO,
          multi: true,
          useValue: animal
        }))
      ]
    };
  }

  static forFeature(animals: Animal[] = []): ModuleWithProviders<ZooModule> {
    return {
      ngModule: ZooModule,
      providers: [
        ...animals.map<Provider>(animal => ({
          provide: ZOO,
          multi: true,
          useValue: animal
        }))
      ]
    };
  }
}

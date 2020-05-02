import { InjectionToken } from '@angular/core';
import { Animal } from './animal';

export const ZOO = new InjectionToken<Animal[]>('zoo.animal.list');

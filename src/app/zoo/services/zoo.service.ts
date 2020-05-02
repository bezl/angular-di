import { Injectable, Inject, Optional } from '@angular/core';
import { ZOO } from '../models/zoo';
import { Animal } from '../models/animal';

@Injectable()
export class ZooService {

  constructor(
    @Inject(ZOO) @Optional() public readonly animals: Animal[] = []
  ) { }
}

import {EventEmitter} from '@angular/core';

export class Emitters {
  static authEmitter = new EventEmitter<boolean>();
  static adminEmitter = new EventEmitter<boolean>();
  static therapistEmitter = new EventEmitter<boolean>();
}
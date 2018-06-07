import { Injectable } from '@angular/core';

export class LogService {

  randomNumber;

  constructor() {
    this.randomNumber = Math.random();
  }

}

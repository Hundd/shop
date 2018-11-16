import { InjectionToken } from '@angular/core';

export const GeneratorService = new InjectionToken<string>('GeneratorService');

export function GeneratorFactory(length: number) {
  return function() {
    return randomString(length);
  };
}

function randomChar() {
  const n = Math.floor(Math.random() * 62);

  if (n < 10) {
    return n; //1-10
  }

  if (n < 36) {
    return String.fromCharCode(n + 55); //A-Z
  }

  return String.fromCharCode(n + 61); //a-z
}

function randomString(length) {
  let result = '';

  while (result.length < length) {
    result += randomChar();
  }

  return result;
}

import {
  describe, expect,
} from '@jest/globals';
import Validator from '../characters/validator';

describe('Валидатор логина', () => {
  test('Валидация нормального логина', () => {
    const received = new Validator('sasha');
    received.validator();

    expect(received)
      .toEqual({
        name: 'sasha',
      });
  });

  test('Валидация с цифры в вначале', () => {
    const received = new Validator('1sasha');
    expect(() => { received.validator(); })
      .toThrowError(new Error('Первый символ или последний  должен быть буквой'));
  });
  test('Валидация с цифры в конце', () => {
    const received = new Validator('sasha2');
    expect(() => { received.validator(); })
      .toThrowError(new Error('Первый символ или последний  должен быть буквой'));
  });
  test('Валидация на содержание вместе 3х цифр', () => {
    const received = new Validator('sash222a');
    expect(() => { received.validator(); })
      .toThrowError(new Error('Не должен содержать вместе 3 цифры'));
  });
  test('Валидация на использование только латинские букв и символов - и _', () => {
    const received = new Validator('Сашка');
    expect(() => { received.validator(); })
      .toThrowError(new Error('Можно использовать только латинские буквы и символы - и _'));
  });
});

export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validator() {
    if (!(/^[\w-_]+$/).test(this.name)) {
      throw new Error('Можно использовать только латинские буквы и символы - и _');
    }

    if (!(/(^[^\d_].*[^\d_]$)/).test(this.name)) {
      throw new Error('Первый символ или последний  должен быть буквой');
    }

    if ((/\d\d\d/).test(this.name)) {
      throw new Error('Не должен содержать вместе 3 цифры');
    }
    return this.name;
  }
}

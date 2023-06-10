export default class ErrorRepository {
  constructor() {
    this.errors = new Map(
      [
        [400, 'Неверный запрос'],
        [403, 'Доступ запрещен'],
        [404, 'Не найден'],
      ],
    );
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Uknown error';
  }
}

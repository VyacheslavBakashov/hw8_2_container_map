import ErrorRepository from '../ErrorRepo';

test.each([
  [400, 'Неверный запрос'],
  [403, 'Доступ запрещен'],
  [404, 'Не найден'],
  [401, 'Uknown error'],
])('check errors', (obj, expected) => {
  const result = new ErrorRepository();
  expect(result.translate(obj)).toBe(expected);
});

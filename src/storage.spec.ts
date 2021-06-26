import { Cookie, setCookie } from './storage';

/*
    specification
        getter
            - [] 1-1. if access property is in cookie, returns the value
            - [] 1-2. if access property is not in cookie, returns null.
        setter
            - [] 1-1. 何かを入力したときは
            - [] 1-2. 何も入力しなかったとき
 */

describe('getter', () => {
  beforeAll(() => {
    document.cookie = 'hello=10;';
  });
  afterAll(jest.clearAllMocks);
  test('if access proptery is in cookie, returns the value', () => {
    expect(Cookie.hello).toBe('10');
  });
  test('if access proptery is not in cookie, returns null.', () => {
    expect(Cookie.hello2).toBe(null);
  });
});

describe('setter', () => {
  beforeAll(() => {
    // document.cookie = 'title=21;';
  });
  afterAll(jest.clearAllMocks);
  test('何かを入力したとき', () => {
    setCookie.title = '24';
    console.log(document.cookie);
  });
});

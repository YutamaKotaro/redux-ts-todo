import { Cookie, getArray, setCookie, asyncFnc } from './storage';

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
    document.cookie = 'title=21;';
  });
  afterAll(jest.clearAllMocks);
  test('何かを入力したとき', () => {
    setCookie.title1 = '2';
  });
  test('何も入力してないとき', () => {
    setCookie.title2 = null;
  });
  console.log(setCookie.title);
});

// Demo Test Case

//1-1 数値を入力したとき
//1-2 文字を入力したとき
//1-3 何も入力していない時
describe('demo', () => {
  beforeAll(() => {
    getArray(5);
  });
  afterAll(jest.clearAllMocks);
  test('数値を入力したとき', () => {
    getArray(7);
    console.log(getArray(7));
  });
  // test('文字を入力したとき', () => {
  //   getArray('a');
  //   console.log(getArray('a'));
  // });
  // test('何も入力していない時', () => {
  //   getArray(null);
  //   console.log(getArray(null));
  // });
});

// Demo Test Case2
// 1-1 数値を入力したとき
describe('demo2', () => {
  beforeAll(() => {
    asyncFnc(5000);
  });
  afterAll(jest.clearAllMocks);
  test('数値を入力したとき', () => {
    asyncFnc(1000);
  });
});

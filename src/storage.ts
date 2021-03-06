export function setTodo(title: string, detail: string) {
  set('title', title);
  set('detail', detail);
}

function set(keyName: string, value: string) {
  document.cookie = `${keyName}=${value}`;
}

function get(todoItem: string) {
  let cookieData = document.cookie.split('; ').find((row) => row.startsWith(`${todoItem}=`));
  if (cookieData) {
    const strCookie = JSON.stringify(cookieData)?.replace(`${todoItem}=`, '');
    const parseCookie = JSON.parse(strCookie);
    return parseCookie;
  }
  return null;
}

const target = {};
export const Cookie: Record<string, any> = new Proxy(target, {
  get: (_, props: string) => {
    return get(props);
  },
});

export const setCookie: Record<string, any> = new Proxy(target, {
  set: (_: any, props: string, value: string, receiver: string): any => {
    set(props, value);
    props = value;
    return true;
  },
});

// Demo Test Case
export function getArray(num: number) {
  let results = [];
  if (num) {
    for (let i = 1; i < 6; i++) {
      results.push(i * num);
    }
  } else {
    return null;
  }
  return results;
}
// Demo Test Case2
export const asyncFnc = (val: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val);
    }, 1000);
  });
};

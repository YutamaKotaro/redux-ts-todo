export function setTodo(title: string, detail: string) {
  set('title', title);
  set('detail', detail);
}

function set(keyName: string, value: string) {
  document.cookie = `${keyName}=${value}`;
}

export function get(todoItem: string) {
  let cookieData = document.cookie.split('; ').find((row) => row.startsWith(`${todoItem}=`));
  const strCookie = JSON.stringify(cookieData).replace(`${todoItem}=`, '');
  const parseCookie = JSON.parse(strCookie);
  console.log(cookieData);
  console.log(strCookie);
  console.log(parseCookie);
  return parseCookie;
}

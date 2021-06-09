// export function set(todo: string, title: string, detail?: string) {
//   document.cookie = `${todo}={title:${title}}`;
//   // document.cookie = `${todo}='{"title":${title}, "detail":${detail}}'`;
// }

export function set(title: string, detail?: string) {
  document.cookie = `title=${title}`;
  document.cookie = `detail=${detail}`;
}

export function get(todoItem: string) {
  let cookieData = document.cookie.split('; ').find((row) => row.startsWith(`${todoItem}=`));
  const strCookie = JSON.stringify(cookieData).replace(`${todoItem}=`, '');
  const parseCookie = JSON.parse(strCookie);
  // console.log(strCookie);
  console.log(parseCookie);
  return parseCookie;
}

// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);
// console.log(obj);

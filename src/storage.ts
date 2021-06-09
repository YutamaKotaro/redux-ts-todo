export function set(title: string, detail?: string) {
  document.cookie = `title=${title}`;
  document.cookie = `detail=${detail}`;
}

export function get(todoItem: string) {
  let cookieData = document.cookie.split('; ').find((row) => row.startsWith(`${todoItem}=`));
  const strCookie = JSON.stringify(cookieData).replace(`${todoItem}=`, '');
  const parseCookie = JSON.parse(strCookie);
  console.log(parseCookie);
  return parseCookie;
}

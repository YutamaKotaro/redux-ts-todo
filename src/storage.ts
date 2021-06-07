export function set(todo: string, title: any, detail: any) {
  document.cookie = `${todo}={${title}, ${detail}}`;
}

export function get() {
  let cookieData = document.cookie.split('; ').find((row) => row.startsWith('todo='));
  console.log(cookieData);
}

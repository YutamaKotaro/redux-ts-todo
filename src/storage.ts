export function set(todo: string, title: any, detail: any) {
  document.cookie = `${todo}={${title}, ${detail}}`;
  // document.cookie = `${detail}=${value2}`;
}

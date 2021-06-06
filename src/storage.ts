import { log } from 'util';

export function set(todo: string, title: any, detail: any) {
  document.cookie = `${todo}={${title}, ${detail}}`;
}

// export function get() {
//   const parseData = JSON.parse(document.cookie);
//   console.log(JSON.parse(document.cookie));
// }

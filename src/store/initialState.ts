interface Todo {
  id: number;
  title: string;
  detail: string;
  status: 'done' | 'undone';
}

//ユーザーが入力と言うのものは　formのstate
//入力完了　dispatch
// todos: [Todo]

//reduxのstoreの中身はシンプルにする

//initialStateはオブジェクトで定義しない。上書きされた時に機能しなくなる。関数にする
export const createInitialState = () => ({
  todos: [] as Todo[],
});

//要所要所で方宣言するのは堅実で複数人で開発しても壊れにくい。どこで何を定義しているのかわかる。importするのがだるい。
//typesファイルでまとめるとtype名が被った時に気付きやすい。同じ意味合いの方が複数。

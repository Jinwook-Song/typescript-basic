{
  type Video = {
    title: string;
    author: string;
  };

  type Animal = {
    name: string;
    age: number;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  type VideoReadOnly = Readonly<Video>;

  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "cat";

  const video: ReadOnly<VideoReadOnly> = {
    title: "title",
    author: "JW",
  };

  //   type VideoOptional = {
  //     title?: string;
  //     authour?: string;
  //   };

  //   type VideoReadOnly = {
  //     readonly title: string;
  //     readonly authour: string;
  //   };

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  const obj2: Nullable<Video> = {
    title: "string",
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}

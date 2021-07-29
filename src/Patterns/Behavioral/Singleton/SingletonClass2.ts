export class SingletonClass2 {

  static instance: SingletonClass2;
  id = Math.random();

  constructor(id: number) {
    if (SingletonClass2.instance) {
      return SingletonClass2.instance;
    }
    SingletonClass2.instance = this;

    this.id = id;
  }

  load(request: string) {
    console.log('load', request, this.id);
  }

}

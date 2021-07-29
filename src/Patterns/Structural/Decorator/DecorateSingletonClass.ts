import {SingletonClass} from "../../Creational/Singleton/SingletonClass";

export class DecorateSingletonClass implements SingletonClass {
  id: number;
  load: (request: string) => void;

  constructor(original: SingletonClass) {
    this.id = original.id;
    this.load = original.load;
  }

  reload() {
    console.log('reload');
  }
}

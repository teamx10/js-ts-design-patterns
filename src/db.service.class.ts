export class DbServiceClass {
  static instance: DbServiceClass;

  id = Math.random();

  constructor() {
    if (DbServiceClass.instance) {
      return DbServiceClass.instance;
    }
    DbServiceClass.instance = this;
  }

  load(request: string) {
    console.log('load', request, this.id);
  }
}

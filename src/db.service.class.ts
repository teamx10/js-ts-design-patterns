export class DbServiceClass {
  id = Math.random();

  load(request: string) {
    console.log('load', request, this.id);
  }
}

export const dbServiceClass = new DbServiceClass();

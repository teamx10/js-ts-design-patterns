export const SingletonObject = {
  id: Math.random(),
  load: function (request: string) {
    console.log('load', request, this.id);
  }
};

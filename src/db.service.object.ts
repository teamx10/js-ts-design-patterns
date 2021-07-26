export const DbServiceObject = Object.freeze({
    id: Math.random(),
    load: function(request: string) {
      console.log('load', request, this.id);
    }
  });

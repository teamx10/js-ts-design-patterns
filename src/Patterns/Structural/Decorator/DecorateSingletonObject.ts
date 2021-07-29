import {SingletonObject} from "../../Creational/Singleton/SingletonObject";


export const decorateSingletonObject = (original: typeof SingletonObject) => ({
  ...original,
  reload: () => console.log('reload'),
});

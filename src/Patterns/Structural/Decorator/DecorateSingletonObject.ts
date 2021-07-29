import {SingletonObject} from "../../Behavioral/Singleton/SingletonObject";


export const decorateSingletonObject = (original: typeof SingletonObject) => ({
  ...original,
  reload: () => console.log('reload'),
});

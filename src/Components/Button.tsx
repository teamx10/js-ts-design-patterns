import React, {FC} from "react";
import {dbServiceClass} from "../Patterns/Behavioral/Singleton/SingletonClass";
import {SingletonClass2} from "../Patterns/Behavioral/Singleton/SingletonClass2";
import {SingletonObject} from "../Patterns/Behavioral/Singleton/SingletonObject";
import {SingletonObject2} from "../Patterns/Behavioral/Singleton/SingletonObject2";

interface Props {
  id: number;
}

export const Button: FC<Props> = ({id}) => {
  // const load1 = () => dbServiceClass.load('load');
  // const load1 = () => new SingletonClass2(id).load('load');
  const load1 = () => {
    SingletonObject2.load('load');
  }
  return <button onClick={load1}>Load from server</button>
}

import {FC} from "react";
import {dataStream$} from "./dataStream";

export const Button1: FC = () => {
  return (
    <button onClick={() => dataStream$.next(1)}>click1</button>
  );
};

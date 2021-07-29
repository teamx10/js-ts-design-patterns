import {FC} from "react";
import {dataStream$} from "./dataStream";

export const Button2: FC = () => {
  return (
    <button onClick={() => dataStream$.next(2)}>click2</button>
  );
};

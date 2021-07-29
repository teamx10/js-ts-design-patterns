import {FC, useEffect, useState} from "react";
import {Button1} from "./Button1";
import {Button2} from "./Button2";
import {dataStream$} from "./dataStream";
import {tap} from "rxjs";

export const MainComponent: FC = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const subscription = dataStream$
      .pipe(tap((value) => {
        setData((val) => `${val}.${value}`)
      }))
      .subscribe();
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <p>{data}</p>
      <div>
        <Button1/>
        <Button2/>
      </div>
    </div>
  );
};

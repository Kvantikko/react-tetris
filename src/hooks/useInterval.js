import { useEffect, useRef } from "react";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
    //console.log('heheheh');
    //console.log(document.getElementById('Tetris'));
    //document.getElementById('Tetris').focus()
    if (document.getElementById('Tetris')) {
        document.getElementById('Tetris').focus()
    }
   
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
};

export default useInterval

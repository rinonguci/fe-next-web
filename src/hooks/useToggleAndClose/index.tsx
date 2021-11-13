import { Ref, useCallback, useEffect, useState } from "react";

const useToggleAndClose = (
  ref: React.MutableRefObject<any>,
  initialState: boolean = false
): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);

  const handleClose = useCallback((e: MouseEvent) => {
    const isFound = !ref?.current?.contains(e.target);
    if (isFound) {
      setState(false);
    }
  }, []);

  useEffect(() => {
    let { current } = ref;
    if (current) {
      document.addEventListener("mousedown", handleClose, false);
    } else {
      document.removeEventListener("mousedown", handleClose, false);
    }
  }, [state]);

  const toggle = useCallback((): void => setState((state) => !state), []);
  return [state, toggle];
};

export default useToggleAndClose;

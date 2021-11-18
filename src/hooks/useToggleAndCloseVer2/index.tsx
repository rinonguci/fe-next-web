import { RefObject, useCallback, useEffect, useState } from "react";

const useToggleAndCloseVer2 = (
  ref: RefObject<HTMLDivElement>,
  initialState: boolean = false
): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);

  const handleClose = useCallback((e: MouseEvent) => {
    const element: HTMLDivElement | null = e?.target as HTMLDivElement;

    if (ref && ref.current) {
      const isFound = !ref.current.contains(element);

      if (isFound) {
        setState(false);
      }
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

export default useToggleAndCloseVer2;

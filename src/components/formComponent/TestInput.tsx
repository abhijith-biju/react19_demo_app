import { forwardRef, useImperativeHandle, useRef } from "react";

const TestInput = forwardRef<HTMLInputElement>((_props, ref) => {
  const localRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => localRef.current as HTMLInputElement);
  return <input type="text" ref={localRef} placeholder="dummy Input" />;
});

export default TestInput;

// import { RefObject } from "react";

// const TestInput = (ref: RefObject<HTMLInputElement | null>) => {
//   return <input type="text" ref={ref} placeholder="dummy Input" />;
// };
// export default TestInput;

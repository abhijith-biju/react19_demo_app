import { forwardRef, useImperativeHandle, useRef } from "react";

const TestInput = forwardRef<HTMLInputElement>((_props, ref) => {
  const localRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => localRef.current as HTMLInputElement);
  return <input type="text" ref={localRef} placeholder="dummy Input" />;
});

export default TestInput;

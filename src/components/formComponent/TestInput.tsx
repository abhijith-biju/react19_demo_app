import { forwardRef } from "react";

const TestInput = forwardRef<HTMLInputElement>((_props, ref) => {
  return <input type="text" ref={ref} placeholder="dummy Input" />;
});

export default TestInput;

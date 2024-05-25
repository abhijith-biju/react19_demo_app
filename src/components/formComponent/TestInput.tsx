// import { forwardRef } from "react";

import { RefObject } from "react";

// const TestInput = forwardRef<HTMLInputElement>((_props, ref) => {
//   return <input type="text" ref={ref} placeholder="dummy Input" />;
// });

const TestInput = ({ ref }: { ref: RefObject<HTMLInputElement | null> }) => {
  return <input type="text" ref={ref} placeholder="dummy Input" />;
};

export default TestInput;

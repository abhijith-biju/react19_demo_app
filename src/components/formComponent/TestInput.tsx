import { RefObject } from "react";

const TestInput = ({ ref }: { ref: RefObject<HTMLInputElement | null> }) => {
  return <input type="text" ref={ref} placeholder="dummy Input" />;
};
export default TestInput;

import {
  useState,
  useRef,
  startTransition,
  useActionState,
  useOptimistic,
} from "react";
import TestInput from "./TestInput";
import "./FormComponent.styles.css";
import { useTheme } from "../../context/uttils/useThemeHook";

//  use basic startTransition
// useTrasition hook for the pending state
// change onSubmit to action on the form thus enabling us to remove startTransition
// To get the pending state back we use "useFormStatus" on a child element
// Then switch to useActionState to get the pending, aciton and error state in one go.
// then use the useOptimistic hook for optimistic rendering ,(acting same as suspense)

function FormComponent() {
  const { theme, toggleTheme } = useTheme();

  const [nameData, setNameData] = useState("");
  const [name, setName] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  const [optisticValue, setOptimisticValue] = useOptimistic(nameData);
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const updateName = async (name: string) => {
    console.log("consoling the name to be updated", name);
    try {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      const data = { success: false };
      if (!data.success) {
        throw new Error("Failed to update name.");
      }
      return null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return "error!!!";
    }
  };
  const [error, updateNameAction, isLoading] = useActionState(async () => {
    const error = await updateName(name);
    if (error) {
      return error;
    }
    startTransition(() => {
      console.log("success in submiting");
      setNameData(name);
    });
  }, null);

  return (
    <div className={theme}>
      <button className="themeToggle" onClick={toggleTheme}>
        {" "}
        Toggle Theme
      </button>

      <div className="container">
        <form
          action={() => {
            setOptimisticValue(name);
            updateNameAction();
          }}
        >
          <p>Saved name: {optisticValue}</p>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter a name"
          />
          <button type="submit">Update</button>
          {error && <p className="error">{error}</p>}
          {/* <Pending>Loading...</Pending> */}
          {isLoading && <p>Loading...</p>}
        </form>

        <p>For Ref example</p>
        <TestInput ref={inputRef} />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    </div>
  );
}
// function Pending({ children }: { children: ReactNode }) {
//   const { pending } = useFormStatus();
//   return pending && children;
// }

export default FormComponent;

import {
  useState,
  useRef,
  //  ReactNode.
} from "react";
import TestInput from "./TestInput";
import "./FormComponent.styles.css";
import { useTheme } from "../../context/uttils/useThemeHook";
// import { useFormStatus } from "react-dom";

function FormComponent() {
  const { theme, toggleTheme } = useTheme();

  const [nameData, setNameData] = useState("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const updateName = async (name: string) => {
    console.log("consoling the name to be updated", name);
    try {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      const data = { success: true };
      if (!data.success) {
        throw new Error("Failed to update name.");
      }
      error && setError(null);
      return null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return "error!!!";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const error = await updateName(name);
    setIsLoading(false);

    if (error) {
      setError(error);
      return;
    }
    console.log("success in submiting");
    setNameData(name);
  };
  return (
    <div className={theme}>
      <button className="themeToggle" onClick={toggleTheme}>
        {" "}
        Toggle Theme
      </button>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <p>Saved name: {nameData}</p>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter a name"
          />
          <button type="submit">Update</button>
          {error && <p className="error">{error}</p>}
          {/* <Pending>Loading...</Pending> */}
        </form>
        {isLoading && <p>Loading...</p>}
        <p>For Ref example</p>
        <TestInput ref={inputRef} />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    </div>
  );
}

// function Pending({children}:{children:ReactNode}){
// const {pending}= useFormStatus()
//   return pending && children;
// }

export default FormComponent;

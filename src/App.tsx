import FormComponent from './components/formComponent/FormComponent';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <h1>This is a trial on React 18</h1>
      <FormComponent />
    </ThemeProvider>
  );
}

export default App;

import { ThemeContextProvider } from './context/theme-context';
import AppRoutes from './routes';
import './App.css';

function App() {
  return (
    <ThemeContextProvider>
      <AppRoutes />
    </ThemeContextProvider>
  );
}

export default App;

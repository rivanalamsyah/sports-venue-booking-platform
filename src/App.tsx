import { ThemeProvider } from './context/ThemeContext';
import { Home } from './pages/Home';

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen transition-colors duration-300 font-sans selection:bg-green-100 selection:text-green-900 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
                <Home />
            </div>
        </ThemeProvider>
    );
}

export default App;

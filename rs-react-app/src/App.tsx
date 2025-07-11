import styles from './App.module.css';
import MainPage from './components/MainPage/MainPage';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <>
      <div className={styles.App}>
        <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
          <MainPage />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;

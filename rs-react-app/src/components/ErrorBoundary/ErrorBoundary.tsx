import { Component } from 'react';

class ErrorBoundary extends Component<{
  children: React.ReactNode;
  fallback: React.ReactNode;
}> {
  state: {
    hasError: boolean;
  } = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    console.error('Error caught in getDerivedStateFromError:', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

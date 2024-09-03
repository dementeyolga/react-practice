import { Component, ErrorInfo, ReactElement } from 'react';

interface Props {
  children?: ReactElement;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('Render error happened', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Sorry, some error happened</h2>;
    }

    return this.props.children;
  }
}

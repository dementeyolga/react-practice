import { Component, ErrorInfo, ReactElement } from 'react';
import Button from '../Button/Button';
interface Props {
  fallback: ReactElement;
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
      return (
        <div className="wrapper block">
          {this.props.fallback}
          <Button onClick={() => this.setState({ hasError: false })}>
            Recover
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

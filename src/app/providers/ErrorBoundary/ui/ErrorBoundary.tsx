import { PageError } from "@/widgets/PageError";
import React, { ErrorInfo, ReactNode, Suspense } from "react";
import { ThemeProvider } from "../../ThemeProvider";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ThemeProvider>
          <Suspense fallback="">
            <PageError />
          </Suspense>
        </ThemeProvider>
      );
    }

    return children;
  }
}

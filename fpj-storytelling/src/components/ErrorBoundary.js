import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log to console; in real apps, send to monitoring service
    // eslint-disable-next-line no-console
    console.error('3D Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-50/80 to-amber-50/80 rounded-3xl p-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🧪</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">3D Visualization Loading...</h3>
            <p className="text-gray-600">The interactive molecule will appear shortly</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

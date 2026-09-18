import { StrictMode, Component, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('NEXUS Critical System Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#07090e',
          color: '#00f0ff',
          fontFamily: 'monospace',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '600px',
            border: '1px solid #ff2a5f',
            padding: '24px',
            borderRadius: '8px',
            background: '#0d111a'
          }}>
            <h1 style={{ color: '#ff2a5f', margin: '0 0 12px 0', fontSize: '20px' }}>
              [SYSTEM ERROR // RECOVERY MODE]
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '16px' }}>
              The application encountered a runtime exception:
            </p>
            <div style={{
              background: '#000',
              padding: '12px',
              borderRadius: '4px',
              color: '#ffb000',
              fontSize: '12px',
              textAlign: 'left',
              overflowX: 'auto'
            }}>
              {this.state.error?.message || 'Unknown runtime error'}
            </div>
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: '16px',
                padding: '8px 16px',
                background: '#00f0ff',
                color: '#000',
                border: 'none',
                fontWeight: 'bold',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              RE-INITIALIZE KERNEL (RELOAD)
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RootErrorBoundary>
        <App />
      </RootErrorBoundary>
    </StrictMode>,
  );
}


import React, { useState } from 'react';
import Loader, {
  FullscreenLoader,
  ButtonLoader,
  SectionLoader,
  PageTransitionLoader
} from './Loader';
import { useLoading } from '../hooks/useLoading.jsx';
import './LoaderDemo.css';

const LoaderDemo = () => {
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const {
    isLoading,
    setButtonLoading,
    setSectionLoading,
    simulateLoading
  } = useLoading();

  const demoLoadingStates = [
    {
      title: 'Spinner Loader',
      type: 'spinner',
      message: 'Loading with spinner...'
    },
    {
      title: 'Dots Loader',
      type: 'dots',
      message: 'Loading with dots...'
    },
    {
      title: 'Pulse Loader',
      type: 'pulse',
      message: 'Loading with pulse...'
    },
    {
      title: 'Wave Loader',
      type: 'wave',
      message: 'Loading with wave...'
    }
  ];

  return (
    <div className="loader-demo">
      <div className="container">
        <h2>Loader Component Demo</h2>

        {/* Fullscreen Loader Demo */}
        <section className="demo-section">
          <h3>Fullscreen Loader</h3>
          <button
            className="demo-btn"
            onClick={() => {
              setShowFullscreen(true);
              setTimeout(() => setShowFullscreen(false), 3000);
            }}
          >
            Show Fullscreen Loader
          </button>
          {showFullscreen && <FullscreenLoader message="Demo Fullscreen Loading..." />}
        </section>

        {/* Page Transition Loader Demo */}
        <section className="demo-section">
          <h3>Page Transition Loader</h3>
          <button
            className="demo-btn"
            onClick={() => {
              setShowTransition(true);
              setTimeout(() => setShowTransition(false), 2000);
            }}
          >
            Show Page Transition
          </button>
          {showTransition && <PageTransitionLoader />}
        </section>

        {/* Inline Loaders Demo */}
        <section className="demo-section">
          <h3>Inline Loaders</h3>
          <div className="loaders-grid">
            {demoLoadingStates.map((loader, index) => (
              <div key={index} className="loader-card">
                <h4>{loader.title}</h4>
                <div className="loader-container">
                  <Loader
                    type={loader.type}
                    size="medium"
                    message={loader.message}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Size Variations Demo */}
        <section className="demo-section">
          <h3>Size Variations</h3>
          <div className="size-demo">
            <div className="size-card">
              <h4>Small</h4>
              <Loader type="spinner" size="small" message="Small loader" />
            </div>
            <div className="size-card">
              <h4>Medium</h4>
              <Loader type="spinner" size="medium" message="Medium loader" />
            </div>
            <div className="size-card">
              <h4>Large</h4>
              <Loader type="spinner" size="large" message="Large loader" />
            </div>
          </div>
        </section>

        {/* Button Loading Demo */}
        <section className="demo-section">
          <h3>Button Loading States</h3>
          <div className="button-demo">
            <button
              className="demo-btn"
              disabled={isLoading('button', 'demo-btn-1')}
              onClick={() => simulateLoading('button', 'demo-btn-1', 3000)}
            >
              {isLoading('button', 'demo-btn-1') ? (
                <>
                  <ButtonLoader />
                  Loading...
                </>
              ) : (
                'Click to Load'
              )}
            </button>

            <button
              className="demo-btn secondary"
              disabled={isLoading('button', 'demo-btn-2')}
              onClick={() => simulateLoading('button', 'demo-btn-2', 2000)}
            >
              {isLoading('button', 'demo-btn-2') ? (
                <>
                  <ButtonLoader />
                  Processing...
                </>
              ) : (
                'Process Data'
              )}
            </button>
          </div>
        </section>

        {/* Section Loading Demo */}
        <section className="demo-section">
          <h3>Section Loading</h3>
          <button
            className="demo-btn"
            onClick={() => simulateLoading('section', 'demo-section', 4000)}
          >
            Load Section Content
          </button>

          <div className="section-demo">
            {isLoading('section', 'demo-section') ? (
              <SectionLoader message="Loading section content..." />
            ) : (
              <div className="section-content">
                <h4>Section Content Loaded!</h4>
                <p>This content was loaded dynamically with a section loader.</p>
                <ul>
                  <li>✅ Modern loading animations</li>
                  <li>✅ Responsive design</li>
                  <li>✅ Accessibility support</li>
                  <li>✅ Multiple loader types</li>
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="demo-section">
          <h3>Interactive Demo</h3>
          <p>Use the controls below to test different loading scenarios:</p>

          <div className="interactive-controls">
            <button
              className="demo-btn"
              onClick={() => simulateLoading('global', null, 2000)}
            >
              Simulate Global Loading
            </button>

            <button
              className="demo-btn"
              onClick={() => {
                setSectionLoading('interactive-1', true);
                setTimeout(() => setSectionLoading('interactive-1', false), 3000);
              }}
            >
              Load Interactive Section 1
            </button>

            <button
              className="demo-btn"
              onClick={() => {
                setSectionLoading('interactive-2', true);
                setTimeout(() => setSectionLoading('interactive-2', false), 2500);
              }}
            >
              Load Interactive Section 2
            </button>
          </div>

          <div className="interactive-sections">
            <div className="interactive-section">
              {isLoading('section', 'interactive-1') ? (
                <Loader type="pulse" size="medium" message="Loading section 1..." />
              ) : (
                <div className="section-content">
                  <h4>Interactive Section 1</h4>
                  <p>Content for section 1 has been loaded.</p>
                </div>
              )}
            </div>

            <div className="interactive-section">
              {isLoading('section', 'interactive-2') ? (
                <Loader type="wave" size="medium" message="Loading section 2..." />
              ) : (
                <div className="section-content">
                  <h4>Interactive Section 2</h4>
                  <p>Content for section 2 has been loaded.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoaderDemo;
import React from 'react';
import './Loader.css';

const Loader = ({ type = 'fullscreen', size = 'medium', message = 'Loading...' }) => {
  const LoaderSpinner = () => (
    <div className="loader-spinner">
      <div className="spinner-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );

  const LoaderDots = () => (
    <div className="loader-dots">
      <div className="dot dot1"></div>
      <div className="dot dot2"></div>
      <div className="dot dot3"></div>
    </div>
  );

  const LoaderPulse = () => (
    <div className="loader-pulse">
      <div className="pulse-circle pulse1"></div>
      <div className="pulse-circle pulse2"></div>
      <div className="pulse-circle pulse3"></div>
    </div>
  );

  const LoaderWave = () => (
    <div className="loader-wave">
      <div className="wave-bar bar1"></div>
      <div className="wave-bar bar2"></div>
      <div className="wave-bar bar3"></div>
      <div className="wave-bar bar4"></div>
      <div className="wave-bar bar5"></div>
    </div>
  );

  const LoaderProgress = ({ progress = 0 }) => (
    <div className="loader-progress">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progress-text">{progress}%</div>
    </div>
  );

  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return <LoaderDots />;
      case 'pulse':
        return <LoaderPulse />;
      case 'wave':
        return <LoaderWave />;
      case 'progress':
        return <LoaderProgress />;
      case 'spinner':
      default:
        return <LoaderSpinner />;
    }
  };

  return (
    <div className={`loader ${type === 'fullscreen' ? 'loader-fullscreen' : 'loader-inline'} loader-${size}`}>
      <div className="loader-content">
        <div className="loader-animation">
          {renderLoader()}
        </div>
        {message && (
          <div className="loader-message">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Specific loader components for different use cases
export const FullscreenLoader = ({ message = 'Loading Portfolio...' }) => (
  <Loader type="fullscreen" size="large" message={message} />
);

export const ButtonLoader = () => (
  <Loader type="dots" size="small" message="" />
);

export const SectionLoader = ({ message = 'Loading content...' }) => (
  <Loader type="pulse" size="medium" message={message} />
);

export const PageTransitionLoader = () => (
  <div className="page-transition-loader">
    <div className="transition-bar"></div>
  </div>
);

export default Loader;
import React, { createContext, useContext, useState, useCallback } from 'react';

// Create Loading Context
const LoadingContext = createContext();

// Loading Provider Component
export const LoadingProvider = ({ children }) => {
  const [loadingStates, setLoadingStates] = useState({
    global: true, // Initial page load
    sections: {},
    buttons: {},
    forms: {}
  });

  // Set global loading state
  const setGlobalLoading = useCallback((isLoading) => {
    setLoadingStates(prev => ({
      ...prev,
      global: isLoading
    }));
  }, []);

  // Set section loading state
  const setSectionLoading = useCallback((sectionId, isLoading) => {
    setLoadingStates(prev => ({
      ...prev,
      sections: {
        ...prev.sections,
        [sectionId]: isLoading
      }
    }));
  }, []);

  // Set button loading state
  const setButtonLoading = useCallback((buttonId, isLoading) => {
    setLoadingStates(prev => ({
      ...prev,
      buttons: {
        ...prev.buttons,
        [buttonId]: isLoading
      }
    }));
  }, []);

  // Set form loading state
  const setFormLoading = useCallback((formId, isLoading) => {
    setLoadingStates(prev => ({
      ...prev,
      forms: {
        ...prev.forms,
        [formId]: isLoading
      }
    }));
  }, []);

  // Clear all loading states
  const clearAllLoading = useCallback(() => {
    setLoadingStates({
      global: false,
      sections: {},
      buttons: {},
      forms: {}
    });
  }, []);

  // Get loading state for specific item
  const isLoading = useCallback((type, id) => {
    switch (type) {
      case 'global':
        return loadingStates.global;
      case 'section':
        return loadingStates.sections[id] || false;
      case 'button':
        return loadingStates.buttons[id] || false;
      case 'form':
        return loadingStates.forms[id] || false;
      default:
        return false;
    }
  }, [loadingStates]);

  // Simulate loading with timeout
  const simulateLoading = useCallback((type, id, duration = 2000) => {
    if (type === 'global') {
      setGlobalLoading(true);
      setTimeout(() => setGlobalLoading(false), duration);
    } else {
      const setterMap = {
        section: setSectionLoading,
        button: setButtonLoading,
        form: setFormLoading
      };
      const setter = setterMap[type];
      if (setter) {
        setter(id, true);
        setTimeout(() => setter(id, false), duration);
      }
    }
  }, [setGlobalLoading, setSectionLoading, setButtonLoading, setFormLoading]);

  const value = {
    // States
    loadingStates,

    // Setters
    setGlobalLoading,
    setSectionLoading,
    setButtonLoading,
    setFormLoading,
    clearAllLoading,

    // Getters
    isLoading,

    // Utilities
    simulateLoading
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook to use loading context
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

// Higher-order component for sections with loading
export const withLoading = (WrappedComponent, sectionId) => {
  return function LoadingWrappedComponent(props) {
    const { isLoading, setSectionLoading } = useLoading();
    const loading = isLoading('section', sectionId);

    return (
      <WrappedComponent
        {...props}
        isLoading={loading}
        setLoading={(loading) => setSectionLoading(sectionId, loading)}
      />
    );
  };
};

// Hook for async operations with loading
export const useAsyncLoading = () => {
  const { setGlobalLoading, setButtonLoading, setFormLoading } = useLoading();

  const executeWithLoading = useCallback(async (
    asyncFunction,
    options = {}
  ) => {
    const {
      type = 'global',
      id = null,
      onStart = null,
      onSuccess = null,
      onError = null,
      onFinally = null
    } = options;

    try {
      // Set loading state
      switch (type) {
        case 'button':
          setButtonLoading(id, true);
          break;
        case 'form':
          setFormLoading(id, true);
          break;
        default:
          setGlobalLoading(true);
      }

      if (onStart) onStart();

      const result = await asyncFunction();

      if (onSuccess) onSuccess(result);
      return result;
    } catch (error) {
      if (onError) onError(error);
      throw error;
    } finally {
      // Clear loading state
      switch (type) {
        case 'button':
          setButtonLoading(id, false);
          break;
        case 'form':
          setFormLoading(id, false);
          break;
        default:
          setGlobalLoading(false);
      }

      if (onFinally) onFinally();
    }
  }, [setGlobalLoading, setButtonLoading, setFormLoading]);

  return { executeWithLoading };
};
const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-opacity-50"></div>
      </div>
    );
  };
  
  export default LoadingSpinner;
  
// src/utils/isDevice.js

const isMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    // Check for common mobile user agents
    if (/android/i.test(userAgent)) {
      return true;
    }
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return true;
    }
  
    return false;
  };
  
  export default isMobile;
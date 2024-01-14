import React, { useEffect } from 'react';

function AdsterraAd() {
  useEffect(() => {
    // Include Adsterra script dynamically
    const adsterraScript = document.createElement('script');
    adsterraScript.type = 'text/javascript';
    adsterraScript.async = true;
    adsterraScript.src = '//www.topcreativeformat.com/28dd74924a137ad8f5b89e098fec6148/invoke.js';

    // Append the script to the body
    document.body.appendChild(adsterraScript);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(adsterraScript);
    };
  }, []);

  return <div>{/* You can include additional JSX elements if needed */}</div>;
}

export default AdsterraAd;

import React from 'react'
import useAnalyticsEventTracker from './UseAnalyticsEventTracker';
function GoogleAna(category="Blog category") {
    const gaEventTracker = useAnalyticsEventTracker('Contact us');
    
  return (
    <>
    <div>
    <h3>Contact Us</h3>
     <div> 
       <a href="google.com" onClick={()=>gaEventTracker('call')}>Call Us</a>
      </div>
     <div>
       <a href="mailto:someone@example.com" onClick={()=>gaEventTracker('email')}>Write to us</a>
      </div>
  </div>
    </>
  )
}

export default GoogleAna
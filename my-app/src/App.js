import React, {useEffect, useState} from 'react';
import './SlideIn.css';

const SlideInElements = () =>
{
  const [isVisible, setIsVisible] = useState([false, false, false]);

  useEffect(() =>
  {
    const delay = 1250; // Adjust the delay between each element

    const showElement = (index) =>
    {
      setTimeout(() =>
      {
        setIsVisible((prev) =>
        {
          const newState  = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * delay);
    };

    // Trigger animations for each element
    for (let i = 0; i < 3; i++)
    {
      showElement(i);
    }
  }, []);

  return (
    <div className="top">
      <div className={`element ${isVisible[0] ? 'visible' : ''}`}>
        <h1>Apid.ai</h1>
      </div>
      <div className={`element ${isVisible[1] ? 'visible' : ''}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          culpa beatae eaque laborum. Accusantium esse vitae quos exercitationem
          suscipit, sequi harum quo sit numquam, eos ipsum sint, molestiae
          facere totam?
        </p>
      </div>
      <div className={`element ${isVisible[2] ? 'visible' : ''}`}>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default SlideInElements;
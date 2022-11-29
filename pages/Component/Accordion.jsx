import React from 'react'
import { useState } from "react";
import AccordionFunction from './AccordionFunction';

    const Accordion = () => {
    const accordionData = [{
        id: 1,
        title: '1. Industry Knowledge',
        content: `We pride ourselves on helping you find the right placement, based on our knowledge of the industry, of our Clients and our Candidates. Our consultants will put you at the forefront of their priorities, to enable you to explore the most suitable opportunities based on your individual capabilities, skillsets and career aspirations.`
      },
      {
        id:2,
        title: '2. CV Assistance',
        content: `At Magnet Recruit, we are aware that first impressions are key. That is why, we will collaborate with you to emphasise your potential and highlight to your future employer the value you can add to their organisation.`
      },
      {
        id:3,
        title: '3. Interviews Preparation',
        content: `We will always make sure that you attend an interview fully prepared and confident, in order to allow our Clients to see the best version of yourself. You will be provided with a full briefing on the position you are interviewing for, as well as the organisation’s background, expectations and Culture.`
      },
      {
        id:4,
        title: '4. Follow Ups',
        content: `A successful placement is never the end of our recruitment service, as beyond a mere job, we endeavour to build a long-term relationship with our Candidates and accompany them in their journey to professional success. We will occasionally get in touch with you to check up on your progress and overall experience within your new organisation. If you are a Contractor, we will maintain regular contact until the end of your contract and keep you up to date with new prospects and opportunities.`
      }
    ];
    
      const { title, content } = accordionData;
      const [isActive, setIsActive] = useState(false);
    
      return (
        <div className="accordion-item">
        <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <AccordionFunction  title={title} content={content} />
            ))}
          </div>
      </div>
      );
    };

export default Accordion;
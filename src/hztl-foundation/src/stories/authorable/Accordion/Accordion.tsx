/* eslint-disable  @typescript-eslint/no-explicit-any */
// Temporary adding this disabled rule until fix the types

import React, { useRef, useState } from 'react';
import './accordion.css';

const accordionItems = [
  {
    id: 1,
    header: 'Accordion #1',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    id: 2,
    header: 'Accordion #2',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    id: 3,
    header: 'Accordion #3',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    id: 4,
    header: 'Accordion #4',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
];

const AccordionItem = (props: { handleToggle: any; active: any; accordionItem: any }) => {
  const accordionContent = useRef<HTMLDivElement>(null);
  const { handleToggle, active, accordionItem } = props;
  const { header, id, text } = accordionItem;

  return (
    <div className="accordion-card">
      {/* header */}
      <div className="accordion-header">
        <div
          className={`accordion-toggle p-3 ${active === id ? 'active' : ''}`}
          onClick={() => handleToggle(id)}
          aria-expanded={`${active === id ? 'true' : 'false'}`}
          tabIndex={0}
          id={`tab-accordion-${id}`}
        >
          <h5 className="accordion-title">{header}</h5>
          <i className="fa fa-chevron-down accordion-icon"></i>
        </div>
      </div>
      {/* content */}
      <div
        ref={accordionContent}
        className={`a-collapse ${active === id ? 'show' : ''}`}
        style={
          active === id ? { height: accordionContent?.current?.scrollHeight } : { height: '0px' }
        }
      >
        <div className="accordion-body">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index: React.SetStateAction<null>) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
      {accordionItems.map((accordionItem, index) => {
        return (
          <AccordionItem
            key={index}
            active={active}
            handleToggle={handleToggle}
            accordionItem={accordionItem}
          />
        );
      })}
    </>
  );
};

export default Accordion;

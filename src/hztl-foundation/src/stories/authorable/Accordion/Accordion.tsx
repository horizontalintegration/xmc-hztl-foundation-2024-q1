/* eslint-disable  @typescript-eslint/no-explicit-any */
// Temporary adding this disabled rule until fix the types

import React, { useRef, useState } from 'react';
import './accordion.scss';

const accordionItems = [
  {
    id: 1,
    header: 'Accordion #1',
    text: `The text is thought to have been used to mockup fonts for a specimen book. The Lorem ipsum text was later popularized in the 1960s for typesetting and has evolved into a digital placeholder of choice for many graphic designers and software developers. The text is thought to have been used to mockup fonts for a specimen book. The Lorem ipsum text was later popularized in the 1960s for typesetting and has evolved into a digital placeholder of choice for many graphic designers and software developers.`,
  },
  {
    id: 2,
    header: 'Accordion #2',
    text: `The text is thought to have been used to mockup fonts for a specimen book. The Lorem ipsum text was later popularized in the 1960s for typesetting and has evolved into a digital placeholder of choice for many graphic designers and software developers.`,
  },
  {
    id: 3,
    header: 'Accordion #3',
    text: `The text is thought to have been used to mockup fonts for a specimen book. The Lorem ipsum text was later popularized in the 1960s for typesetting and has evolved into a digital placeholder of choice for many graphic designers and software developers. The text is thought to have been used to mockup fonts for a specimen book.`,
  },
  {
    id: 4,
    header: 'Accordion #4',
    text: `The text is thought to have been used to mockup fonts for a specimen book.`,
  },
];

const AccordionItem = (props: { handleToggle: any; active: any; accordionItem: any }) => {
  const accordionContent = useRef<HTMLDivElement>(null);
  const { handleToggle, active, accordionItem } = props;
  const { header, id, text } = accordionItem;

  return (
    <div className="accordion-card">
      {/* header */}
      <button className="accordion-header">
        <div
          className={`accordion-toggle p-3 ${active === id ? 'active' : ''}`}
          onClick={() => handleToggle(id)}
          aria-expanded={active === id ? true : false}
          tabIndex={0}
          id={`tab-accordion-${id}`}
        >
          <h3 className="accordion-title">{header}</h3>
          <i className="fa fa-chevron-down accordion-icon"></i>
        </div>
      </button>
      {/* content */}
      <div
        ref={accordionContent}
        className={`accordion-collapse ${active === id ? 'show' : ''}`}
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

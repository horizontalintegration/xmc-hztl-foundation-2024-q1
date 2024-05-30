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
    <div className="overflow-hidden border-t-[#2F2D2E] border-t border-solid last:mb-0 last:border-b-[#2F2D2E] last:border-b last:border-solid">
      {/* header */}
      <button
        className="w-full flex items-center cursor-pointer justify-between transition-[0.3s] p-3"
        onClick={() => handleToggle(id)}
        aria-expanded={active === id ? true : false}
        tabIndex={0}
        id={`tab-accordion-${id}`}
      >
        <h3
          className={`${
            active === id ? 'active text-[#2F2D2E] text-xl font-bold leading-[normal]' : ''
          } text-xl font-normal leading-5`}
        >
          {header}
        </h3>
        <i
          className={`${
            active === id ? 'active rotate-180 text-[#2F2D2E]' : ''
          } fa fa-chevron-down relative text-[#2F2D2E] transition-[0.35s] text-xs top-0.5`}
        ></i>
      </button>
      {/* content */}
      <div
        ref={accordionContent}
        className={`accordion-collapse relative h-0 overflow-hidden transition-[height] duration-[0.35s] ease-[ease] ${
          active === id ? 'show h-auto' : ''
        }`}
        style={
          active === id ? { height: accordionContent?.current?.scrollHeight } : { height: '0px' }
        }
      >
        <div className="flex-auto min-h-[1px] p-[24px]">
          <p className="mb-0 text-[#2F2D2E] text-lg font-normal leading-[22px] p-[16px]">{text}</p>
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

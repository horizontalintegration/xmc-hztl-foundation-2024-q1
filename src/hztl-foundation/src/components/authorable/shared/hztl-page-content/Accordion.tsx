import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type AccordionProps = ComponentProps;

export const Default = (props: AccordionProps): JSX.Element => {
  // const {
  //   expandedFirstAccordionOnPageLoad: expandedFirstAccordionOnPageLoadParam,
  //   openMultipleAccordionAtSameTime,
  // } = props?.params ?? {};
  //const expandedFirstAccordionOnPageLoad = expandedFirstAccordionOnPageLoadParam ? 0 : -1;

  //const accordionContent = useRef<HTMLDivElement>(null);
  const phKey = `accordion`;

  // Set State
  //const [activeIndexes, setActiveIndexes] = useState<number[]>([expandedFirstAccordionOnPageLoad]);

  // const handleAccordionClick = (
  //   index: number,
  //   openMultipleAccordionAtSameTime: string | undefined
  // ) => {
  //   // Check if the clicked accordion is already active
  //   const isActive = activeIndexes.includes(index);

  //   if (openMultipleAccordionAtSameTime === '1') {
  //     if (isActive) {
  //       // If it is active, remove it from the active indexes (collapse it)
  //       setActiveIndexes(activeIndexes.filter((i) => i !== index));
  //     } else {
  //       // If it's not active, add it to the active indexes
  //       setActiveIndexes([...activeIndexes, index]);
  //     }
  //   } else {
  //     if (isActive) {
  //       // If it is active, remove it from the active indexes (collapse it)
  //       setActiveIndexes([]);
  //     } else {
  //       // If it's not active, make it the only active index
  //       setActiveIndexes([index]);
  //     }
  //   }
  // };

  return (
    <div className="accordion my-8">
      <Placeholder name={phKey} rendering={props.rendering} />
    </div>
  );
};

import React from 'react';
import { DOCS } from '@/app/(docs)/layout-parts/documentation.constant';
import LeftSideLink from '@/app/(docs)/layout-parts/left-side-link';

const LeftSide = () => {
  return (
    <section className="flex flex-col gap-2 px-7">
      {DOCS.map((component) => (
        <div className="flex flex-col gap-1" key={component.groupKey}>
          <h2 className="text-lg font-extrabold">{component.groupValue}</h2>
          {component.children.map((child) => (
            <LeftSideLink href={child.url} key={child.value}>
              {child.value}
            </LeftSideLink>
          ))}
        </div>
      ))}
    </section>
  );
};

export default LeftSide;

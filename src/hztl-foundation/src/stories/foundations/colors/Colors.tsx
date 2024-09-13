// Global
import React from 'react';
import tailwind from 'tailwind-config';

// Local
import * as twConfig from '../../../../tailwind.config';

const Colors = (): JSX.Element => {
  const config = tailwind.config(twConfig.theme);

  // const colors = { ...config?.extend?.colors, ...config.theme.colors };

  const keys = Object.keys(config?.extend?.colors);
  const parsedExtendedConfig: Record<string, Record<string, number>> = {};
  const regexp = /^(.*)-([0-9]{3})$/g;

  keys.forEach((key) => {
    const matches = key.matchAll(regexp);

    for (const match of matches) {
      const [value, parent, child] = match;
      if (!parsedExtendedConfig[parent])
        parsedExtendedConfig[parent] = {} as Record<string, number>;

      parsedExtendedConfig[parent][child] = config?.extend?.colors[value];
    }
  });

  const colors = { ...parsedExtendedConfig, ...config.theme.colors };

  const renderColor = (label: string, value: string) => (
    <div key={label}>
      <div className="flex relative">
        <div>
          <div
            className="box-border h-10 min-w-[55px] rounded w-full"
            style={{ backgroundColor: value }}
          />
          <div className="flex flex-col font-mono mt-4 px-0.5 text-xs">
            <p className="w-6">{label}</p>
            <p className="dark:text-gray-light lowercase text-gray-dark">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container px-16 py-8">
      <div className="max-w-[1000px] w-full"></div>
      <h1 className="font-bold mb-6 text-4xl">Colors</h1>
      <p className="mb-6">
        This library is supported by an extensive color system that themes both styles and
        components. This enables more comprehensive customization and extension for any project.
      </p>
      {Object.entries(colors)
        .filter(([, value]) => typeof value === 'string')
        .sort()
        .map(([key, value]) => (
          <React.Fragment key={key}>
            <div className="capitalize mb-3">{key}</div>
            <div className="gap-6 grid grid-cols-5 justify-center mb-6 md:grid-cols-9" key={key}>
              {renderColor(key, value as string)}
            </div>
          </React.Fragment>
        ))}
      {Object.entries(colors)
        .filter(([, value]) => typeof value === 'object')
        // .sort()
        .map(([key, value]) => (
          <React.Fragment key={key}>
            <div className="capitalize mb-3">{key}</div>
            <div className="gap-6 grid grid-cols-5 justify-center mb-6 md:grid-cols-9">
              {Object.entries(value as object).map(([innerKey, innerValue]) =>
                typeof innerValue !== 'object'
                  ? renderColor(innerKey, innerValue)
                  : Object.entries(innerValue as object).map(([innerInnerKey, innerInnerValue]) =>
                      renderColor(`${innerKey}-${innerInnerKey}`, innerInnerValue)
                    )
              )}
            </div>
          </React.Fragment>
        ))}
    </div>
  );
};

export default Colors;

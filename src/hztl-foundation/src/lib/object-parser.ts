import { set } from 'lodash';

export const expandObj = (obj: Record<string, unknown>): Record<string, unknown> => {
  const expanded = {};

  for (const [key, value] of Object.entries(obj)) {
    set(expanded, key, value);
  }

  return expanded;
};

export const flattenObj = (
  obj: Record<string, unknown>,
  parent?: string
): Record<string, unknown> => {
  const flattened = {} as Record<string, unknown>;

  Object.keys(obj).forEach((key) => {
    const computedKey = `${parent ? parent + '.' : ''}${key}`;
    const value = obj[key];

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(flattened, flattenObj({ ...value }, computedKey));
    } else {
      flattened[computedKey] = value;
    }
  });

  return flattened;
};

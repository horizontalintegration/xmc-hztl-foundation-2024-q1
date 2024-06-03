const defaultData = {
  id: 'buttonId',
  children: 'Primary',
  icon: '',
  ariaLabel: 'ariaLabel',
  title: 'title',
  className: 'bg-[#2F2D2E] py-3 px-4 text-white rounded',
};

export const secondaryData = {
  ...defaultData,
  children: 'Secondary',
  className: 'py-3 px-4 rounded border border-[#2F2D2E]',
};

export default defaultData;

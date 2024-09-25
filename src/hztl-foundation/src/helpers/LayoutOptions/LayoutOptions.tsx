import { tv } from 'tailwind-variants';

const layoutOptions = (GridParameters: string | undefined) => {
  //seprated the classes
  const displayRegex =
    /^(md|lg|xl|2xl)?:?(block|inline|inline-block|flex|inline-flex|table|table-row|table-cell|hidden|basis-full)$/;

  const alignmentRegex =
    /^(md|lg|xl|2xl)?:?(self-(start|center|end)|ml-(0|auto)|mr-(0|auto)|mx-auto|order-(first|last))$/;

  const parsedGridParameters = GridParameters ? GridParameters.split(' ') : [];

  return tv({
    slots: {
      parent: parsedGridParameters.filter((cls) => displayRegex.test(cls)).join(' '),
      child: parsedGridParameters.filter((cls) => alignmentRegex.test(cls)).join(' '),
      all: parsedGridParameters.join(' '),
    },
  });
};

export default layoutOptions;

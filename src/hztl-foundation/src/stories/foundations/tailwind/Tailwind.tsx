// Global
import tailwind from 'tailwind-config';

// Lib
import { flattenObj } from 'lib/object-parser';

// Local
import * as twConfig from '../../../../tailwind.config';

export type TailwindProps = {
  theme: string;
};

const Tailwind = (): JSX.Element => {
  const config = tailwind.config(twConfig.theme);
  const flattenedConfig = flattenObj(config.extend);

  return (
    <div className="container px-16 py-8">
      <div className="max-w-[1000px] w-full"></div>
      <h1 className="font-bold mb-6 text-4xl">Tailwind Utilities</h1>
      <p className="mb-6">
        The project utilizes the Tailwind utility-first CSS framework. To meet the needs of the
        project, the base Tailwind configuration has been extended to include additional utilitie
        classes, which are detailed below.
      </p>
      <div className="flex flex-col flex-wrap mb-6 md:flex-row">
        <table className="border-separate border-spacing-2 w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
          <thead className="bg-slate-50 dark:bg-slate-700">
            <tr>
              <th className="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                Tailwind Config Token
              </th>
              <th className="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                Token Value
              </th>
            </tr>
          </thead>
          <tbody className="">
            {Object.entries(flattenedConfig).map(([key, value]) => (
              <tr key={key}>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                  {key}
                </td>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                  {typeof value === 'string' && value}
                  {Array.isArray(value) && value.join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1 className="font-bold mb-6 text-4xl">Usage Guidelines</h1>
      <p className="mb-6">
        Tailwind provides several methods for using arbitrary values to implement a design. Two of
        those methods are compatible with design tokens.
      </p>
      <h2 className="font-bold mb-6 text-2xl">Theme Function</h2>
      <p className="mb-6">
        Use the theme function to reference the design tokens in your tailwind.config.js file:
      </p>
      <div className="prose prose-slate dark:prose-dark mb-6">
        <pre className="language-html mb-6">
          <code className="language-html">
            {`<div class="grid grid-cols-[fit-content(theme(aspectRatio.hero))]">
    <!-- ... -->
</div>`}
          </code>
        </pre>
      </div>
      <p className="mb-6">
        When using a CSS variable as an arbitrary value, wrapping your variable in var(...) isn’t
        needed — just providing the actual variable name is enough:
      </p>
      <div className="prose prose-slate dark:prose-dark mb-6">
        <pre className="language-html mb-6">
          <code className="language-html">
            {`<div class="bg-[--aspectRatio-hero]">
  <!-- ... -->
</div>`}
          </code>
        </pre>
      </div>
      <h2 className="font-bold mb-6 text-2xl">Resolving Ambiguities</h2>
      <p className="mb-6">
        Many utilities in Tailwind share a common namespace but map to different CSS properties. For
        example text-lg and text-black both share the text- namespace, but one is for font-size and
        the other is for color.
      </p>
      <p className="mb-6">
        When using arbitrary values, Tailwind can generally handle this ambiguity automatically
        based on the value you pass in: font-[theme(body.large.fontFamily)]
        text-[length:theme(body.large.fontSize)]
      </p>
      <div className="prose prose-slate dark:prose-dark mb-6">
        <pre className="language-html mb-6">
          <code className="language-html">
            {`<!-- Will generate a font-size utility -->
<div class="text-[22px]">...</div>

<!-- Will generate a color utility -->
<div class="text-[#bada55]">...</div>`}
          </code>
        </pre>
      </div>
      <p className="mb-6">
        Sometimes it really is ambiguous though, for example when using CSS variables:
      </p>
      <div className="prose prose-slate dark:prose-dark mb-6">
        <pre className="language-html mb-6">
          <code className="language-html">{`<div class="text-[var(--my-var)]">...</div>`}</code>
        </pre>
      </div>
      <p className="mb-6">
        In these situations, you can “hint” the underlying type to Tailwind by adding a{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types"
          rel="noreferrer"
          target="_blank"
        >
          CSS data type
        </a>{' '}
        before the value:
      </p>
      <div className="prose prose-slate dark:prose-dark mb-6">
        <pre className="language-html">
          <code className="language-html">{`<!-- Will generate a font-size utility -->
<div class="text-[length:var(--my-var)]">...</div>

<!-- Will generate a color utility -->
<div class="text-[color:var(--my-var)]">...</div>`}</code>
        </pre>
      </div>
    </div>
  );
};

export default Tailwind;

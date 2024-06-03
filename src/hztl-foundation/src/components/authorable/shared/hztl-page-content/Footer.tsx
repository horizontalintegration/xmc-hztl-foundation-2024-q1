import React from 'react';
import { LinkField, Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@sitecore-feaas/clientside';
import { SiteStructure } from 'src/.generated/Feature.HztlFoundation.model';

export type FooterProps = ComponentProps & SiteStructure.Footer.Footer;

const FooterDefaultComponent = (props: FooterProps): JSX.Element => (
  <div className="component-content">
    <span className="is-empty-hint">Footer</span>
  </div>
);

export const Default = (props: FooterProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <footer>
          <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <div className="flex justify-center sm:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="58"
                    viewBox="0 0 90 58"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2206_1166)">
                      <rect width="90" height="57.2093" fill="#E2E2E2" />
                      <line
                        x1="0.187134"
                        y1="-0.294394"
                        x2="90.1871"
                        y2="56.9149"
                        stroke="#2F2D2E"
                        stroke-width="0.697674"
                      />
                      <line
                        x1="-0.187134"
                        y1="56.9148"
                        x2="89.8129"
                        y2="-0.29447"
                        stroke="#2F2D2E"
                        stroke-width="0.697674"
                      />
                    </g>
                    <rect
                      x="0.348837"
                      y="0.348837"
                      width="89.3023"
                      height="56.5116"
                      stroke="#E2E2E2"
                      stroke-width="0.697674"
                    />
                    <defs>
                      <clipPath id="clip0_2206_1166">
                        <rect width="90" height="57.2093" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
                {props.fields.footerColumns &&
                  props.fields.footerColumns.map((columnObj, columnIndex) => {
                    return (
                      <React.Fragment key={`column${columnIndex}`}>
                        {columnObj.fields &&
                          columnObj.fields.children &&
                          Array.isArray(columnObj.fields.children) &&
                          columnObj.fields.children.map((object, i) => {
                            return (
                              <div className="text-center sm:text-left" key={`label${i}`}>
                                <p className="text-lg font-medium">{object.displayName}</p>

                                <nav className="mt-8">
                                  <ul className="space-y-4 text-sm">
                                    {object.fields &&
                                      object.fields.children &&
                                      Array.isArray(object.fields.children) &&
                                      object.fields.children.map((linkObj, linkIndex) => {
                                        return (
                                          <li key={`link${linkIndex}`}>
                                            <Link field={linkObj.fields.Link as LinkField} />
                                          </li>
                                        );
                                      })}
                                  </ul>
                                </nav>
                              </div>
                            );
                          })}
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>

            <div className="pt-6 mt-12 border-t">
              <div className="text-center sm:flex sm:justify-between sm:text-left">
                <ul className="flex justify-center gap-6 md:gap-8 sm:justify-start">
                  <li>
                    <a href="/" rel="noopener noreferrer" target="_blank" className="transition">
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="/" rel="noopener noreferrer" target="_blank" className="transition">
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="/" rel="noopener noreferrer" target="_blank" className="transition">
                      <span className="sr-only">Pinterest</span>
                      <svg className="w-6 h-6" version="1.1" viewBox="0 0 24 24">
                        <g>
                          <g>
                            <path
                              d="M23.189,11.595c0,6.403-5.188,11.594-11.591,11.594c-1.641,0-3.204-0.34-4.62-0.959l0.023-11.574
			c0,0-0.051-0.446,0.202-1.259c1.256-2.844,3.292-2.779,3.292-2.779c1.027-0.231,2.588,0.033,2.588,0.033
			c3.156,0.832,3.491,3.721,3.491,3.721c0.165,0.635,0,1.494,0,1.494c-0.233,3.086-3.69,3.525-3.69,3.525l-2.223,0.065
			c-0.931,0.664-0.765,1.36-0.765,1.36c-0.033,1.035,0.765,1.265,0.765,1.265c1.205,0.438,3.255-0.034,3.255-0.034
			c4.849-0.729,5.448-6.015,5.448-6.015l0.123-1.178l-0.123-1.246c-1.096-4.552-5.846-5.781-5.846-5.781s-2.512-0.393-3.759,0
			C6.025,4.81,4.783,7.79,4.402,9.166c-0.121,0.435-0.155,1.464-0.155,1.588c0,1.423,0,6.117,0,9.807
			C1.655,18.436,0,15.209,0,11.594C0,5.191,5.19,0,11.596,0C18,0.001,23.189,5.192,23.189,11.595z"
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="/" rel="noopener noreferrer" target="_blank" className="transition">
                      <span className="sr-only">Tiktok</span>
                      <svg className="w-6 h-6" version="1.1" viewBox="0 0 24 24">
                        <path
                          d="M16.8218 5.1344C16.0887 4.29394 15.648 3.19805 15.648 2H14.7293C14.9659 3.3095 15.7454 4.43326 16.8218 5.1344Z"
                          fill="#000000"
                        />
                        <path
                          d="M8.3218 11.9048C6.73038 11.9048 5.43591 13.2004 5.43591 14.7931C5.43591 15.903 6.06691 16.8688 6.98556 17.3517C6.64223 16.8781 6.43808 16.2977 6.43808 15.6661C6.43808 14.0734 7.73255 12.7778 9.324 12.7778C9.62093 12.7778 9.90856 12.8288 10.1777 12.9124V9.40192C9.89927 9.36473 9.61628 9.34149 9.324 9.34149C9.27294 9.34149 9.22654 9.34614 9.1755 9.34614V12.0394C8.90176 11.9558 8.61873 11.9048 8.3218 11.9048Z"
                          fill="#000000"
                        />
                        <path
                          d="M19.4245 6.67608V9.34614C17.6429 9.34614 15.9912 8.77501 14.6456 7.80911V14.7977C14.6456 18.2851 11.8108 21.127 8.32172 21.127C6.97621 21.127 5.7235 20.6998 4.69812 19.98C5.8534 21.2198 7.50049 22 9.32392 22C12.8083 22 15.6478 19.1627 15.6478 15.6707V8.68211C16.9933 9.64801 18.645 10.2191 20.4267 10.2191V6.78293C20.0787 6.78293 19.7446 6.74574 19.4245 6.67608Z"
                          fill="#000000"
                        />
                        <path
                          d="M14.6456 14.7977V7.80911C15.9912 8.77501 17.6429 9.34614 19.4245 9.34614V6.67608C18.3945 6.45788 17.4899 5.90063 16.8218 5.1344C15.7454 4.43326 14.9704 3.3095 14.7245 2H12.2098L12.2051 15.7775C12.1495 17.3192 10.8782 18.5591 9.32393 18.5591C8.35884 18.5591 7.50977 18.0808 6.98085 17.3564C6.06219 16.8688 5.4312 15.9076 5.4312 14.7977C5.4312 13.205 6.72567 11.9094 8.31708 11.9094C8.61402 11.9094 8.90168 11.9605 9.17079 12.0441V9.35079C5.75598 9.42509 3 12.2298 3 15.6707C3 17.3331 3.64492 18.847 4.69812 19.98C5.7235 20.6998 6.97621 21.127 8.32172 21.127C11.8061 21.127 14.6456 18.2851 14.6456 14.7977Z"
                          fill="#000000"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="/" rel="noopener noreferrer" target="_blank" className=" transition">
                      <span className="sr-only">Youtube</span>
                      <svg className="w-6 h-6" version="1.1" viewBox="0 0 24 24">
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g transform="translate(-300.000000, -7442.000000)" fill="#000000">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                              <path
                                d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                                id="youtube-[#168]"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
                <div className="text-sm text-center">
                  <span className="block sm:inline">Copyright lorem ipsum</span>
                  <ul className="flex justify-center gap-4 sm:justify-start">
                    <li>
                      <a>Legal Link</a>
                    </li>
                    <li className="inline-block h-[20px] min-h-[1em] w-0.5 self-stretch bg-black"></li>
                    <li>
                      <a>Legal Link</a>
                    </li>
                    <li className="inline-block h-[20px] min-h-[1em] w-0.5 self-stretch bg-black"></li>
                    <li>
                      <a>Legal Link</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }

  return <FooterDefaultComponent {...props} />;
};

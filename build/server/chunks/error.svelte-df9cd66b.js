import { c as create_ssr_component, a as subscribe, b as escape } from './index2-d091da0f.js';
import { p as page } from './stores-bc6b11cf.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1>
<p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-df9cd66b.js.map

import { c as create_ssr_component, a as subscribe, i as set_store_value, b as escape, v as validate_component } from './index2-d091da0f.js';
import { c as colorizedBackground, u as user } from './store-8855611e.js';
import { A as ActionBar, B as Button } from './Button-ac223c5b.js';
import './index-b7390af8.js';

const css = {
  code: ".prompt-input.svelte-j4dm41{height:100%;width:100%;background-color:transparent;font-family:Redaction, system-ui, serif;font-size:6rem;line-height:1;--tw-text-opacity:1;color:rgb(15 23 42 / var(--tw-text-opacity))\n}.prompt-input.svelte-j4dm41:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)\n}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $colorizedBackground, $$unsubscribe_colorizedBackground;
  let $user, $$unsubscribe_user;
  $$unsubscribe_colorizedBackground = subscribe(colorizedBackground, (value) => $colorizedBackground = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  set_store_value(colorizedBackground, $colorizedBackground = true, $colorizedBackground);
  $$result.css.add(css);
  $$unsubscribe_colorizedBackground();
  $$unsubscribe_user();
  return `<div class="flex h-full flex-col"><div class="flex h-full items-center justify-center">
		${`<form id="promptForm" method="POST" class="h-full w-full px-6 pb-6 pt-14"><label for="prompt"><textarea name="prompt" class="prompt-input svelte-j4dm41">${escape("")}</textarea></label></form>`}

		
		${``}

		
		${``}</div>

	
	${`<div>${validate_component(ActionBar, "ActionBar").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="my-4 ml-4"><p class="text-lg text-slate-900">${escape($user)}</p></div>
				<div class="ml-auto">${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "Generera bild",
          type: "submit",
          form: "promptForm"
        },
        {},
        {}
      )}</div>`;
    }
  })}</div>`}

	
	${``}
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-bc7fa471.js.map

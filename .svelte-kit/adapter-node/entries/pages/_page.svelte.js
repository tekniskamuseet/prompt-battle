import { c as create_ssr_component, g as subscribe, i as set_store_value, e as escape, a as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { t as theme, c as colorizedBackground, u as user } from "../../chunks/store.js";
import { A as ActionBar, B as Button } from "../../chunks/Button.js";
const ThemeSwitch_svelte_svelte_type_style_lang = "";
const css = {
  code: ".theme-switch.svelte-naj068{border-radius:0.5rem;padding:0.5rem;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.theme-switch.svelte-naj068:hover{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))\n}.gradient-orange-to-blue.svelte-naj068,.gradient-blue-to-orange.svelte-naj068{height:2rem;width:2rem;border-radius:9999px;border-width:1px;--tw-border-opacity:1;border-color:rgb(15 23 42 / var(--tw-border-opacity));background-image:linear-gradient(to bottom right, var(--tw-gradient-stops))\n}",
  map: null
};
const ThemeSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css);
  $$unsubscribe_theme();
  return `


${$theme === "orange" ? `<button class="theme-switch svelte-naj068"><div class="gradient-orange-to-blue from-prompt-orange to-prompt-blue svelte-naj068"></div></button>` : `<button class="theme-switch svelte-naj068"><div class="gradient-blue-to-orange from-prompt-blue to-prompt-orange svelte-naj068"></div></button>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $colorizedBackground, $$unsubscribe_colorizedBackground;
  let $theme, $$unsubscribe_theme;
  let $user, $$unsubscribe_user;
  $$unsubscribe_colorizedBackground = subscribe(colorizedBackground, (value) => $colorizedBackground = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  set_store_value(colorizedBackground, $colorizedBackground = false, $colorizedBackground);
  $$unsubscribe_colorizedBackground();
  $$unsubscribe_theme();
  $$unsubscribe_user();
  return `<div class="flex h-full flex-col"><form class="mx-6 my-auto"><label class="font-sans" for="user-name">Användarnamn:
			<input name="user-name" type="text" class="${"mt-5 w-full border-0 border-b border-slate-900 font-redaction text-8xl text-slate-900 focus:outline-none focus:ring-0 " + escape(
    $theme === "orange" ? "focus:border-b-prompt-orange" : "focus:border-b-prompt-blue",
    true
  )}"${add_attribute("value", $user, 0)}></label></form>

	${validate_component(ActionBar, "ActionBar").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="my-4 ml-4">${validate_component(ThemeSwitch, "ThemeSwitch").$$render($$result, {}, {}, {})}</div>
		<div class="ml-auto">${validate_component(Button, "Button").$$render($$result, { label: "Starta battle", href: "/prompt" }, {}, {})}</div>`;
    }
  })}</div>`;
});
export {
  Page as default
};

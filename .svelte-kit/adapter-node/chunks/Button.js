import { c as create_ssr_component, g as subscribe, a as add_attribute, e as escape } from "./index2.js";
import { t as theme, c as colorizedBackground } from "./store.js";
const ActionBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex min-h-min w-full flex-row flex-nowrap items-center border-t border-t-slate-900">${slots.default ? slots.default({}) : ``}</div>`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  let $colorizedBackground, $$unsubscribe_colorizedBackground;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_colorizedBackground = subscribe(colorizedBackground, (value) => $colorizedBackground = value);
  let { label } = $$props;
  let { href = "" } = $$props;
  let { form = null } = $$props;
  let { type = "button" } = $$props;
  let { class: classes = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  $$unsubscribe_theme();
  $$unsubscribe_colorizedBackground();
  return `${href !== "" ? `<a${add_attribute("href", href, 0)} class="w-full"><button${add_attribute("type", type, 0)} class="${[
    "h-full px-20 py-7 text-center font-redaction-50 text-xl " + escape(classes, true),
    " animate-pixelate-font-0-50 " + ($theme === "orange" && $colorizedBackground === false ? "bg-prompt-orange" : "") + " " + ($theme === "blue" && $colorizedBackground === false ? "bg-prompt-blue" : "") + " " + ($colorizedBackground === true ? "bg-slate-900" : "") + " " + ($colorizedBackground === true ? "text-white" : "")
  ].join(" ").trim()}">${escape(label)}</button></a>` : `<button${add_attribute("form", form, 0)}${add_attribute("type", type, 0)} class="${[
    "h-full px-20 py-7 font-redaction-50 text-xl " + escape(classes, true),
    " animate-pixelate-font-0-50 " + ($theme === "orange" && $colorizedBackground === false ? "bg-prompt-orange" : "") + " " + ($theme === "blue" && $colorizedBackground === false ? "bg-prompt-blue" : "") + " " + ($colorizedBackground === true ? "bg-slate-900" : "") + " " + ($colorizedBackground === true ? "text-white" : "")
  ].join(" ").trim()}">${escape(label)}</button>`}`;
});
export {
  ActionBar as A,
  Button as B
};

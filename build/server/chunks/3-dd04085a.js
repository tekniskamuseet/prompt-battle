import OpenAI from 'openai';
import { b as private_env } from './shared-server-b7e48788.js';

const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const prompt = formData.get("prompt");
    const openai = new OpenAI({
      apiKey: private_env.OPENAI_API_KEY
    });
    const DalleResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "url"
    });
    return {
      success: true,
      url: DalleResponse.data[0]
    };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-bc7fa471.js')).default;
const server_id = "src/routes/prompt/+page.server.ts";
const imports = ["_app/immutable/nodes/3.160caf94.js","_app/immutable/chunks/index.4d1394c0.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.e4110553.js","_app/immutable/chunks/index.7155e950.js","_app/immutable/chunks/index.b5244028.js","_app/immutable/chunks/store.4567397c.js","_app/immutable/chunks/Button.7906048b.js"];
const stylesheets = ["_app/immutable/assets/3.cddadc67.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-dd04085a.js.map

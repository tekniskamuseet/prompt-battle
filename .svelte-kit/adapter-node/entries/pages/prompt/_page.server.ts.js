import OpenAI from "openai";
import { b as private_env } from "../../../chunks/shared-server.js";
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
export {
  actions
};

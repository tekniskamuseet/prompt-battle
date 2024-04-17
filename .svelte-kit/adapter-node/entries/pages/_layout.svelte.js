import { c as create_ssr_component, e as escape, a as add_attribute, b as each, d as spread, f as escape_object, g as subscribe, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { t as theme, c as colorizedBackground } from "../../chunks/store.js";
const MetaTags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let updatedTitle;
  let { title = "" } = $$props;
  let { titleTemplate = "" } = $$props;
  let { noindex = false } = $$props;
  let { nofollow = false } = $$props;
  let { robotsProps = void 0 } = $$props;
  let { description = void 0 } = $$props;
  let { mobileAlternate = void 0 } = $$props;
  let { languageAlternates = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { facebook = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { additionalMetaTags = void 0 } = $$props;
  let { additionalLinkTags = void 0 } = $$props;
  let robotsParams = "";
  if (robotsProps) {
    const { nosnippet, maxSnippet, maxImagePreview, maxVideoPreview, noarchive, noimageindex, notranslate, unavailableAfter } = robotsProps;
    robotsParams = `${nosnippet ? ",nosnippet" : ""}${maxSnippet ? `,max-snippet:${maxSnippet}` : ""}${maxImagePreview ? `,max-image-preview:${maxImagePreview}` : ""}${noarchive ? ",noarchive" : ""}${unavailableAfter ? `,unavailable_after:${unavailableAfter}` : ""}${noimageindex ? ",noimageindex" : ""}${maxVideoPreview ? `,max-video-preview:${maxVideoPreview}` : ""}${notranslate ? ",notranslate" : ""}`;
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.titleTemplate === void 0 && $$bindings.titleTemplate && titleTemplate !== void 0)
    $$bindings.titleTemplate(titleTemplate);
  if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0)
    $$bindings.noindex(noindex);
  if ($$props.nofollow === void 0 && $$bindings.nofollow && nofollow !== void 0)
    $$bindings.nofollow(nofollow);
  if ($$props.robotsProps === void 0 && $$bindings.robotsProps && robotsProps !== void 0)
    $$bindings.robotsProps(robotsProps);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.mobileAlternate === void 0 && $$bindings.mobileAlternate && mobileAlternate !== void 0)
    $$bindings.mobileAlternate(mobileAlternate);
  if ($$props.languageAlternates === void 0 && $$bindings.languageAlternates && languageAlternates !== void 0)
    $$bindings.languageAlternates(languageAlternates);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.facebook === void 0 && $$bindings.facebook && facebook !== void 0)
    $$bindings.facebook(facebook);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.additionalMetaTags === void 0 && $$bindings.additionalMetaTags && additionalMetaTags !== void 0)
    $$bindings.additionalMetaTags(additionalMetaTags);
  if ($$props.additionalLinkTags === void 0 && $$bindings.additionalLinkTags && additionalLinkTags !== void 0)
    $$bindings.additionalLinkTags(additionalLinkTags);
  updatedTitle = titleTemplate ? titleTemplate.replace(/%s/g, title) : title;
  return `${$$result.head += `<!-- HEAD_svelte-1h7w4y4_START -->${$$result.title = `<title>${escape(updatedTitle)}</title>`, ""}<meta name="robots"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}${robotsParams}`, 0)}><meta name="googlebot"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}${robotsParams}`, 0)}>${description ? `<meta name="description"${add_attribute("content", description, 0)}>` : ``}${canonical ? `<link rel="canonical"${add_attribute("href", canonical, 0)}>` : ``}${mobileAlternate ? `<link rel="alternate"${add_attribute("media", mobileAlternate.media, 0)}${add_attribute("href", mobileAlternate.href, 0)}>` : ``}${languageAlternates && languageAlternates.length > 0 ? `${each(languageAlternates, (languageAlternate) => {
    return `<link rel="alternate"${add_attribute("hreflang", languageAlternate.hrefLang, 0)}${add_attribute("href", languageAlternate.href, 0)}>`;
  })}` : ``}${twitter ? `${twitter.cardType ? `<meta name="twitter:card"${add_attribute("content", twitter.cardType, 0)}>` : ``}
    ${twitter.site ? `<meta name="twitter:site"${add_attribute("content", twitter.site, 0)}>` : ``}
    ${twitter.handle ? `<meta name="twitter:creator"${add_attribute("content", twitter.handle, 0)}>` : ``}
    ${twitter.title ? `<meta name="twitter:title"${add_attribute("content", twitter.title, 0)}>` : ``}
    ${twitter.description ? `<meta name="twitter:description"${add_attribute("content", twitter.description, 0)}>` : ``}
    ${twitter.image ? `<meta name="twitter:image"${add_attribute("content", twitter.image, 0)}>` : ``}
    ${twitter.imageAlt ? `<meta name="twitter:image:alt"${add_attribute("content", twitter.imageAlt, 0)}>` : ``}` : ``}${facebook ? `<meta property="fb:app_id"${add_attribute("content", facebook.appId, 0)}>` : ``}${openGraph ? `${openGraph.url || canonical ? `<meta property="og:url"${add_attribute("content", openGraph.url || canonical, 0)}>` : ``}

    ${openGraph.type ? `<meta property="og:type"${add_attribute("content", openGraph.type.toLowerCase(), 0)}>
      ${openGraph.type.toLowerCase() === "profile" && openGraph.profile ? `${openGraph.profile.firstName ? `<meta property="profile:first_name"${add_attribute("content", openGraph.profile.firstName, 0)}>` : ``}

        ${openGraph.profile.lastName ? `<meta property="profile:last_name"${add_attribute("content", openGraph.profile.lastName, 0)}>` : ``}

        ${openGraph.profile.username ? `<meta property="profile:username"${add_attribute("content", openGraph.profile.username, 0)}>` : ``}

        ${openGraph.profile.gender ? `<meta property="profile:gender"${add_attribute("content", openGraph.profile.gender, 0)}>` : ``}` : `${openGraph.type.toLowerCase() === "book" && openGraph.book ? `${openGraph.book.authors && openGraph.book.authors.length ? `${each(openGraph.book.authors, (author) => {
    return `<meta property="book:author"${add_attribute("content", author, 0)}>`;
  })}` : ``}

        ${openGraph.book.isbn ? `<meta property="book:isbn"${add_attribute("content", openGraph.book.isbn, 0)}>` : ``}

        ${openGraph.book.releaseDate ? `<meta property="book:release_date"${add_attribute("content", openGraph.book.releaseDate, 0)}>` : ``}

        ${openGraph.book.tags && openGraph.book.tags.length ? `${each(openGraph.book.tags, (tag) => {
    return `<meta property="book:tag"${add_attribute("content", tag, 0)}>`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "article" && openGraph.article ? `${openGraph.article.publishedTime ? `<meta property="article:published_time"${add_attribute("content", openGraph.article.publishedTime, 0)}>` : ``}

        ${openGraph.article.modifiedTime ? `<meta property="article:modified_time"${add_attribute("content", openGraph.article.modifiedTime, 0)}>` : ``}

        ${openGraph.article.expirationTime ? `<meta property="article:expiration_time"${add_attribute("content", openGraph.article.expirationTime, 0)}>` : ``}

        ${openGraph.article.authors && openGraph.article.authors.length ? `${each(openGraph.article.authors, (author) => {
    return `<meta property="article:author"${add_attribute("content", author, 0)}>`;
  })}` : ``}

        ${openGraph.article.section ? `<meta property="article:section"${add_attribute("content", openGraph.article.section, 0)}>` : ``}

        ${openGraph.article.tags && openGraph.article.tags.length ? `${each(openGraph.article.tags, (tag) => {
    return `<meta property="article:tag"${add_attribute("content", tag, 0)}>`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "video.movie" || openGraph.type.toLowerCase() === "video.episode" || openGraph.type.toLowerCase() === "video.tv_show" || openGraph.type.toLowerCase() === "video.other" && openGraph.video ? `${openGraph.video.actors && openGraph.video.actors.length ? `${each(openGraph.video.actors, (actor) => {
    return `${actor.profile ? `<meta property="video:actor"${add_attribute("content", actor.profile, 0)}>` : ``}
            ${actor.role ? `<meta property="video:actor:role"${add_attribute("content", actor.role, 0)}>` : ``}`;
  })}` : ``}

        ${openGraph.video.directors && openGraph.video.directors.length ? `${each(openGraph.video.directors, (director) => {
    return `<meta property="video:director"${add_attribute("content", director, 0)}>`;
  })}` : ``}

        ${openGraph.video.writers && openGraph.video.writers.length ? `${each(openGraph.video.writers, (writer) => {
    return `<meta property="video:writer"${add_attribute("content", writer, 0)}>`;
  })}` : ``}

        ${openGraph.video.duration ? `<meta property="video:duration"${add_attribute("content", openGraph.video.duration.toString(), 0)}>` : ``}

        ${openGraph.video.releaseDate ? `<meta property="video:release_date"${add_attribute("content", openGraph.video.releaseDate, 0)}>` : ``}

        ${openGraph.video.tags && openGraph.video.tags.length ? `${each(openGraph.video.tags, (tag) => {
    return `<meta property="video:tag"${add_attribute("content", tag, 0)}>`;
  })}` : ``}

        ${openGraph.video.series ? `<meta property="video:series"${add_attribute("content", openGraph.video.series, 0)}>` : ``}` : ``}`}`}`}` : ``}

    ${openGraph.title || updatedTitle ? `<meta property="og:title"${add_attribute("content", openGraph.title || updatedTitle, 0)}>` : ``}

    ${openGraph.description || description ? `<meta property="og:description"${add_attribute("content", openGraph.description || description, 0)}>` : ``}

    ${openGraph.images && openGraph.images.length ? `${each(openGraph.images, (image) => {
    return `<meta property="og:image"${add_attribute("content", image.url, 0)}>
        ${image.alt ? `<meta property="og:image:alt"${add_attribute("content", image.alt, 0)}>` : ``}
        ${image.width ? `<meta property="og:image:width"${add_attribute("content", image.width.toString(), 0)}>` : ``}
        ${image.height ? `<meta property="og:image:height"${add_attribute("content", image.height.toString(), 0)}>` : ``}`;
  })}` : ``}

    ${openGraph.videos && openGraph.videos.length ? `${each(openGraph.videos, (video) => {
    return `<meta property="og:video"${add_attribute("content", video.url, 0)}>
        ${video.alt ? `<meta property="og:video:alt"${add_attribute("content", video.alt, 0)}>` : ``}
        ${video.width ? `<meta property="og:video:width"${add_attribute("content", video.width.toString(), 0)}>` : ``}
        ${video.height ? `<meta property="og:video:height"${add_attribute("content", video.height.toString(), 0)}>` : ``}
        ${video.secureUrl ? `<meta property="og:video:secure_url"${add_attribute("content", video.secureUrl.toString(), 0)}>` : ``}
        ${video.type ? `<meta property="og:video:type"${add_attribute("content", video.type.toString(), 0)}>` : ``}`;
  })}` : ``}

    ${openGraph.locale ? `<meta property="og:locale"${add_attribute("content", openGraph.locale, 0)}>` : ``}

    ${openGraph.site_name ? `<meta property="og:site_name"${add_attribute("content", openGraph.site_name, 0)}>` : ``}` : ``}${additionalMetaTags && additionalMetaTags.length > 0 ? `${each(additionalMetaTags, (tag) => {
    return `<meta${spread([escape_object(tag)], {})}>`;
  })}` : ``}${additionalLinkTags?.length ? `${each(additionalLinkTags, (tag) => {
    return `<link${spread([escape_object(tag)], {})}>`;
  })}` : ``}<!-- HEAD_svelte-1h7w4y4_END -->`, ""}`;
});
const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAioAAABoBAMAAAAtEcbOAAAAHlBMVEVHcEz////////////////////////////////////JATChAAAACXRSTlMAv0CAodEQXi2IZ9kOAAAFIUlEQVR42u2cu28TQRCHL/hijo6IR+TOCghBF96kM0qB0pEUEekskKG1RIHSWXTpEj8w+98S3/keuzuz61vf7Q7S/Dqf1t65b77Ye69EEYfD4XA4HA6Hw+FwOBxO6CTPoa2/2p/49wTY2Jk47sWBLcNi3oMnr+F8yId03wpxM9YmicVZ+QKfqZ8P+bp6VexQcjvDxz09D16XM327EOKTvncnNyWW3+i8z7T37QhbDvOhR+iQWdGb1aupXpwQ5Q7gM/3Nh7yQ5t1F3/CnOoMQfb0bYlm86KEfs9yGCv6xc4nKDCiuMjM+0xSmcm+D3emBVFasxvbyZ+1QuTFTkRvZIJWZmUosCUiMSlqc+OydSrcn1UaMyols+6ZUBttSGWWDJiSpxMKNyv0tqXQvskF9klQyVcrW+6IyUsZ4p2L6DYqVIU1SmRqo5KoMglGZGaioqjRJ5dpAZaR2ow6Vu/J6MR0lbXnYlz722Li2jbVJNFUifYrb9GxUptCidIJT0VTJhpwq8z6CqSiRviWUwCsl3bzqJF1NlYwK+EYTlWtz3T3JakgVuPxOECp6cX6o6KoQogIU54cK0A06VNbFLSLPVKBukKGSF3fumwqgCh0quSpDz1QgVchQAVVxpDKvQwVShQwVUBVHKnLfzVRAVahQgVVxpTLfnAqoChUqsCr1qewIuyxVKrAqRKggqtSnclfYZalSgVUhQgVRpT4V/QDTSAVRhQYVTBUHKrFdlgoVRBUaVDBVHKhsIEtJBVOFBBVUFRcqdllKKpgqJKigqrhQsctSUEFVoUAFV8WJilWWggqqCgUquCpOVHJZsjOBrw76GBVcFfhU4tNmqJivbOZUDKq4UYmR0+cqFVyVWudtG6EyU6kYVHGjksuSZwBTMagSnopJFUcqiiw3Q5CKQZXwVGKDKo5UVFnOISomVcJTOTGo4kpFkUUhnlEZKZcySVGJ0btltqBiliWt7d1alcotRISoFPWPm6RilCWt7a0wtSMwFdOtVVtQMcqi1DamTAWszplKxyBLz94Oz1RO9/YxKssmqUQ/1wvSI12Wnr0d4Nr2pbcVv6U6dyrKybmqLD17OwIfB1mq255Kfo/rfYPHY5JUztDqGqASwzccpNuusHYQoLIYotU1QEU/31JQGSRYOwhQOY/Q6pqgEoP3xWX6YO0IT2XlNlZdE1TWsuhUbu3B2hGeykptrLpGqHRgKuk3DdKO4FSyr0GkukaoRJcglfSL5g7cjuBUsm9BRJZmqHQgKvMKMa0doankv5iwLC1SGUirPKUdoankP5iwLO1RmUt/Xmo7AlMpF1egLO1RGSiHBHI7yNwBBsrSHpXDyCQLnXsoIVl8UIFkoUMFksUHFUgWQvdmA7J4oQLIQogKIIsXKoAshKgAsrhS6UoPe0BUxvqZqeL5unapgKco96VjWWkSXZZNqRS/s3ecniW7VJ6R9k7F+NSUJsumVA6RSx4bUklUWUhR0WSpTWXX7bnDK0UWUlS06mpTcXwaU5WFFpVEufjri0rejoGVyjIAlXV1S+9UEuB5ZpDKNASVRL5M0SCVqfkH5ko6ViVGJa2uvKRVm8qO/V+TwLucSFcYW6JysiEV7c80uajuAE4F+f8rHafnmdftKLvREpUj+92C6Yryi/bOkVhMpCkWIJVrmEqyh2Usrdkqc5SyPJab6kZl2/x48/C9vrV78a7lebs/944n+uarWUQ43wPN2x1GHA6Hw+FwOBwOh8PhcDgcDofzn+QfrDpDuEQhS0YAAAAASUVORK5CYII=";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="absolute inset-x-0 top-0 flex items-center justify-center py-3"><img${add_attribute("src", img, 0)}>
	</header>`;
});
const PageTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pathname = "" } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  return `


<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $theme, $$unsubscribe_theme;
  let $colorizedBackground, $$unsubscribe_colorizedBackground;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_colorizedBackground = subscribe(colorizedBackground, (value) => $colorizedBackground = value);
  let { data } = $$props;
  const fonts = ["Redaction", "Redaction_10", "Redaction_20", "Redaction_35", "Redaction_50"];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  $$unsubscribe_theme();
  $$unsubscribe_colorizedBackground();
  return `
${$$result.head += `<!-- HEAD_svelte-cj7ykf_START -->${each(fonts, (font) => {
    return `<link rel="preload" href="${"/fonts/" + escape(font, true) + "-Regular.woff2"}" as="font" type="font/woff2" crossorigin="anonymous">`;
  })}<!-- HEAD_svelte-cj7ykf_END -->`, ""}


${validate_component(MetaTags, "MetaTags").$$render(
    $$result,
    {
      title: "Kulturnatten Prompt Battle",
      description: "Battle each other in an amazing prompt slam using the power of DALL-E.",
      openGraph: {
        url: $page.url.href,
        title: "Kulturnatten Prompt Battle",
        description: "Battle each other in an amazing prompt slam using the power of DALL-E.",
        images: [
          {
            url: `${$page.url.origin}/og-image.png`,
            width: 1200,
            height: 630,
            alt: "Kulturnatten Prompt Battle"
          }
        ],
        site_name: "Kulturnatten Prompt Battle"
      },
      twitter: {
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
        title: "Kulturnatten Prompt Battle",
        description: "Battle each other in an amazing prompt slam using the power of DALL-E.",
        image: `${$page.url.origin}/twitter-image.png`,
        imageAlt: "Kulturnatten Prompt Battle"
      },
      facebook: { appId: "1234567890" }
    },
    {},
    {}
  )}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${validate_component(PageTransition, "PageTransition").$$render($$result, { pathname: data.pathname }, {}, {
    default: () => {
      return `<main class="${[
        "h-screen",
        ($theme === "orange" && $colorizedBackground === true ? "bg-prompt-orange" : "") + " " + ($theme === "blue" && $colorizedBackground === true ? "bg-prompt-blue" : "")
      ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</main>`;
    }
  })}`;
});
export {
  Layout as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Commands","description":"","frontmatter":{},"headers":[],"relativePath":"guide/commands.md","filePath":"guide/commands.md"}');
const _sfc_main = { name: "guide/commands.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;Commands&quot;">​</a></h1><h2 id="help" tabindex="-1">/help <a class="header-anchor" href="#help" aria-label="Permalink to &quot;/help&quot;">​</a></h2><p>Zeigt alle Commands</p><h2 id="ping" tabindex="-1">/ping <a class="header-anchor" href="#ping" aria-label="Permalink to &quot;/ping&quot;">​</a></h2><p>Antwortet mit Pong</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/commands.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commands = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  commands as default
};

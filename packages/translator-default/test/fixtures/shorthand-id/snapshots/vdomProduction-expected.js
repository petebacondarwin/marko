const _marko_template = _t();

export default _marko_template;
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/dom";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("nma4wliZ", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.e("div", {
    "id": "shorthand"
  }, "0", component, 0, 1);
  out.e("div", {
    "id": dynamic
  }, "1", component, 0, 1);
  out.e("div", {
    "id": "partial-" + dynamic
  }, "2", component, 0, 1);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);
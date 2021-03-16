import { genCustomSlotRenderFunc } from '@onemin-table/shared';

export default {
  functional: true,

  props: {
    rangeSeparatorSlotRender: {
      type: Function,
      default: null,
    },
  },

  render: genCustomSlotRenderFunc,
};

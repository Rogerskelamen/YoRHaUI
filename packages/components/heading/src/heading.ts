import type { ExtractPropTypes, PropType } from 'vue';

export interface Subtext {
  content: string;
  enable: boolean;
}

export const headingProps = {
  level: {
    type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6>,
    default: 1,
  },

  shadow: {
    type: Boolean,
    default: true,
  },

  subtext: {
    type: Object as PropType<Subtext>,
    default: (): Subtext => ({ content: '', enable: false }),
  },

  uppercase: {
    type: Boolean,
    default: true,
  },
} as const;

export type HeadingProps = ExtractPropTypes<typeof headingProps>;

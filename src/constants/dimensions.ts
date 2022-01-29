import { SCREEN_WIDTH, SCREEN_HEIGHT } from './screen';

const BOTTOM_TAB_HEIGHT = SCREEN_HEIGHT * 0.05;

const TAB_COUNT = 5;
const BOTTOM_TAB_WIDTH = SCREEN_WIDTH / 5;
const BOTTOM_TAB_MENU_EXTRA_WIDTH = 20;
const BOTTOM_TAB_DEC = BOTTOM_TAB_MENU_EXTRA_WIDTH / (TAB_COUNT - 1);

export default {
  TAB_COUNT,
  BOTTOM_TAB_WIDTH,
  BOTTOM_TAB_MENU_EXTRA_WIDTH,
  BOTTOM_TAB_DEC,
  BOTTOM_TAB_HEIGHT,
  bottomTabDefault: {
    width: BOTTOM_TAB_WIDTH - BOTTOM_TAB_DEC,
    height: 50,
    iconSize: 26,
  },
  bottomTabMenu: {
    width: BOTTOM_TAB_WIDTH + BOTTOM_TAB_MENU_EXTRA_WIDTH,
    iconSize: 32
  },
};

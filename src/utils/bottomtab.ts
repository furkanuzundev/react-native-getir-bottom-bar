import { BottomTabProps } from '../types';
import { SCREEN_WIDTH } from '../constants/screen';

export const getBottomTabIcon = ({ index }: BottomTabProps) => {
  switch (index) {
    case 0:
      return 'home';
    case 1:
      return 'search';
    case 2:
      return 'grid';
    case 3:
      return 'person';
    case 4:
      return 'gift';
    default:
      break;
  }
};

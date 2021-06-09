import { IMAGES } from '../common';
import moment from 'moment';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const getImageSource = (path?: string, placeholder?: string) =>
  path ? { uri: `${IMAGE_BASE_URL}${path}` } : placeholder || IMAGES.placeholder;

export const formatDate = (date: string) => moment(date).format('LL');

import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {  
  faEdit,
  faPhone,
  faGears,
  faServer,
  faPenNib,
  faDatabase,
  faBullhorn,
  faPaperPlane,
  faLaptopCode,
  faDrawPolygon,
  faArrowsRotate,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(fab, faArrowsRotate, faPenNib, faGears, faDatabase, faServer, faLaptopCode, faDrawPolygon, faEdit, faEdit, faBullhorn, faMapMarkerAlt, faPhone, faPaperPlane);

export type IconProps = FontAwesomeIconProps['icon'];

const Icon: React.FC<FontAwesomeIconProps> = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;

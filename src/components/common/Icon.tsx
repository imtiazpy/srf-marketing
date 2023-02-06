import React, { useState } from 'react';
import { FaEdit, FaCode, FaChartLine, FaShieldAlt, FaUsers, FaClock, FaCheck } from 'react-icons/fa';

type Icons = 'edit' | 'code' | 'chart' | 'shield' | 'users' | 'clock' | 'check';

export interface IIcon {
  iconName: Icons | any;
}

const getIconFromName = (icon: Icons) => {
  switch (icon) {
    case 'edit':
      return <FaEdit size={'24px'} color='red' />
    case 'code':
      return <FaCode size={'24px'} color='red' />
    case 'chart':
      return <FaChartLine size={'24px'} color='red' />
    case 'shield':
      return <FaShieldAlt size={'24px'} color='red' />
    case 'users':
      return <FaUsers size={'24px'} color='red' />
    case 'clock':
      return <FaClock size={'24px'} color='red' />
    case 'check':
      return <FaCheck size={'24px'} color='red' />
  }
}

const Icon: React.FC<IIcon> = ({ iconName }) => {
  return (
    <>{getIconFromName(iconName)}</>
  )
};

export default Icon;
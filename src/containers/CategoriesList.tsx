import React from 'react';
import Category from '../components/Category';
import classes from '../styles/emoji-picker.module.css';
import { CategoriesListProps } from '../types';
import { capitalize } from '../utils/strings';
import {
  IoHappyOutline,
  IoHappy,
  IoHandLeftOutline,
  IoHandLeft,
  IoLeafOutline,
  IoLeaf,
  IoFastFoodOutline,
  IoFastFood,
  IoAirplaneOutline,
  IoAirplane,
  IoFootballOutline,
  IoFootball,
  IoHeadsetOutline,
  IoHeadset,
  IoAlertCircleOutline,
  IoAlertCircle,
  IoFlagOutline,
  IoFlag,
} from 'react-icons/io5';

const icons = [
  [IoHappyOutline, IoHappy],
  [IoHandLeftOutline, IoHandLeft],
  [IoLeafOutline, IoLeaf],
  [IoFastFoodOutline, IoFastFood],
  [IoAirplaneOutline, IoAirplane],
  [IoFootballOutline, IoFootball],
  [IoHeadsetOutline, IoHeadset],
  [IoAlertCircleOutline, IoAlertCircle],
  [IoFlagOutline, IoFlag],
];

const CategoriesList: React.FC<CategoriesListProps> = ({
  items,
  selected,
  onCategorySelect,
}) => {
  return (
    <div className={classes['categories-list']}>
      {items.map((category, index) => {
        return (
          <Category
            key={index}
            IconOutlined={icons[index][0]}
            IconFilled={icons[index][1]}
            isSelected={selected === category}
            onSelect={() => onCategorySelect(category)}
            title={category
              .split('-')
              .map(w => capitalize(w))
              .join(' & ')}
          />
        );
      })}

      <div
        className={`${classes['categories-slider']} ${
          classes[`categories-slider--${selected}`]
        }`}
      />
    </div>
  );
};

export default CategoriesList;

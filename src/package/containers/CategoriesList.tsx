import React from 'react';
import Category from '../components/Category';
import classes from '../../../styles/emoji-picker.module.css';
import { CategoriesListProps } from '../types/props';
import { capitalize } from '../utils/strings';

const CategoriesList: React.FC<CategoriesListProps> = ({
  items,
  selected,
  onCategorySelect,
}) => {
  return (
    <div className={classes['categories-list']}>
      {items.map(([name, [IconOutlined, IconFilled]], index) => {
        return (
          <Category
            key={index}
            IconOutlined={IconOutlined}
            IconFilled={IconFilled}
            isSelected={selected === name}
            onSelect={() => onCategorySelect(name)}
            title={name
              .split('_')
              .map(w => capitalize(w))
              .join(' & ')}
          />
        );
      })}

      <div
        className={`${classes['categories-slider']} ${
          classes[
            `categories-slider--${Array.from(
              { length: items.length },
              (_, i) => items[i][0],
            ).indexOf(selected)}`
          ]
        }`}
      />
    </div>
  );
};

export default CategoriesList;

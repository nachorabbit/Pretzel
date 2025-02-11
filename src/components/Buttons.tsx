import React from 'react';
import { ChevronLeft } from 'lucide-react';
import type { ButtonProps, BackButtonProps } from '../types';

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button 
      className="flex items-center gap-1 text-[#A6A5A5] p-0"
      onClick={onClick}
    >
      <ChevronLeft size={16} />
    </button>
  );
};

const FullButton: React.FC<ButtonProps> = ({ 
  text, 
  state = 'active', 
  backgroundColor = '#FF6E81',
  activeColor,
  disabledColor,
  hoverColor,
  textColor = '#FFFFFF',
  icon,
  onClick,
  shadow = 'none',
  fontSize = 'base',
  fontWeight = 'bold',
  fontFamily = 'inherit'
}) => {
  const shadowClasses = {
    'none': '',
    'sm': 'shadow-sm',
    'md': 'shadow-md',
    'lg': 'shadow-lg'
  };

  // CSS 변수를 통해 hover 색상 처리
  const style = {
    '--active-color': activeColor || backgroundColor,
    '--hover-color': hoverColor || `${backgroundColor}CC`,
    '--disabled-color': disabledColor || `${backgroundColor}80`,
    backgroundColor: state === 'active' ? 'var(--active-color)' : 'var(--disabled-color)',
    fontFamily,
    ...(fontSize.includes('px') && { fontSize })
  } as React.CSSProperties;

  const getFontSize = (size: string) => {
    // px 값이 포함된 경우 style 속성으로 처리하기 위해 그대로 반환
    if (size.includes('px')) {
      return '';
    }
    
    // 미리 정의된 클래스들을 객체로 관리
    const sizeClasses = {
      'base': 'text-base',
      'pretzel': 'text-pretzel',
      'sm': 'text-sm',
      'lg': 'text-lg',
      // 필요한 다른 크기들 추가
    };
    
    return sizeClasses[size as keyof typeof sizeClasses] || 'text-base';
  };

  const getFontWeight = (weight: string) => {
    const weightClasses = {
      'normal': 'font-normal',
      'medium': 'font-medium',
      'semibold': 'font-semibold',
      'bold': 'font-bold',
    };
    return weightClasses[weight as keyof typeof weightClasses] || 'font-bold';
  };

  const button = (
    <button
      onClick={onClick}
      className={`w-full h-10 rounded-pretzel flex items-center justify-center gap-2 
        transition-all hover:bg-[var(--hover-color)]
        ${state === 'disabled' ? 'opacity-50 cursor-not-allowed' : 'active:scale-98'}
        ${shadowClasses[shadow]}`}
      style={style}
      type="button"
      disabled={state === 'disabled'}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span 
        className={`${getFontSize(fontSize)} ${getFontWeight(fontWeight)}`}
        style={{ 
          color: textColor,
          fontFamily,
          ...(fontSize.includes('px') && { fontSize })
        }}
      >
        {text}
      </span>
    </button>
  );

  return state === 'disabled' ? button : button;
};

export { BackButton, FullButton };
export interface ButtonProps {
  text: string;
  state?: 'active' | 'disabled';
  backgroundColor?: string;
  activeColor?: string;
  disabledColor?: string;
  hoverColor?: string;
  textColor?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
}

export interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

export interface BackButtonProps {
  onClick?: () => void;
}
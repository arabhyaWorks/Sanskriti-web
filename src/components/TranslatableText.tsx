import React from 'react';

interface TranslatableTextProps {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const TranslatableText: React.FC<TranslatableTextProps> = ({ 
  text, 
  className = '', 
  as: Component = 'span' 
}) => {
  return <Component className={className}>{text}</Component>;
};

export default TranslatableText;
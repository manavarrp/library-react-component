/// <reference types="react" />
type ButtonProps = {
    text: string;
    onClick: () => void;
};

declare const Button: React.FC<ButtonProps>;

export { Button };

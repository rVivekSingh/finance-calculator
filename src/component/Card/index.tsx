import React from "react";
import {
  BodyProps,
  CardChartProps,
  CardFormProps,
  CardProps,
  CardResultProps,
  HeaderProps,
} from "./Card.interface";

const CardHeader: React.FC<HeaderProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={`card-header  ${className || ""}`} {...rest}>
      {children}
    </div>
  );
};

const CardBody: React.FC<BodyProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={`card-body flex max-lg:flex-col justify-between ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

const CardForm: React.FC<CardFormProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={`card-form flex flex-col gap-6 lg:gap-11 xl:mr-16 lg:w-[calc(100%-300px)] ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

const CardChart: React.FC<CardChartProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={`card-chart px-3 mt-10 text-center ${className || ""}`}
      {...rest}
    >
      {children}
    </div>
  );
};

const CardResult: React.FC<CardResultProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={`card-result ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

const Card: React.FC<CardProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`card ${className || ""}`} {...rest}>
      {children}
    </div>
  );
};

export { Card, CardBody, CardHeader, CardForm, CardChart, CardResult };

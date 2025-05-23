export * from './banner';
export * from './curation';

export type ClassName = {
  className?: string;
};

export type Child = {
  children?: React.ReactNode;
} & ClassName;

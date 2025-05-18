interface LabelProps {
  htmlFor: string;
  children: string;
}

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <label className="text-tertiary" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

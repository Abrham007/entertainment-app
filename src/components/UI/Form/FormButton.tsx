interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function FormButton({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-full py-[15px] bg-Red hover:bg-White text-base text-White hover:text-SemiDarkBlue font-light rounded-md"
    >
      {children}
    </button>
  );
}

interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function FormInput({ ...props }: InputType) {
  return (
    <label
      className={`flex justify-between px-4 py-[18px] border-b border-b-solid border-b-GreyishBlue hover:border-b-White focus:border-b-White cursor-text`}
    >
      <input
        type="text"
        {...props}
        className={`w-full bg-transparent text-base text-White outline-none border-none`}
      ></input>
      {false && <span className="min-w-max text-sm text-Red">Can’t be empty</span>}
    </label>
  );
}

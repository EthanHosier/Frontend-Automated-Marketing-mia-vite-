/**
 * v0 by Vercel.
 * @see https://v0.dev/t/M9nMDzz91pY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export interface InputProps {
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <div className="relative max-w-sm bg-grayscaleSurface-default rounded-lg w-[342px] h-[52px] hover:bg-gray-200 transition-colors duration-200 ease-in">
      <div className="group relative z-0 mb-0 w-full flex items-center h-full px-4">
        <input
          type="text"
          id="floating-input"
          className="peer block w-full appearance-none bg-transparent px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 mt-1"
          placeholder=" "
        />
        <label
          htmlFor="floating-input"
          className="absolute -z-10 origin-[0] -translate-y-[14px] scale-75 transform text-sm text-grayscaleText-subtitle duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-[14px] peer-focus:scale-75 "
        >
          {placeholder}
        </label>
      </div>
    </div>
  );
};

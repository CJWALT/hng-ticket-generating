

const Button = ({className, children, handleClick}) => {
  return (
    <div>
      <button onClick={handleClick} className={`h-[48px] cursor-pointer w-[231px] max-w-[230px] sm:w-full sm:max-w-none rounded-[15px] ${className}`}>{children}</button>
    </div>
  )
}

export default Button

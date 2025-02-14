

const Button = ({className, children, handleClick}) => {
  return (
    <div className="md:w-[45%]">
      <button onClick={handleClick} className={`h-[48px] cursor-pointer w-full sm:w-full sm:max-w-none rounded-[15px] ${className}`}>{children}</button>
    </div>
  )
}

export default Button

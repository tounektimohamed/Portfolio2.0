const Button = ({btnText,btnIcon=null}) => {
  return (
    <button className="flex items-center justify-around gap-5 px-4 py-3 text-xl font-semibold text-center text-white transition duration-200 ease-in bg-fadeMainTheme rounded-lg shadow-md hover:bg-mainTheme focus:outline-none  focus:ring-offset-2 ">
        {btnText}
        {btnIcon}
    </button>
  )
}

export default Button
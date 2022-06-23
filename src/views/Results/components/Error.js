

const Error = ({ error }) => {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <img className="h-32 mb-5" src="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993__340.png" alt="Error" />
      <p className="text-xl bg-red-400 p-5 border-2 border-red-400 rounded-md text-white ">{error?.error}</p>
    </div>
  )
}

export default Error;
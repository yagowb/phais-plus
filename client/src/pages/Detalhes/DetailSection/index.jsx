function DetailSection({ title, children }){
  return (
    <div className="md:w-3/5 space-y-3">
      <h1 className="text-xl font-semibold">
        {title}
      </h1>

      {children}
    </div>
  )
}

export default DetailSection
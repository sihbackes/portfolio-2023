export const About = () => {
  return(
    <main className="border-b border-gray-100 py-9 md:py-32">
      <div>
        <h3 className="font-roboto text-lg pb-7" >About Me</h3>
        <div className="grid md:grid-cols-3">
          <div className="col-span-2">
            <p className="font-roboto">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="bg-black">
            <img className="w-44 py-8 md:w-52 md:py-0 "  src="https://github.com/sihbackes.png" alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}
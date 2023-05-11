import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"

function Contact() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    window.location.href = `mailto:ingchaybi@gmail.com?subject=${data.subject}&body=${data.message}`
  }

  return (
    <div className="snap-start relative max-w-full overflow-hidden  mt-20 h-screen flex flex-col text-left items-center ">
      <div className="z-10 sticky top-8 mb-20">
        <h3 className="element uppercase tracking-[20px] text-gray-500 text-3xl">
          Contact
        </h3>
      </div>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">Contact me</h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center ">
            <PhoneIcon className="text-[#003788] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+33 7 69 34 68 63</p>
          </div>
          <div className="flex items-center space-x-5 justify-center animate-pulse">
            <EnvelopeIcon className="text-[#003788] h-7 w-7 animate-pulse" />
            <p className="text-2xl">ingchaybi@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center animate-pulse">
            <MapPinIcon className="text-[#003788] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Paris</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="message"
            className="contactInput"
          />
          <button className="bg-[#367ff5] py-5 px-10 rounded-md text-white font-bold">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

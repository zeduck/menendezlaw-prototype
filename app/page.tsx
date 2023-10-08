import Button from "./components/Button";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-start max-h-screen w-screen m-auto">

        <div className="mt-6 md:mt-12 text-6xl md:text-7xl">
          Menendez Law
        </div>

        <div className="h-auto">
          <video src="/services.mp4" className=" h-[60vh]" controls></video>
        </div>

        <div className="m-6 md:m-8 lg:m-12 flex flex-col justify-between w-full lg:w-[60vw]">
          <div className="flex flex-row">
            <Button> <p>Services</p> </Button>
            <Button> <p>About Us</p> </Button>
          </div>
          <div className="flex flex-row">
            <Button> <p>Location</p> </Button>
            <Button> <p>Contact</p> </Button>
          </div>
        </div>

      </div>

    </main>
  )
}

import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start max-h-screen">
      <div className="mt-6 md:mt-12 text-5xl md:text-7xl">
        Menendez Law
      </div>

      <div className="h-auto">
        <video src="/services.mp4" className=" h-[60vh]" controls></video>
      </div>

      <div className="m-6 md:m-8 lg:m-12 flex flex-row justify-between w-screen">
        <Button> <p>Services</p> </Button>
        <Button> <p>About Us</p> </Button>
        <Button> <p>Location</p> </Button>
        <Button> <p>Contact</p> </Button>
      </div>

    </main>
  )
}

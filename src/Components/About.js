import DownloadButton from "./DownloadButton";

function About() {
  return (
    <>
    <div className=" container flex justify-between items-center">

    <div className="basis-2/5">
        <h2 className=" text-2xl py-5">Hello, I'm Ritesh Kumar</h2>
        <p className="text-lg">I am a programming enthusiast,a frontend web developer, korean language expert and a learner . I have been sharpening my web development skills by building websites and applications for more than a year now.
        I love working with JavaScript, which is truly an amazing language to build to web applictaions.
        </p>
        <DownloadButton />

    </div>
    <div>
      <img src='/assets/image/coding.png' width="500rem" alt="coding" />
    </div>
    </div>

    </>
  );
}

export default About;
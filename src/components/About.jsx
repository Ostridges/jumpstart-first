import React from "react";
import whatGif from '../images/fun-hat.JPEG'
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            All About Milo
          </h1>
          <p className="mb-8 leading-relaxed">
          Milo is like such a cool guy, sure he sings and plays piano but he's also just like soooooo awesome. He does this thing called the INTERalliance Jumpstart Program 
          which is like sooo fun, it does make him very busy however due to his other job so do NOT try to hang out with him because he will feel bad for not being able to.
          Not that he doesn't want to hang out, he just physically cannot. In the few free days that he has he needs to either rest or hang out with his beautiful girlfriend.
           
          </p>
          <p>
          Despite having two jobs at once he seems to be doing so much other stuff! Some of the things he does are the LCYAP program, chamber choir at his school, and he's also in a band!
          You may be thinking "Wow, how does Milo have time for all of this stuff?" the answer to this is... He doesn't!! Milo is incredibly tired of all his stuff and just wants to hang out with his girlfriend.
          He is contemplating quitting his job just because he feels overworked all the time and is falling behind in school work, but he's not gonna do it because he's afraid of authority figures!
          He wants to just stop showing up and let them figure it out but thats "unproffesional" or whatever. His job is just serving a bunch of old rich people food, it's awful. The pay isn't even good because
          he doesn't make tips. Working in a retirment home is so much worse than he could've imagined when he applied for his job. It's not even developing his resume because he wants to go into cyber security!! 
          Milo really just needs a break from life where he can just sleep for like a week straight
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={whatGif}
          />
        </div>
      </div>
    </section>
  );
}
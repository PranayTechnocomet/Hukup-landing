"use client";
import "./custom_carousel.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile1 from "../../assets/images/Profile1.png";
import profile2 from "../../assets/images/Profile2.png";
import profile3 from "../../assets/images/Profile3.png";
import profile4 from "../../assets/images/Profile4.png";
import profile5 from "../../assets/images/Profile5.jpg";
gsap.registerPlugin(ScrollTrigger);


export default function YourPerfectMatch() {
  const containerRef = useRef(null);



  useEffect(() => {
    gsap.to(".preload-hidden", {
      opacity: 1, duration: 0.5, onComplete: () => {
        document.querySelectorAll(".preload-hidden").forEach(el => el.classList.remove("preload-hidden"));
      }
    });



    if (!containerRef.current) return; // safety check
    const container = containerRef.current;


    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     pin: true,
    //     scrub: 1,
    //     trigger: container,
    //     end: () => {
    //       const lastPanel = container.querySelector(".panel:last-child");
    //       const lastPanelRight = lastPanel.offsetLeft + lastPanel.offsetWidth;
    //       return `+=${lastPanelRight - window.innerWidth * 0}`;
    //     },


    //     // end: () =>
    //     //  `+=${
    //     //  container.scrollWidth -
    //     //  document.documentElement.clientWidth +
    //     //  container.offsetWidth
    //     //  }`,
    //   },
    //   defaults: { ease: "none", duration: 1 },
    // });

    let tl = gsap.timeline({
      scrollTrigger: {
        pin: true,
        //pinSpacing: false, // remove automatic extra space
        scrub: 1,
        trigger: container,
        end: () => {
          const lastPanel = container.querySelector(".panel:last-child");
          const lastPanelRight = lastPanel.offsetLeft + lastPanel.offsetWidth;
          return `+=${lastPanelRight - window.innerWidth}`;
        },
        // markers: true, // optional for debugging
      },
      defaults: { ease: "none", duration: 1 },
    });



    tl.to(".parallax", { x: 300 })
      .to(
        ".panel",
        {
          x: () =>
            `+=${-(
              container.scrollWidth - document.documentElement.clientWidth
            )}`,
        },
        0
      )
      .from(
        ".secondAn",
        {
          opacity: 0,
          scale: 0.25,
          duration: 0.2,
          stagger: {
            amount: 0.8,
          },
        },
        0
      );




    // gsap.from(".firstAn", {
    //   duration: 1,
    //   opacity: 0,
    //   scale: 0.25,
    //   scrollTrigger: {
    //     trigger: container,
    //     start: "top 90%",
    //     end: "bottom 10%",
    //     toggleActions: "play none none reverse",
    //   },
    // });



    return () => {
      // cleanup ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);


  const profiles = [
    {
      img: profile1.src,
      name: "Lina Smith",
      location: "BDMS, Kissing",
      km: "5 km away ",
    },
    {
      img: profile2.src,
      name: "Ema Johnson",
      location: "Romance, Sixty Nine",
      km: "2 km away ",
    },
    {
      img: profile3.src,
      name: "Sofia Wilson",
      location: "Cuckolding, Role Play",
      km: "3 km away ",
    },
    {
      img: profile4.src,
      name: "Patricia Jack",
      location: "Give Oral, Light Kink",
      km: "1 km away ",
    },
    {
      img: profile5.src,
      name: "Ema Johnson",
      location: "Hotwifing, Receive Oral",
      km: "4 km away ",
    },
    {
      img: profile2.src,
      name: "Ema Johnson",
      location: "Romance, Sixty Nine",
      km: "2 km away ",
    },
    {
      img: profile1.src,
      name: "Lina Smith",
      location: "Cuckolding, Role Play",
      km: "3 km away ",
    },
    {
      img: profile3.src,
      name: "Sofia Wilson",
      location: "BDMS, Kissing",
      km: "1 km away ",
    },
    {
      img: profile4.src,
      name: "Patricia Jack",
      location: "Give Oral, Light Kink",
      km: "4 km away ",
    },
    {
      img: profile5.src,
      name: "Ema Johnson",
      location: "Hotwifing, Receive Oral",
      km: "5 km away ",
    },
  ];


  return (
    <section className="your-perfect-match-section spacer pb-5 overflow-visible">
      <div className="container mx-auto">
        <div className="row justify-center ">
          <div className="col-lg-8 text-center">
            <h2 className="display-4 text-[25px] lg:text-[40px] text-center md:text-[32px] font-[600] fw-bold family-reemkufi text-dark mb-3">
              Your Perfect Match Is Just Around The Corner
            </h2>
          </div>
        </div>
      </div>


      <div className="margin"></div>
      <div
        className="section-wrapper"
      // style={{
      //  height: "700px",
      //  overflow: "hidden",
      // }}
      >
        <section className="section portfolio" ref={containerRef}>


          <h2 className="portfolio_title fill parallax preload-hidden mb-5">Matches</h2>
          <h2 className="portfolio_title stroke parallax preload-hidden mb-5">Matches</h2>




          {profiles.map((profile, i) => (
            <div className="panel" key={i}>
              <div className="panel_item">
                <img
                  className={`panel_img ${i < 5 ? "firstAn" : "secondAn"}`}
                  src={profile.img}
                  alt={`portfolio-${i}`}
                />
                <div className="profile-info family-inter text-[19px]">
                  <h4>{profile.name}</h4>
                  <div className="text-[#ADADAD] text-[11px] leading-[13px] sm:text-[13px] sm:leading-[16px]">
                    <p>{profile.location}</p>
                    <span>{profile.km}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

      </div>


      {/* <div className="margin"></div>
      <div className="spacer"></div> */} 
    </section>
  );
}
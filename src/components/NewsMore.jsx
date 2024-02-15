import React from 'react';
import { NewsContext } from '../context/NewsContext';

const NewsMore = () => {
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* <!-- left --> */}
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
          {/* <!-- news item --> */}
          <div className="col-span-12 grid grid-cols-12 gap-4">
            {/* <!-- info --> */}
            <div className="col-span-12 lg:col-span-4">
              <a href="#"
              ><h3
                className="mb-2.5 text-2xl font-bold lg:text-[28px]"
              >
                  Cities have stopped being the engines of
                  growth and opportunity they once were
                </h3></a
              >
              <p className="text-base text-[#5C5955]">
                The pandemic is dealing prodigious blows to
                cities across the country. But the world can’t
                hope to thrive again if its cities don’t—they’re
                the places that have historically supplied the
                keys for unlocking human potential. Though beset
                by racism and other injustices, cities not only
                provided shared, robust public infrastructure
                like schools, libraries and transit systems,
                they stirred together vast numbers of people
                from different cultures and classes.
              </p>
              <p className="mt-5 text-base text-[#5C5955]">
                1 hour ago
              </p>
            </div>
            {/* <!-- thumb --> */}
            <div className="col-span-12 lg:col-span-8">
              <img
                className="w-full"
                src="./assets/thumb_lg.png"
                alt="thumb"
              />
              <p className="mt-5 text-base text-[#5C5955]">
                Illustration: Karolis Strautniekas
              </p>
            </div>
          </div>
          {/* <!-- news item ends -->
          <!-- news item --> */}
          <div
            className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8"
          >
            {/* <!-- info --> */}
            <div className="col-span-12 md:col-span-6">
              <a href=""
              ><h3
                className="mb-2.5 text-xl font-bold lg:text-2xl"
              >
                  Gold hits eight-month low as higher bond
                  yields dent its appeal
                </h3></a
              >
              <p className="text-base text-[#292219]">
                Exchange traded funds tracking the metal sustain
                biggest outflows in a year
              </p>
              <p className="mt-5 text-base text-[#5C5955]">
                1 hour ago
              </p>
            </div>
            {/* <!-- thumb --> */}
            <div className="col-span-12 md:col-span-6">
              <img
                className="w-full"
                src="./assets/thumb.png"
                alt="thumb"
              />
            </div>
          </div>
          {/* <!-- news item ends -->
          <!-- Repeat other news items similarly --> */}
        </div>
        {/* <!-- right --> */}
        <div className="col-span-12 self-start xl:col-span-4">
          <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
            {/* <!-- news item --> */}
            <div className="col-span-12 mb-6 md:col-span-8">
              <img
                className="w-full"
                src="./assets/thumb.png"
                alt="thumb"
              />
              {/* <!-- info --> */}
              <div className="col-span-12 mt-6 md:col-span-4">
                <a href="#"
                ><h3
                  className="mb-2.5 text-xl font-bold lg:text-[20px]"
                >
                    Why is Uber selling its
                    autonomous-vehicle division?
                  </h3></a
                >
                <p className="text-base text-[#292219]">
                  Self-driving cars were meant to be its
                  future
                </p>
                <p className="mt-5 text-base text-[#94908C]">
                  25 Feb 2021
                </p>
              </div>
            </div>
            {/* <!-- news item ends -->
            <!-- Repeat other news items similarly --> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsMore;

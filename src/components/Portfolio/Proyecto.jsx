import React from "react";

const Proyecto = ({ proyect, t }) => {
  // Props - Proyect
  const {
    id,
    img,
    title,
    category,
    description,
    technologies,
    link_github,
    link_deploy,
  } = proyect;

  return (
    <div className="  rounded bg-card-color overflow-hidden shadow-lg flex flex-col ">
      <a href="#"></a>
      {/* Imagen */}
      <div className="relative ">
        <a href="#">
          <img className="w-full " src={img} alt={`${title} img`} />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
        <a href="#!">
          <div className="text-xs absolute rounded-lg top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 ">
            {category}
          </div>
        </a>
      </div>

      {/* Title and description */}
      <div className="px-6 py-4 mb-auto">
        <a
          href="#"
          className="text-green-color font-bold text-2xl  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
        >
          {title}
        </a>
        <p className="text-white text-1xl ">{description}</p>
      </div>

      {/* Tecnologies */}
      <div className="items-start mb-2  space-y-2 md:flex-col ">
        {technologies.map((tecno, index) => (
          <p
            key={index}
            className="inline-block bg-green-color rounded-full px-3 py-1 text-sm font-semibold text-black mr-2"
          >
            #{tecno}
          </p>
        ))}
      </div>
      {/* Github and Demo */}
      <div className="px-6 py-3 bg-gray-100 flex flex-row items-center justify-around ">
        {/* Github */}
        <a href={link_github} target="_blank">
          <span
            href="#"
            className="p-2 text-xs font-regular bg-gray-100 text-gray-900 mr-1 flex flex-row items-center"
          >
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 73 73"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 rounded-full hover:bg-sky-500 transition duration-500 ease-in-out inline-block"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>team-collaboration/version-control/github</title>{" "}
                <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                <g
                  id="team-collaboration/version-control/github"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="container"
                    transform="translate(2.000000, 2.000000)"
                    fillRule="nonzero"
                  >
                    {" "}
                    <rect
                      id="mask"
                      stroke="#000000"
                      strokeWidth="2"
                      fill="#000000"
                      x="-1"
                      y="-1"
                      width="71"
                      height="71"
                      rx="14"
                    >
                      {" "}
                    </rect>{" "}
                    <path
                      d="M58.3067362,21.4281798 C55.895743,17.2972267 52.6253846,14.0267453 48.4948004,11.615998 C44.3636013,9.20512774 39.8535636,8 34.9614901,8 C30.0700314,8 25.5585181,9.20549662 21.4281798,11.615998 C17.2972267,14.0266224 14.0269912,17.2972267 11.615998,21.4281798 C9.20537366,25.5590099 8,30.0699084 8,34.9607523 C8,40.8357654 9.71405782,46.1187277 13.1430342,50.8109917 C16.5716416,55.5036246 21.0008949,58.7507436 26.4304251,60.5527176 C27.0624378,60.6700211 27.5302994,60.5875152 27.8345016,60.3072901 C28.1388268,60.0266961 28.290805,59.6752774 28.290805,59.2545094 C28.290805,59.1842994 28.2847799,58.5526556 28.2730988,57.3588401 C28.2610487,56.1650247 28.2553926,55.1235563 28.2553926,54.2349267 L27.4479164,54.3746089 C26.9330843,54.468919 26.2836113,54.5088809 25.4994975,54.4975686 C24.7157525,54.4866252 23.9021284,54.4044881 23.0597317,54.2517722 C22.2169661,54.1004088 21.4330982,53.749359 20.7075131,53.1993604 C19.982297,52.6493618 19.4674649,51.9294329 19.1631397,51.0406804 L18.8120898,50.2328353 C18.5780976,49.6950097 18.2097104,49.0975487 17.7064365,48.4426655 C17.2031625,47.7871675 16.6942324,47.3427912 16.1794003,47.108799 L15.9336039,46.9328437 C15.7698216,46.815909 15.6178435,46.6748743 15.4773006,46.511215 C15.3368806,46.3475556 15.2317501,46.1837734 15.1615401,46.0197452 C15.0912072,45.855594 15.1494901,45.7209532 15.3370036,45.6153308 C15.5245171,45.5097084 15.8633939,45.4584343 16.3551097,45.4584343 L17.0569635,45.5633189 C17.5250709,45.6571371 18.104088,45.9373622 18.7947525,46.4057156 C19.4850481,46.8737001 20.052507,47.4821045 20.4972521,48.230683 C21.0358155,49.1905062 21.6846737,49.9218703 22.4456711,50.4251443 C23.2060537,50.9284182 23.9727072,51.1796248 24.744894,51.1796248 C25.5170807,51.1796248 26.1840139,51.121096 26.7459396,51.0046532 C27.3072505,50.8875956 27.8338868,50.7116403 28.3256025,50.477771 C28.5362325,48.9090515 29.1097164,47.7039238 30.0455624,46.8615271 C28.7116959,46.721353 27.5124702,46.5102313 26.4472706,46.2295144 C25.3826858,45.9484285 24.2825656,45.4922482 23.1476478,44.8597436 C22.0121153,44.2280998 21.0701212,43.44374 20.3214198,42.5080169 C19.5725954,41.571802 18.9580429,40.3426971 18.4786232,38.821809 C17.9989575,37.300306 17.7590632,35.5451796 17.7590632,33.5559381 C17.7590632,30.7235621 18.6837199,28.3133066 20.5326645,26.3238191 C19.6665366,24.1944035 19.7483048,21.8072644 20.778215,19.1626478 C21.4569523,18.951772 22.4635002,19.1100211 23.7973667,19.6364115 C25.1314792,20.1630477 26.1082708,20.6141868 26.7287253,20.9882301 C27.3491798,21.3621504 27.8463057,21.6790175 28.2208409,21.9360032 C30.3978419,21.3277217 32.644438,21.0235195 34.9612442,21.0235195 C37.2780503,21.0235195 39.5251383,21.3277217 41.7022622,21.9360032 L43.0362517,21.0938524 C43.9484895,20.5319267 45.0257392,20.0169716 46.2654186,19.5488642 C47.5058357,19.0810026 48.4543466,18.9521409 49.1099676,19.1630167 C50.1627483,21.8077563 50.2565666,24.1947724 49.3901927,26.324188 C51.2390143,28.3136755 52.1640399,30.7245457 52.1640399,33.556307 C52.1640399,35.5455485 51.9232849,37.3062081 51.444357,38.8393922 C50.9648143,40.3728223 50.3449746,41.6006975 49.5845919,42.5256002 C48.8233486,43.4503799 47.8753296,44.2285916 46.7404118,44.8601125 C45.6052481,45.4921252 44.504759,45.9483056 43.4401742,46.2293914 C42.3750975,46.5104772 41.1758719,46.7217219 39.8420054,46.8621419 C41.0585683,47.9149226 41.6669728,49.5767225 41.6669728,51.846804 L41.6669728,59.2535257 C41.6669728,59.6742937 41.8132948,60.0255895 42.1061847,60.3063064 C42.3987058,60.5865315 42.8606653,60.6690374 43.492678,60.5516109 C48.922946,58.7498829 53.3521992,55.5026409 56.7806837,50.810008 C60.2087994,46.117744 61.923472,40.8347817 61.923472,34.9597686 C61.9222424,30.0695396 60.7162539,25.5590099 58.3067362,21.4281798 Z"
                      id="Shape"
                      fill="#FFFFFF"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </span>
        </a>

        {/* Deploy */}
        {/* <a href="link_deploy" target="_blank">
          <span
            href="#"
            className="text-xs  font-regular text-gray-200 mr-1 flex flex-row items-center"
          >
            <svg
              fill="#000000"
              width="64px"
              height="64px"
              viewBox="0 0 36.00 36.00"
              version="1.1"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 rounded-full hover:bg-sky-500 transition duration-500 ease-in-out inline-block"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>deploy-solid</title>{" "}
                <path
                  class="clr-i-solid clr-i-solid-path-1"
                  d="M33,2H22.1a1,1,0,0,0,0,2h8.53l-8.82,9a1,1,0,1,0,1.43,1.4L32,5.46V13.9a1,1,0,0,0,2,0V3A1,1,0,0,0,33,2Z"
                />
                <path
                  class="clr-i-solid clr-i-solid-path-2"
                  d="M12.46,10.73a1,1,0,0,0-1,0l-8.68,5L12,21l9.19-5.26Z"
                />
                <path
                  class="clr-i-solid clr-i-solid-path-3"
                  d="M2,27.73a1,1,0,0,0,.5.87L11,33.46v-11L2,17.28Z"
                />
                <path
                  class="clr-i-solid clr-i-solid-path-4"
                  d="M13,33.46l8.5-4.86a1,1,0,0,0,.5-.87V17.29l-9,5.15Z"
                />{" "}
                <rect x="0" y="0" width="36" height="36" fill-opacity="0" />{" "}
              </g>
            </svg>
          </span>
        </a> */}

        {/* Video */}

        <a href="" target="_blank">
          <span
            href="#"
            className="text-xs font-regular text-gray-200 mr-1 flex flex-row items-center"
          >
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 rounded-full hover:bg-sky-500 transition duration-500 ease-in-out inline-block"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </g>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Proyecto;

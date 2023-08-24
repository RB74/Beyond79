import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

const ResourceMaps = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  const onResourceCenterText2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconamoonsearchLightClick = useCallback(() => {
    // Please sync "Search" to the project
  }, []);

  const onBigButtonContainerClick = useCallback(() => {
    // Please sync "Get Involved" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[2746px] overflow-hidden text-left text-xl text-white font-montserrat">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[403px] object-cover"
        alt=""
        src="/rectangle-1@2x.png"
      />
      <img
        className="absolute top-[45px] left-[237px] w-[454px] h-[120px] object-cover"
        alt=""
        src="/link--betterevidenceproject-rev-gold-widepng@2x.png"
      />
      <div className="absolute top-[160px] left-[calc(50%_-_519px)] w-[1150px] flex flex-col items-start justify-start gap-[31px] text-gray-200">
        <div className="flex flex-row items-center justify-start gap-[23px]">
          <div
            className="relative font-medium cursor-pointer"
            onClick={onHomeTextClick}
          >
            Home
          </div>
          <img
            className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
            alt=""
            src="/eparrowdownbold.svg"
          />
          <div className="relative text-white">Resource Center</div>
        </div>
        <b className="relative text-[55px] text-white">Resource Center</b>
      </div>
      <div className="absolute top-[calc(50%_-_769px)] left-[calc(50%_-_959px)] bg-white w-[1920px] h-[1440px]" />
      <div className="absolute top-[804px] left-[298px] font-medium text-black text-center">
        Access additional resource our “special collections”:
      </div>
      <div className="absolute top-[51px] left-[616px] rounded-8xs bg-gray-300 w-[415px] h-8 flex flex-row items-center justify-center gap-[65px] text-[22px]">
        <div className="w-[307px] flex flex-row items-center justify-center gap-[33px]">
          <div className="relative leading-[140.9%] font-semibold">Home</div>
          <div
            className="relative text-lg leading-[140.9%] font-medium text-gainsboro cursor-pointer"
            onClick={onResourceCenterText2Click}
          >
            Resource Center
          </div>
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 cursor-pointer"
          alt=""
          src="/iconamoonsearchlight.svg"
          onClick={onIconamoonsearchLightClick}
        />
      </div>
      <div className="absolute bottom-[0px] left-[-11px] w-[1920px] h-[541px]">
        <div className="absolute bottom-[0px] left-[0px] bg-gray-100 w-[1920px] h-[541px]" />
        <div className="absolute bottom-[128.99px] left-[calc(50%_-_870.25px)] box-border w-[1241.5px] h-[0.5px] border-t-[0.5px] border-solid border-lavender" />
        <div className="absolute bottom-[420px] left-[calc(50%_-_492px)]" />
        <div className="absolute bottom-[69px] left-[calc(50%_-_696px)] w-[1040.93px] h-[60px] text-base">
          <div className="absolute bottom-[29.86px] left-[calc(50%_-_520.47px)] leading-[30px] inline-block w-[314px]">
            © 2023 George Mason University
          </div>
          <div className="absolute bottom-[0px] left-[calc(50%_+_75.52px)] leading-[30px] text-right inline-block w-[444.95px]">
            <span className="text-darkgray">All Rights Reserved</span>
            <span className="text-slategray">{` | `}</span>
            <span className="[text-decoration:underline]">
              Terms and Conditions
            </span>
            <span className="text-slategray">{` | `}</span>
            <span className="[text-decoration:underline]">Privacy Policy</span>
          </div>
        </div>
        <b className="absolute bottom-[343px] left-[273px] text-13xl leading-[22px] text-orange">
          Ideas with Impact
        </b>
        <div className="absolute bottom-[167px] left-[294px] flex flex-row items-center justify-start gap-[22px]">
          <div className="relative w-[11px] h-[19px]">
            <div className="absolute h-[189.47%] w-[327.27%] top-[-45.29%] right-[-116.81%] bottom-[-44.19%] left-[-110.46%] rounded-lg bg-secondary-colors-color-2 hidden" />
            <img
              className="absolute h-[94.74%] w-[89.26%] top-[2.08%] right-[2.19%] bottom-[3.19%] left-[8.55%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/facebook.svg"
            />
          </div>
          <div className="relative w-[19px] h-[15px]">
            <div className="absolute h-[240%] w-[189.47%] top-[-70.7%] right-[-46.58%] bottom-[-69.3%] left-[-42.9%] rounded-lg bg-secondary-colors-color-2 hidden" />
            <img
              className="absolute h-[97.36%] w-[94.74%] top-[0.62%] right-[0.79%] bottom-[2.02%] left-[4.47%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/twitter.svg"
            />
          </div>
        </div>
        <div className="absolute bottom-[362px] left-[calc(50%_+_62px)]" />
        <div className="absolute bottom-[287px] left-[1038px] flex flex-col items-start justify-start gap-[32px]">
          <b className="relative leading-[22px]">Contacts us</b>
          <div className="flex flex-col items-start justify-start gap-[18px] text-base">
            <div className="relative w-[293px] h-[52px]">
              <img
                className="absolute top-[calc(50%_-_26px)] left-[calc(50%_-_146.5px)] w-5 h-[25.7px]"
                alt=""
                src="/spacer-icon-wrapper.svg"
              />
              <div className="absolute top-[calc(50%_-_26px)] left-[calc(50%_-_102.5px)] leading-[26px] inline-block w-[249px]">
                4400 University Drive, Fairfax, Virginia 22030
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[24px]">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/line-roundedemail.svg"
                  />
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/line-roundedchevron-down.svg"
                  />
                </div>
              </div>
              <div className="relative leading-[26px] inline-block w-[226px] shrink-0">
                Email: bep@gmu.edu
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[191px] left-[calc(50%_-_333px)] flex flex-col items-start justify-start gap-[30px]">
          <b className="relative leading-[22px]">Home</b>
          <div className="flex flex-col items-start justify-start gap-[18px] text-base">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedpassword.svg"
                />
                <div className="relative leading-[26px]">Our Story</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedchevron-down1.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedpassword1.svg"
                />
                <div className="relative leading-[26px]">Resource Center</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedchevron-down2.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedpassword2.svg"
                />
                <div className="relative leading-[26px]">Get Involved</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedchevron-down3.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedpassword3.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedchevron-down4.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[186px] left-[calc(50%_-_175px)] flex flex-col items-start justify-start gap-[30px]">
          <b className="relative leading-[22px]">Support</b>
          <div className="flex flex-col items-start justify-start gap-[18px] text-base">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedpassword4.svg"
                />
                <div className="relative leading-[26px]">Contact via Skype</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedchevron-down5.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedpassword5.svg"
                />
                <div className="relative leading-[26px]">Title IX</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedchevron-down6.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedpassword6.svg"
                />
                <div className="relative leading-[26px]">Accessibility</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedchevron-down7.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedpassword7.svg"
                />
                <div className="relative leading-[26px]">Jobs</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedchevron-down8.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedpassword8.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/line-roundedchevron-down9.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-[414px] left-[264px] w-[363px] h-[115px] object-cover"
          alt=""
          src="/link--betterevidenceproject-rev-gold-widepng1@2x.png"
        />
      </div>
      <div className="absolute top-[392px] left-[0px] bg-antiquewhite shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1554px] h-[134px]" />
      <div className="absolute top-[422px] left-[469px] w-[260px] h-[73px] text-lg">
        <div className="absolute top-[0px] left-[0px] rounded-6xs bg-cadetblue w-[260px] h-[73px]" />
        <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_120px)] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          BROWSE OUR RESOURCE
        </div>
      </div>
      <div className="absolute top-[880px] left-[464px] w-[260px] h-[73px] text-lg">
        <div className="absolute top-[0px] left-[0px] rounded-6xs bg-cadetblue w-[260px] h-[73px]" />
        <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_84px)] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          MARS REPOSITORY
        </div>
      </div>
      <div className="absolute top-[880px] left-[830px] w-[260px] h-[73px] text-lg">
        <div className="absolute top-[0px] left-[0px] rounded-6xs bg-cadetblue w-[260px] h-[73px]" />
        <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_119px)] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          WAR PREVENTION CASES
        </div>
      </div>
      <div className="absolute top-[422px] left-[826px] w-[260px] h-[73px] text-lg">
        <div className="absolute top-[0px] left-[0px] rounded-6xs bg-cadetblue w-[260px] h-[73px]" />
        <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_122px)] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          RESOURCE LIBRARY DATA
        </div>
      </div>
      <div className="absolute top-[559px] left-[271px] text-base font-inter text-black text-center inline-block w-[1020px] h-[165px]">
        <p className="m-0">{`The Better Evidence Project’s Resource Center provides access to BEP-produced articles and reports, links to other sources from around the world (in the section of our site called “Partner Resources”), access to a variety of practitioner and academic resources which are made available through George Mason University Libraries’ Mason Archival Repository Service known as `}</p>
        <p className="m-0">
          MARS and a special collection of case summaries that highlight
          examples of war prevention.
        </p>
        <p className="m-0">{` There are three ways to access the full repository of Better Evidence evidenced base: `}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          1) View the map below for a simple search of geographically specific
          materials.
        </p>
        <p className="m-0">
          {" "}
          2) Check out our browse resources section to search by region or
          resource type.
        </p>
        <p className="m-0"> 3) Search materials in a fully searchable table.</p>
      </div>
      <div className="absolute top-[989.25px] left-[245.25px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)] box-border w-[1066.5px] h-[1.5px] border-t-[1.5px] border-solid border-orange" />
      <div className="absolute top-[1018px] left-[260px] text-13xl font-inter text-seagreen text-center">
        How To Use The Map
      </div>
      <div className="absolute top-[1064.25px] left-[273.25px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)] box-border w-[286.5px] h-[1.5px] border-t-[1.5px] border-solid border-black" />
      <div className="absolute top-[1082px] left-[274px] text-[inherit] text-black inline-block w-[1003px] h-[473px] font-inter">
        <p className="m-0">
          The map below provides an interactive, searchable interface of all
          peacebuilding-related resources available in the MARS repository or as
          direct links to resources created by organizations or institutions
          engaged in peacemaking and war prevention.
        </p>
        <p className="m-0">&nbsp;</p>
        <ul className="m-0 pl-[21px]">
          <li className="mb-0">
            <span>Select the search icon in the top green bar</span>
          </li>
          <li className="mb-0">
            <span>
              Use the text search option to quickly search across the resources’
              title, abstract, country of focus, description, and more.
            </span>
          </li>
          <li className="mb-0">
            <span>
              Use the filter option Resource Type to find different types of
              resources created by like-minded partner organizations.
            </span>
          </li>
          <li className="mb-0">
            <span>
              Select an orange icon on the map below to find out more
              information about the available resources. Most locations will
              have multiple resources attached to them. When the box appears,
              click on Browse Features to pull up the box for each source
              relevant to that location. The sources appear one at a time so you
              must use the arrow at the top of the box to move from one source
              to the next.
            </span>
          </li>
          <li className="mb-0">
            <span>
              For icons in a location in which the counties are small or close
              together, the zoom feature is available to magnify the map so that
              additional icons appear, representing different
              conflicts/countries.
            </span>
          </li>
          <li className="mb-0">
            <span>
              In each box, the source will have a link that will take the user
              either to the George Mason University MARS repository for the full
              source or to the outside link where the source is accessible.
            </span>
          </li>
        </ul>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          Note: All Resources displayed in this map will have links to the
          record in the MARS repository if it is housed there or the website
          where the full resource can be viewed.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          <i>
            *For the best experience with our map, please use a desktop or
            laptop and the latest version of one of the following browsers:
            Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.
          </i>
        </p>
      </div>
      <img
        className="absolute top-[1486px] left-[calc(50%_-_502px)] w-[1004px] h-[587px] object-cover"
        alt=""
        src="/rectangle-4448@2x.png"
      />
      <div
        className="absolute top-[45px] left-[1078px] rounded-8xs bg-white flex flex-row py-3 pr-3.5 pl-6 items-start justify-start cursor-pointer text-teal font-source-sans-pro"
        onClick={onBigButtonContainerClick}
      >
        <div className="relative leading-[20px] font-semibold">
          Get Involved
        </div>
      </div>
    </div>
  );
};

export default ResourceMaps;

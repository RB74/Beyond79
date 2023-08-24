import React, { useCallback } from "react";

const LandingPage = () => {
  const onBigButtonContainerClick = useCallback(() => {
    // Please sync "Get Involved" to the project
  }, []);

  const onResourceCenterText1Click = useCallback(() => {
    // Please sync "Resource+Maps" to the project
  }, []);

  const onIconamoonsearchLightClick = useCallback(() => {
    // Please sync "Search" to the project
  }, []);

  const onGroupContainer5Click = useCallback(() => {
    // Please sync "Landing Page1.A" to the project
  }, []);

  return (
    <div className="relative  w-full  h-[3965px] overflow-hidden text-left text-xl text-white font-montserrat">
      <div className="h-[662px] flex  justify-between bg-no-repeat bg-cover bg-[url('../public/image-13@2x.png')]">
        <div className=" mt-[15px]  h-[600px]  text-mini font-verdana">
          <img
            className=" w-[516px]  object-cover"
            alt=""
            src="/link--betterevidenceproject-rev-gold-widepng2@2x.png"
          />
          <div className="block-green">
            <div className="[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.5)]">
              <p className="m-0">George Mason</p>
              <p className="m-0">University</p>
            </div>
          </div>
          <div className="block-green">
            <div className=" [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.5)]">
              Center for Peacemaking Practice
            </div>
          </div>
          <div className=" block-green">
            <div className="[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.5)]">
              <p className="m-0">Carter School</p>
              <p className="m-0">for Peace and Conflict Resolution</p>
            </div>
          </div>
        </div>
        <div className="rounded-8xs mt-[31px] h-8 flex flex-row items-center justify-center gap-[65px] text-[22px] text-white font-montserrat">
          <div className="flex flex-row items-center justify-center gap-[33px]">
            <div className="relative leading-[140.9%] font-semibold">Home</div>
            <div className="relative text-lg leading-[140.9%] font-medium text-gainsboro-100 cursor-pointer">
              Our Story
            </div>
            <div
              className="relative text-lg leading-[140.9%] font-medium text-gainsboro-100 cursor-pointer"
              onClick={onResourceCenterText1Click}
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
          <button
            className="rounded-8xs text-teal  bg-white  leading-[20px] font-semibold flex flex-row py-3 pr-3.5 pl-6 items-start justify-start cursor-pointer"
            onClick={onBigButtonContainerClick}
          >
            Get Involved
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="bg-no-repeat w-[634px] h-[733px] bg-cover bg-[url('../public/rectangle-3@2x.png')]">
          <div>Welcome To The Better Evidence</div>
          <div className="text-lg leading-[154.9%] flex items-center w-[543px] h-[117px] [text-shadow:0px_4px_10px_rgba(0,_0,_0,_0.25)]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">
                Through its Resource Center, BEP curates and constantly updates
                a wide array of evidence-based materials to enable
                practitioners,
              </p>
              <p className="m-0">
                donors, and policymakers, to strengthen their efforts to prevent
                and end wars and armed conflicts.
              </p>
            </span>
          </div>
        </div>
        <div className="bg-white shadow-[0px_4px_24px_rgba(103,_103,_103,_0.1)] w-[474px] h-[733px]"></div>
      </div>

      {/* <div className="absolute top-[878px] left-[860px] w-[379px] h-[315px] flex flex-col items-start justify-start gap-[20px] text-center text-lg text-dimgray">
        <div className="relative leading-[154.9%] flex items-center justify-center w-[420px]">{`The Better Evidence Project (BEP) connects the most useful evidence developed by scholars and practitioners with other practitioners, policymakers, donors, and scholars who seek evidence-based insights to guide their work. `}</div>
        <div className="relative leading-[154.9%] flex items-center justify-center w-[420px]">
          BEP addresses gaps in the knowledge base in the field of conflict
          resolution and brings existing evidence to those working to prevent
          war.
        </div>
      </div> */}

      <div className="rounded-3xs bg-whitesmoke shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1001px] overflow-hidden text-45xl text-chocolate-100 font-verdana">
        <i className="text-17xl">What Is The Cost Of Violent Conflict?</i>
        <div className=" text-black">100</div>
        <div className=" text-black">14.4</div>
        <div className=" text-black">48.9</div>
        <div className="text-base">Million Forcibly Displaced</div>
        <div className=" text-base">Trillion Dollars ($) a year</div>
        <div className="text-base">Million Face Starvation</div>
      </div>
      <div className="absolute top-[1636px] left-[159px] w-[1237px] h-[633px] text-center text-[45px] text-gray-100">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-200 w-[1237px] h-[633px]" />
        <div className="absolute top-[100px] left-[calc(50%_-_329.5px)] w-[659.09px] flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start gap-[25px]">
            <b className="relative leading-[50px] inline-block w-[680px]">
              BEP Seeks To Decrease The Cost Of War
            </b>
            <div className="relative text-6xl leading-[27px] text-black inline-block w-[923px] h-[163px] shrink-0">
              To that end, BEP seeks to bring together and promote evidence from
              around the world about what types of peacemaking efforts succeed
              under what kinds of contexts, BEP supports those who will decrease
              warfare. BEP is focused on results. When peacemaking is guided by
              evidence-based insights, it will be more effective in preventing
              and ending wars, and there will be fewer costs of war.
            </div>
          </div>
        </div>
      </div>

      <b className="absolute top-[2388px] left-[861px] text-[55px] leading-[42px] text-gray-100 text-center">
        Get Involved
      </b>
      <i className="absolute top-[2454px] left-[795px] text-lg leading-[154.9%] flex font-semibold text-seagreen-200 text-center items-center w-[515px] h-[104px]">
        <span className="[line-break:anywhere] w-full">
          <p className="[margin-block-start:0] [margin-block-end:7px]">{`Presenting Useful Evidence to Inform `}</p>
          <p className="m-0">Peacemaking Practice</p>
        </span>
      </i>
      <div className="absolute top-[2590px] left-[60px] bg-antiquewhite w-[527px] h-[598px]" />
      <img
        className="absolute top-[2403px] left-[188px] w-[563px] h-[671px] object-cover"
        alt=""
        src="/rectangle-21@2x.png"
      />
      <div className="absolute top-[calc(50%_+_575.5px)] left-[calc(50%_+_15px)] w-[465px] h-[394px] flex flex-col items-start justify-start gap-[20px] text-gray-100">
        <div className="relative leading-[154.9%] flex items-center w-[465px]">
          BEP invites partners to join us in harnessing useful research to
          prevent and end war.
        </div>
        <div className="relative leading-[154.9%] flex items-center w-[431px]">
          Submit your research or suggest other materials for peer review for
          our Resource Library. Join our pool of reviewers who help discern
          sound evidence to add to the Resource Library.
        </div>
        <div className="relative leading-[154.9%] flex items-center w-[417px]">
          Help us help peacemakers to be more effective.
        </div>
      </div>
      <div className="absolute top-[2915px] left-[784px] flex flex-row items-center justify-start gap-[30px] text-lg">
        <div className="bg-teal flex flex-row py-[15px] px-[50px] items-center justify-center gap-[15px]">
          <div className="relative leading-[140.9%] font-semibold">Donate</div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/biarrowup.svg"
          />
        </div>
        <div className="relative bg-white w-[235px] h-[71px] text-center text-xl">
          <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-center gap-[6px]">
            <div className="bg-teal flex flex-row items-start justify-start">
              <div className="relative leading-[140.9%] font-semibold flex items-center justify-center w-[232px] shrink-0">
                Submit Your Work
              </div>
            </div>
            <div className="bg-teal h-[34px] flex flex-row items-center justify-center">
              <div className="relative leading-[140.9%] font-semibold flex items-center justify-center w-[235px] shrink-0">
                Become a Reviewer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_+_1483.5px)] left-[calc(50%_-_1029px)] w-[1870px] h-[557px] text-smi">
        <div className="absolute top-[calc(50%_-_278.5px)] left-[calc(50%_-_935px)] bg-gray-100 w-[1870px] h-[557px]" />
        <img
          className="absolute bottom-[244.57px] left-[calc(50%_-_329.39px)] w-[992.59px] h-[1.93px]"
          alt=""
          src="/line-135.svg"
        />
        <div className="absolute bottom-[474.84px] left-[calc(50%_-_162.14px)] w-[45.21px] h-[16.58px]" />
        <div className="absolute bottom-[211px] left-[calc(50%_-_404px)] w-[995.57px] h-[23px]">
          <div className="absolute bottom-[0px] left-[calc(50%_-_497.79px)] leading-[30px] inline-block w-[360.31px] h-[23px]">
            © 2023 George Mason University
          </div>
          <div className="absolute bottom-[0px] left-[calc(50%_-_315.15px)] leading-[30px] text-right inline-block w-[812.93px] h-[23px]">
            <span className="text-darkgray">All Rights Reserved</span>
            <span className="text-slategray">{` | `}</span>
            <span className="[text-decoration:underline]">
              Terms and Conditions
            </span>
            <span className="text-slategray">{` | `}</span>
            <span className="[text-decoration:underline]">Privacy Policy</span>
          </div>
        </div>
        <b className="absolute bottom-[370px] left-[522px] text-[32px] leading-[22px] text-orange">
          Ideas with Impact
        </b>
        <div className="absolute bottom-[263.79px] left-[592.29px] w-[32.63px] h-[30.15px] flex flex-row items-center justify-start gap-[22px]">
          <div className="relative w-[23px] h-[39px]">
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
              className="absolute h-[180%] w-[173.68%] top-[-40.42%] right-[-89.47%] bottom-[-39.58%] left-[15.79%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/twitter.svg"
            />
          </div>
        </div>
        <div className="absolute bottom-[431.12px] left-[calc(50%_+_3.73px)] w-[35.33px] h-[16.58px]" />
        <div className="absolute bottom-[378.36px] left-[864.66px] w-[87.72px] h-[113.06px] flex flex-col items-start justify-start">
          <div />
        </div>
        <div className="absolute bottom-[274.34px] left-[calc(50%_-_196.57px)] w-[46.71px] h-[224.62px]" />
        <div className="absolute bottom-[317.3px] left-[calc(50%_-_50.47px)] w-[75.75px] h-[191.46px]" />
        <img
          className="absolute bottom-[436px] left-[510.9px] w-[336.49px] h-[105px] object-cover"
          alt=""
          src="/link--betterevidenceproject-rev-gold-widepng@2x.png"
        />
        <div className="absolute top-[102px] left-[calc(50%_+_198.67px)] w-[251.13px] h-[183.87px] flex flex-col items-start justify-start gap-[18px] text-base">
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/line-roundedpassword.svg"
              />
              <div className="relative leading-[26px]">Contact via Skype</div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/line-roundedpassword.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/line-roundedpassword.svg"
              />
              <div className="relative leading-[26px]">Title IX</div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/line-roundedpassword.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/line-roundedpassword.svg"
              />
              <div className="relative leading-[26px]">Accessibility</div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/line-roundedpassword.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/line-roundedpassword.svg"
              />
              <div className="relative leading-[26px]">Jobs</div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/line-roundedpassword.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/line-roundedpassword.svg"
              />
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/line-roundedpassword.svg"
              />
            </div>
          </div>
        </div>
        <b className="absolute top-[66px] left-[calc(50%_-_51px)] text-xl leading-[22px] inline-block w-[89px]">
          Home
        </b>
      </div>
      <div className="absolute top-[3574px] left-[610px] flex flex-col items-start justify-start gap-[18px] text-base">
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
              src="/line-roundedpassword.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/line-roundedpassword.svg"
            />
            <div className="relative leading-[26px]">Resource Center</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/line-roundedpassword.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/line-roundedpassword.svg"
            />
            <div className="relative leading-[26px]">Get Involved</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/line-roundedpassword.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/line-roundedpassword.svg"
            />
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/line-roundedpassword.svg"
            />
          </div>
        </div>
      </div>
      <b className="absolute top-[3428px] left-[538px] text-6xl leading-[22px]">
        Home
      </b>
      <b className="absolute top-[3526px] left-[calc(50%_+_146px)] leading-[22px]">
        Support
      </b>
      <b className="absolute top-[3526px] left-[1173px] leading-[22px]">
        Contacts us
      </b>
      <div className="absolute top-[3566px] left-[1067px] flex flex-row items-center justify-start gap-[24px] text-sm">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-row items-center justify-start">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/line-roundedpassword.svg"
            />
          </div>
        </div>
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0"
          alt=""
          src="/line-roundedemail.svg"
        />
        <div className="relative leading-[26px] inline-block w-[226px] shrink-0">
          Email: bep@gmu.edu
        </div>
      </div>
      <div className="absolute top-[calc(50%_+_1616.5px)] left-[calc(50%_+_334px)] w-[235px] h-[52px] text-sm">
        <img
          className="absolute top-[calc(50%_-_26px)] left-[calc(50%_-_117.5px)] w-5 h-[27px]"
          alt=""
          src="/spacer-icon-wrapper.svg"
        />
        <div className="absolute top-[calc(50%_-_26px)] left-[calc(50%_-_78.81px)] leading-[26px] inline-block w-[196.31px]">
          4400 University Drive, Fairfax, Virginia 22030
        </div>
      </div>

      <div className="absolute top-[3258px] left-[calc(50%_-_532px)] rounded-3xs bg-chocolate-200 w-[1065px] h-[181px]" />
      <div className="absolute top-[3277px] left-[274px] text-17xl leading-[154.9%] font-semibold text-center">
        Stay Up To Date
      </div>
      <div className="absolute top-[3277px] left-[722px] w-[414px] h-[52px] text-center text-2xl text-gray-300">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white w-[414px] h-[52px]" />
        <div className="absolute top-[11px] left-[9px] leading-[154.9%] font-extralight">
          Name
        </div>
      </div>
      <div className="absolute top-[3353px] left-[722px] w-[414px] h-[52px] text-center text-2xl text-gray-300">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white w-[414px] h-[52px]" />
        <div className="absolute top-[9px] left-[11px] leading-[154.9%] font-extralight">
          Email
        </div>
      </div>
      <div
        className="absolute top-[3325px] left-[1164px] w-[133px] h-[47px] cursor-pointer text-center text-2xl"
        onClick={onGroupContainer5Click}
      >
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-teal shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)] w-[133px] h-[47px]" />
        <div className="absolute top-[5px] left-[calc(50%_-_53.5px)] leading-[154.9%] font-semibold">
          Subscribe
        </div>
      </div>
      <div className="absolute top-[3331px] left-[284px] leading-[154.9%] font-montserrat-alternates text-black text-center flex items-center justify-center w-[398px]">{`Signup to receive email updates of upcoming events and featured news. `}</div>
    </div>
  );
};

export default LandingPage;

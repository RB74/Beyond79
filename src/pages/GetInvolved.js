import React, { useCallback } from 'react';

const GetInvolved = () => {
  const onResourceCenterTextClick = useCallback(() => {
    // Please sync "Resource+Maps" to the project
  }, []);

  const onIconamoonsearchLightClick = useCallback(() => {
    // Please sync "Search" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[2220px] overflow-hidden text-left text-xl text-black font-montserrat">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[403px] object-cover"
        alt=""
        src="/rectangle-1@2x.png"
      />
      <div className="absolute top-[58px] left-[790px] rounded-8xs bg-gray-200 w-[415px] h-8 flex flex-row items-center justify-center gap-[65px] text-[22px] text-white">
        <div className="w-[307px] flex flex-row items-center justify-center gap-[33px]">
          <div className="relative leading-[140.9%] font-semibold">Home</div>
          <div
            className="relative text-lg leading-[140.9%] font-medium text-gainsboro-100 cursor-pointer"
            onClick={onResourceCenterTextClick}
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
      <img
        className="absolute top-[14px] left-[178px] w-[454px] h-[120px] object-cover"
        alt=""
        src="/link--betterevidenceproject-rev-gold-widepng@2x.png"
      />
      <div className="absolute bottom-[2px] left-[-91px] w-[1920px] h-[541px] text-white">
        <div className="absolute bottom-[0px] left-[0px] bg-gray-100 w-[1920px] h-[541px]" />
        <div className="absolute bottom-[156.75px] left-[calc(50%_-_708.25px)] box-border w-[1241.5px] h-[0.5px] border-t-[0.5px] border-solid border-lavender" />
        <div className="absolute bottom-[418px] left-[calc(50%_-_416px)]" />
        <div className="absolute bottom-[74px] left-[calc(50%_-_701px)] w-[1223.53px] h-[30px] text-lg">
          <div className="absolute bottom-[0px] left-[calc(50%_-_611.77px)] leading-[30px]">
            © 2023 George Mason University
          </div>
          <div className="absolute bottom-[0px] left-[calc(50%_+_88.77px)] leading-[30px] text-right">
            <span className="text-darkgray">All Rights Reserved</span>
            <span className="text-slategray">{` | `}</span>
            <span className="[text-decoration:underline]">
              Terms and Conditions
            </span>
            <span className="text-slategray">{` | `}</span>
            <span className="[text-decoration:underline]">Privacy Policy</span>
          </div>
        </div>
        <b className="absolute bottom-[349px] left-[294px] text-13xl leading-[22px] text-orange">
          Ideas with Impact
        </b>
        <div className="absolute bottom-[202px] left-[349px] flex flex-row items-center justify-start gap-[22px]">
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
        <div className="absolute bottom-[360px] left-[calc(50%_+_138px)]" />
        <div className="absolute bottom-[282px] left-[1188px] flex flex-col items-start justify-start gap-[32px]">
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
        <div className="absolute bottom-[182px] left-[calc(50%_-_273px)] flex flex-col items-start justify-start gap-[30px]">
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
        <div className="absolute bottom-[178px] left-[calc(50%_+_31px)] flex flex-col items-start justify-start gap-[30px]">
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
          className="absolute bottom-[412px] left-[278px] w-[363px] h-[102px] object-cover"
          alt=""
          src="/link--betterevidenceproject-rev-gold-widepng1@2x.png"
        />
      </div>
      <div className="absolute top-[201px] left-[392px] w-[1115px] flex flex-col items-start justify-start text-gray-300">
        <div className="w-[301px] flex flex-row items-center justify-start gap-[15px]">
          <div className="relative font-medium">Home</div>
          <img
            className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
            alt=""
            src="/eparrowdownbold.svg"
          />
          <div className="relative text-white">Get Involved</div>
        </div>
      </div>
      <b className="absolute top-[262px] left-[calc(50%_-_185px)] text-[60px] text-white text-center [text-shadow:0px_4px_10px_rgba(0,_0,_0,_0.1)]">
        Get Involved
      </b>
      <div className="absolute top-[52px] left-[1244px] rounded-8xs bg-white flex flex-row py-3 pr-3.5 pl-6 items-start justify-start text-teal font-source-sans-pro">
        <div className="relative leading-[20px] font-semibold">
          Get Involved
        </div>
      </div>
      <div className="absolute top-[392px] left-[0px] bg-antiquewhite shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1554px] h-16" />
      <div className="absolute top-[538px] left-[1005px] rounded-t-none rounded-b-3xs bg-gainsboro-200 w-[385px] h-[370px]" />
      <div className="absolute top-[1121px] left-[375px] bg-teal w-[280px] h-[93px]" />
      <div className="absolute top-[1121px] left-[688px] bg-chocolate w-[299px] h-[93px]" />
      <div className="absolute top-[1121px] left-[1005px] bg-seagreen w-[280px] h-[93px]" />
      <div className="absolute top-[415px] left-[274px] font-medium [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Announcements
      </div>
      <div className="absolute top-[415px] left-[521px] font-medium [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Featured News
      </div>
      <div className="absolute top-[415px] left-[751px] font-medium [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">{`Jobs & Internships`}</div>
      <div className="absolute top-[415px] left-[1013px] font-medium [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Testimonials
      </div>
      <div className="absolute top-[415px] left-[1217px] font-medium [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Videos
      </div>
      <div className="absolute top-[538px] left-[1005px] w-[385px] h-[172px]" />
      <div className="absolute top-[775px] left-[1067px] text-sm font-medium text-center">{`Winter 2021-2021 Newsletter - Issue 5 `}</div>
      <div className="absolute top-[580px] left-[375px] bg-teal w-[287px] h-[464px]" />
      <img
        className="absolute top-[486px] left-[222px] w-[366px] h-[525px] object-cover"
        alt=""
        src="/hands-1@2x.png"
      />
      <div className="absolute top-[490px] left-[637px] text-[15px] font-semibold flex items-center w-[350px] h-[66px]">
        Getting involved with the Better Evidence Project is easy! Become a part
        of our peacebuilding community.
      </div>
      <div className="absolute top-[594px] left-[690px] text-45xl font-semibold font-inter text-seagreen">
        Donate
      </div>
      <i className="absolute top-[670px] left-[693px] flex font-medium items-center w-[350px]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">Support the Better Evidence</p>
          <p className="m-0">Project</p>
        </span>
      </i>
      <div className="absolute top-[724.75px] left-[688.75px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)] box-border w-[282.5px] h-[2.5px] border-t-[2.5px] border-solid border-orange" />
      <div className="absolute top-[749px] left-[693px] text-sm font-medium flex items-center w-[308px]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">This project relies on gifts anf philanthropic</p>
          <p className="m-0">support to accomplish its vision and goals.</p>
          <p className="m-0">{`Our top priorities are increasing the research `}</p>
          <p className="m-0">opportunities BEP funds, growing partnerships,</p>
          <p className="m-0">
            and making a greater impact with this critical work.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            We invite you to make your mark for peace by investing in BEP.
          </p>
        </span>
      </div>
      <div className="absolute top-[967px] left-[642px] w-[130px] h-[63px] text-teal font-inter">
        <div className="absolute top-[0px] left-[0px] bg-lightcyan w-[130px] h-[63px]" />
        <div className="absolute top-[23px] left-[21px] font-semibold">
          DONATE
        </div>
      </div>
      <div className="absolute top-[1232px] left-[174px] text-45xl font-medium font-inter text-seagreen">
        Resources
      </div>
      <img
        className="absolute top-[1317px] left-[155px] w-[300px] h-[219px] object-cover"
        alt=""
        src="/rectangle-4442@2x.png"
      />
      <img
        className="absolute top-[1317px] left-[470px] w-[300px] h-[219px] object-cover"
        alt=""
        src="/rectangle-4443@2x.png"
      />
      <img
        className="absolute top-[1317px] left-[785px] w-[300px] h-[219px] object-cover"
        alt=""
        src="/rectangle-4444@2x.png"
      />
      <img
        className="absolute top-[1317px] left-[1100px] w-[300px] h-[219px] object-cover"
        alt=""
        src="/rectangle-4445@2x.png"
      />
      <div className="absolute top-[1305.25px] left-[164.25px] box-border w-[804.5px] h-[1.5px] border-t-[1.5px] border-solid border-orange" />
      <div className="absolute top-[1150px] left-[387px] text-11xl font-medium font-inter text-white">
        Current Initiatives
      </div>
      <div className="absolute top-[1150px] left-[1017px] text-11xl font-medium font-inter text-white">
        Submit Your Work
      </div>
      <div className="absolute top-[calc(50%_+_40px)] left-[calc(50%_-_80px)] text-11xl font-medium font-inter text-white">
        Become a Reviewer
      </div>
      <div className="absolute top-[1538px] left-[187px] text-11xl font-medium font-inter text-teal text-center [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Resource Library
      </div>
      <div className="absolute top-[1538px] left-[505px] text-11xl font-medium font-inter text-teal text-center [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        3 Minute Thesis
      </div>
      <div className="absolute top-[1538px] left-[863px] text-11xl font-medium font-inter text-teal text-center [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Education
      </div>
      <div className="absolute top-[1538px] left-[1153px] text-11xl font-medium font-inter text-teal text-center [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">{`Audio & Videos`}</div>
      <div className="absolute top-[471px] left-[1114px] text-13xl font-medium font-inter text-teal">
        Newsletter
      </div>
      <div className="absolute top-[517.25px] left-[1074.25px] box-border w-[246.5px] h-[1.5px] border-t-[1.5px] border-solid border-black" />
      <div className="absolute top-[749px] left-[1022px] text-sm font-medium text-gray-400 text-center">
        Newsletter
      </div>
      <div className="absolute top-[801px] left-[1032px] text-sm font-medium text-gray-400 text-center">
        <p className="m-0">Issue 5 of the BEP Newsletter highlights insights</p>
        <p className="m-0">from the result of the HAWENKA grant,</p>
      </div>
      <img
        className="absolute top-[538px] left-[1005px] w-[385px] h-[206px] object-cover"
        alt=""
        src="/rectangle-4446@2x.png"
      />
      <div className="absolute top-[855px] left-[1110px] rounded-[20px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)] box-border w-44 h-[41px] border-[1.5px] border-solid border-orange" />
      <div className="absolute top-[866px] left-[1153px] text-base font-medium text-center">
        Read More
      </div>
    </div>
  );
};

export default GetInvolved;

import React, { useCallback } from 'react';

const RequestHelp = () => {
  const onResourceCenterTextClick = useCallback(() => {
    // Please sync "Resource+Maps" to the project
  }, []);

  const onIconamoonsearchLightClick = useCallback(() => {
    // Please sync "Search" to the project
  }, []);

  const onBigButtonContainerClick = useCallback(() => {
    // Please sync "Get Involved" to the project
  }, []);

  const onSubmitTextClick = useCallback(() => {
    // Please sync "Request Help-1.a Update" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[2220px] overflow-hidden text-center text-xl text-white font-montserrat">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[403px] object-cover"
        alt=""
        src="/rectangle-1@2x.png"
      />
      <div className="absolute top-[58px] left-[765px] rounded-8xs bg-gray-200 w-[415px] h-8 flex flex-row items-center justify-center gap-[65px] text-left text-[22px]">
        <div className="w-[307px] flex flex-row items-center justify-center gap-[33px]">
          <div className="relative leading-[140.9%] font-semibold">Home</div>
          <div
            className="relative text-lg leading-[140.9%] font-medium text-gainsboro cursor-pointer"
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
      <div className="absolute bottom-[2px] left-[-91px] w-[1920px] h-[541px] text-left">
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
        <b className="absolute bottom-[349px] left-[294px] text-[32px] leading-[22px] text-orange">
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
      <div className="absolute top-[201px] left-[392px] w-[1115px] flex flex-col items-start justify-start text-left text-gray-300">
        <div className="w-[301px] flex flex-row items-center justify-start gap-[15px]">
          <div className="relative font-medium">Home</div>
          <img
            className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
            alt=""
            src="/eparrowdownbold.svg"
          />
          <div className="relative text-white">Help Desk</div>
        </div>
      </div>
      <b className="absolute top-[262px] left-[calc(50%_-_149px)] text-41xl [text-shadow:0px_4px_10px_rgba(0,_0,_0,_0.1)]">
        Help Desk
      </b>
      <div
        className="absolute top-[52px] left-[1244px] rounded-8xs bg-white flex flex-row py-3 pr-3.5 pl-6 items-start justify-start cursor-pointer text-left text-teal-100 font-source-sans-pro"
        onClick={onBigButtonContainerClick}
      >
        <div className="relative leading-[20px] font-semibold">
          Get Involved
        </div>
      </div>
      <b className="absolute top-[433px] left-[188px] text-41xl text-teal-100">
        Need more Resources?
      </b>
      <div className="absolute top-[506px] left-[203px] text-black">{`Have a question about materials, and resources? `}</div>
      <div className="absolute top-[628px] left-[188px] w-[1104px] h-[588px] text-gray-400">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)] box-border w-[1104px] h-[72px] border-[2px] border-solid border-black" />
        <div className="absolute top-[172px] left-[0px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)] box-border w-[1104px] h-[72px] border-[2px] border-solid border-black" />
        <div className="absolute top-[344px] left-[0px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)] box-border w-[1104px] h-[72px] border-[2px] border-solid border-black" />
        <div className="absolute top-[516px] left-[0px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)] box-border w-[1104px] h-[315px] border-[2px] border-solid border-black" />
        <div className="absolute top-[24px] left-[9px] font-light">
          Ex: Jane Doe
        </div>
        <div className="absolute top-[196px] left-[11px] font-light">
          Ex: JaneDoe@gmail.com
        </div>
        <div className="absolute top-[367px] left-[9px] font-light">
          Ex: Audio Material
        </div>
        <div className="absolute top-[139px] left-[2px] text-black">Email</div>
        <div className="absolute top-[310px] left-[-1px] text-black">
          Resource
        </div>
        <div className="absolute top-[482px] left-[3px] text-black">
          Comment
        </div>
      </div>
      <div className="absolute top-[599px] left-[188px] text-black">Name</div>
      <div className="absolute top-[1560px] left-[1116px] rounded-[25px] bg-teal-200 w-44 h-[63px]" />
      <div
        className="absolute top-[1579px] left-[1167px] font-medium cursor-pointer"
        onClick={onSubmitTextClick}
      >
        Submit
      </div>
    </div>
  );
};

export default RequestHelp;

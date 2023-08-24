import React, { useCallback } from 'react';

const FAQ = () => {
  const onHomeTextClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  const onResourceCenterTextClick = useCallback(() => {
    // Please sync "Resource+Maps" to the project
  }, []);

  const onIconamoonsearchLightClick = useCallback(() => {
    // Please sync "Search" to the project
  }, []);

  const onFrameContainer8Click = useCallback(() => {
    // Please sync "Search Result" to the project
  }, []);

  const onGetInTouchClick = useCallback(() => {
    // Please sync "Request Help- 1 Update" to the project
  }, []);

  const onBigButtonContainerClick = useCallback(() => {
    // Please sync "Get Involved" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[4432px] overflow-hidden text-left text-xl text-white font-montserrat">
      <div className="absolute top-[calc(50%_-_2215px)] left-[calc(50%_-_1016px)] bg-gainsboro-100 w-[1920px] h-[4274px]" />
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[403px] object-cover"
        alt=""
        src="/rectangle-1@2x.png"
      />
      <img
        className="absolute top-[48px] left-[245px] w-[454px] h-[120px] object-cover"
        alt=""
        src="/link--betterevidenceproject-rev-gold-widepng@2x.png"
      />
      <div className="absolute top-[176px] left-[calc(50%_-_519px)] w-[1150px] flex flex-col items-start justify-start gap-[31px] text-gray-300">
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
          <div className="relative text-white">FAQ</div>
        </div>
        <b className="relative text-[55px] text-white">
          Frequently Asked Questions (FAQs)
        </b>
      </div>
      <div className="absolute top-[48px] left-[624px] rounded-8xs bg-gray-400 w-[415px] h-8 flex flex-row items-center justify-center gap-[65px] text-[22px]">
        <div className="w-[307px] flex flex-row items-center justify-center gap-[33px]">
          <div className="relative leading-[140.9%] font-semibold">Home</div>
          <div
            className="relative text-lg leading-[140.9%] font-medium text-gainsboro-200 cursor-pointer"
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
      <div className="absolute bottom-[0px] left-[-11px] w-[1920px] h-[541px]">
        <div className="absolute bottom-[0px] left-[0px] bg-gray-200 w-[1920px] h-[541px]" />
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
        <b className="absolute bottom-[343px] left-[273px] text-[32px] leading-[22px] text-orange">
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
      <div className="absolute top-[427px] left-[calc(50%_-_279px)] text-[48px] font-semibold text-black text-center">
        How can we help you?
      </div>
      <div className="absolute top-[528px] left-[315px] w-[924px] h-[79px] text-silver">
        <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[924px] h-[79px]" />
        <div
          className="absolute top-[25px] left-[21.06px] w-[89.17px] flex flex-row items-start justify-start cursor-pointer"
          onClick={onFrameContainer8Click}
        >
          <div className="flex flex-row items-center justify-start gap-[29px]">
            <img
              className="relative w-[29px] h-[29px] overflow-hidden shrink-0"
              alt=""
              src="/iconamoonsearchlight1.svg"
            />
            <div className="relative">Search</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[632px] left-[calc(50%_-_340px)] text-5xl font-light text-seagreen [text-shadow:0px_4px_10px_rgba(0,_0,_0,_0.1)]">{`Get faster answer to our frequently asked question below. `}</div>
      <div className="absolute top-[3690px] left-[calc(50%_-_532px)] rounded-[20px] bg-dimgray shadow-[0px_4px_10px_2px_rgba(0,_0,_0,_0.1)] w-[1065px] h-[168px] overflow-hidden text-5xl">
        <div className="absolute top-[33px] left-[17px] font-medium text-orange">{`Still have questions? `}</div>
        <div className="absolute bottom-[32px] left-[47px] text-9xl flex items-center w-[792px]">{`Can’t find the answer you’re looking for? Get in touch with our team.  `}</div>
        <div className="absolute top-[48px] left-[839px] rounded-[25px] bg-teal w-[215px] h-[63px]" />
        <div
          className="absolute top-[calc(50%_-_18px)] right-[40px] font-semibold cursor-pointer"
          onClick={onGetInTouchClick}
        >
          Get in Touch
        </div>
      </div>
      <div className="absolute top-[750px] left-[calc(50%_-_457px)] flex flex-col items-start justify-start gap-[150px] text-9xl text-black">
        <div className="relative rounded bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.2)] w-[915px] h-[540px] overflow-hidden shrink-0 text-[30px]">
          <div className="absolute top-[67px] left-[32px] font-medium flex items-center w-[851px]">
            How are the materials in the Resource Center selected?
          </div>
          <div className="absolute top-[calc(50%_-_159.5px)] left-[25.5px] box-border w-[832px] h-px border-t-[1px] border-solid border-orange" />
          <div className="absolute top-[142px] left-[42px] text-5xl font-light flex items-center w-[800px] h-[218px]">{` `}</div>
          <div className="absolute bottom-[10px] left-[calc(50%_-_420.5px)] text-[25px] font-light flex items-center w-[826px] h-[448px]">
            The Better Evidence Project’s goal is to help scholarly research and
            application become complementary and integrated. We envision a fluid
            process—where evidence drives implementation and the application of
            new theories and innovative programs form the basis of new
            evidence.  The Better Evidence Project, therefore, seeks to make
            available resources that provide evidence, insights, analysis,
            experience, and in-depth research and about what has worked and not
            worked in efforts to end wars, prevent violence, and build
            sustainable peace. Our sources are chosen and curated in the
            following ways
          </div>
        </div>
        <div className="relative rounded bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.2)] w-[915px] h-[360px] overflow-hidden shrink-0">
          <div className="absolute top-[66px] left-[42px] font-medium flex items-center w-[790px]">
            What makes the BEP search engine unique?
          </div>
          <img
            className="absolute top-[115.5px] left-[33px] w-[686px] h-px"
            alt=""
            src="/line-142.svg"
          />
          <div className="absolute top-[93px] left-[44px] text-[23px] font-light flex items-center w-[811px] h-[218px]">
            If you cannot find the resources you are looking for or you want
            assistance in finding what other types of resources might be
            available, the Better Evidence Project Research Team may be able to
            help if you make a request at this link here.
          </div>
        </div>
        <div className="relative rounded bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.2)] w-[915px] h-72 overflow-hidden shrink-0">
          <div className="absolute top-[30px] left-[42px] font-medium flex items-center w-[761px]">
            If I cannot find what I am looking for, how can I get more help from
            the BEP staff?
          </div>
          <div className="absolute top-[133.5px] left-[41.5px] box-border w-[782px] h-px border-t-[1px] border-solid border-orange" />
          <div className="absolute top-[calc(50%_-_46px)] left-[56px] text-xl font-light flex items-center w-[811px] h-[198px]">
            If you cannot find the resources you are looking for or you want
            assistance in finding what other types of resources might be
            available, the Better Evidence Project Research Team may be able to
            help if you make a request at this link here.
          </div>
        </div>
        <div className="relative rounded bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.2)] w-[915px] h-[360px] overflow-hidden shrink-0">
          <div className="absolute top-[36px] left-[31px] font-medium flex items-center w-[714px]">
            Can I send to the Better Evidence Project documents, articles or
            paper for consideration to be included in the Resource Center
          </div>
          <div className="absolute top-[159.5px] left-[10.5px] box-border w-[832px] h-px border-t-[1px] border-solid border-orange" />
          <div className="absolute bottom-[4px] left-[calc(50%_-_426.5px)] text-lg flex items-center w-[811px] h-[218px]">
            Yes.  Our Resource Center is constantly growing as we add more and
            more curated resources to our repository.  Please send us any
            documents or sources that would fit our criteria for selection (see
            above).  Additionally, we encourage any organization that wishes to
            add materials to our Resource Center to contact us about becoming a
            partner organization so that we can promote relevant materials and
            provide you with tracking data regarding materials that are
            downloaded.
          </div>
        </div>
        <div className="relative rounded bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.2)] w-[915px] h-[360px] overflow-hidden shrink-0">
          <div className="absolute top-[47px] left-[28px] font-medium flex items-center w-[805px]">
            How often are new resources added to the BEP site?
          </div>
          <div className="absolute top-[93.5px] left-[21.5px] box-border w-[774px] h-px border-t-[1px] border-solid border-orange" />
          <div className="absolute top-[94px] left-[16px] text-xl font-light flex items-center w-[811px] h-[218px]">
            We are constantly seeking new materials to add to the Resource
            Center.  Our goal is to make new materials available on a weekly
            basis.  We also promote and publicize such resources when the scope
            and depth of specific issue areas, themes or cases are strengthened
            and when we put together a special collection of tailored resources
            that are useful evidence for ending war, preventing violence and
            building sustainable peace.  Our aim is to have new materials added
            every week.
          </div>
        </div>
      </div>
      <div className="absolute top-[488px] left-[calc(50%_-_222px)] font-light text-black">
        Have any questions? We’re here to assist you.
      </div>
      <div className="absolute top-[3384px] left-[calc(50%_-_532px)] bg-chocolate w-[1065px] h-[268px]" />
      <div className="absolute top-[3412px] left-[274px] text-[36px] leading-[154.9%] font-semibold text-center flex items-center justify-center w-[295px] h-[83px]">
        Stay Up To Date
      </div>
      <div className="absolute top-[3412.13px] left-[722px] w-[414px] h-[76.99px] text-center text-2xl text-gray-500">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white w-[414px] h-[76.99px]" />
        <div className="absolute top-[16.29px] left-[9px] leading-[154.9%] font-extralight flex items-center justify-center w-[65px] h-[48.86px]">
          Name
        </div>
      </div>
      <div className="absolute top-[3524.66px] left-[722px] w-[414px] h-[76.99px] text-center text-2xl text-gray-500">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white w-[414px] h-[76.99px]" />
        <div className="absolute top-[13.33px] left-[11px] leading-[154.9%] font-extralight flex items-center justify-center w-[60px] h-[48.86px]">
          Email
        </div>
      </div>
      <div className="absolute top-[3483.2px] left-[1164px] w-[133px] h-[69.59px] text-center text-2xl">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-teal shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)] w-[133px] h-[69.59px]" />
        <div className="absolute top-[7.4px] left-[calc(50%_-_53.5px)] leading-[154.9%] font-semibold flex items-center justify-center w-[108px] h-[48.86px]">
          Subscribe
        </div>
      </div>
      <div className="absolute top-[3492px] left-[284px] leading-[154.9%] font-montserrat-alternates text-black text-center flex items-center justify-center w-[398px] h-[92px]">{`Signup to receive email updates of upcoming events and featured news. `}</div>
      <div
        className="absolute top-[42px] left-[1118px] rounded-8xs bg-white flex flex-row py-3 pr-3.5 pl-6 items-start justify-start cursor-pointer text-teal font-source-sans-pro"
        onClick={onBigButtonContainerClick}
      >
        <div className="relative leading-[20px] font-semibold">
          Get Involved
        </div>
      </div>
    </div>
  );
};

export default FAQ;

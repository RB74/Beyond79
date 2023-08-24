import React, { useCallback } from 'react';

const ResultPage = () => {
  const onResourceCenterTextClick = useCallback(() => {
    // Please sync "Resource+Maps" to the project
  }, []);

  const onIconamoonsearchLightClick = useCallback(() => {
    // Please sync "Search" to the project
  }, []);

  const onBigButtonContainerClick = useCallback(() => {
    // Please sync "Get Involved" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[2485px] overflow-hidden text-left text-xl text-white font-montserrat">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[403px] object-cover"
        alt=""
        src="/rectangle-1@2x.png"
      />
      <div className="absolute top-[52px] left-[705px] rounded-8xs bg-gray-200 w-[415px] h-8 flex flex-row items-center justify-center gap-[65px] text-[22px]">
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
      <img
        className="absolute top-[10px] left-[183px] w-[539px] h-[162px] object-cover"
        alt=""
        src="/link--betterevidenceproject-rev-gold-widepng@2x.png"
      />
      <div className="absolute bottom-[-15px] left-[-328px] w-[1920px] h-[541px]">
        <div className="absolute bottom-[0px] left-[0px] bg-gray-100 w-[1920px] h-[541px]" />
        <div className="absolute bottom-[141.75px] left-[calc(50%_-_571.25px)] box-border w-[1241.5px] h-[0.5px] border-t-[0.5px] border-solid border-lavender" />
        <div className="absolute bottom-[413px] left-[calc(50%_-_498px)]" />
        <div className="absolute bottom-[68px] left-[calc(50%_-_560px)] w-[1223.53px] h-[30px] text-lg">
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
        <b className="absolute bottom-[313px] left-[481px] text-[32px] leading-[22px] text-orange">
          Ideas with Impact
        </b>
        <div className="absolute bottom-[197px] left-[267px] flex flex-row items-center justify-start gap-[22px]">
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
              src="/facebook.svg"
            />
          </div>
        </div>
        <div className="absolute bottom-[355px] left-[calc(50%_+_56px)]" />
        <div className="absolute bottom-[267px] left-[1429px] h-[132px] flex flex-col items-start justify-start gap-[32px]">
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
                    src="/facebook.svg"
                  />
                </div>
              </div>
              <div className="relative leading-[26px] inline-block w-[226px] shrink-0">
                Email: bep@gmu.edu
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[135px] left-[calc(50%_-_138px)] flex flex-col items-start justify-start gap-[30px]">
          <b className="relative leading-[22px]">Home</b>
          <div className="flex flex-col items-start justify-start gap-[18px] text-base">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
                <div className="relative leading-[26px]">Our Story</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
                <div className="relative leading-[26px]">Resource Center</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
                <div className="relative leading-[26px]">Get Involved</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[143px] left-[calc(50%_+_182px)] flex flex-col items-start justify-start gap-[30px]">
          <b className="relative leading-[22px]">Support</b>
          <div className="flex flex-col items-start justify-start gap-[18px] text-base">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
                <div className="relative leading-[26px]">Contact via Skype</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
                <div className="relative leading-[26px]">Title IX</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
                <div className="relative leading-[26px]">Accessibility</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
                <div className="relative leading-[26px]">Jobs</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/facebook.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[439px] left-[calc(50%_-_285px)] w-[898px] flex flex-col items-start justify-start gap-[40px] text-11xl text-gray-100">
        <div className="flex flex-row items-center justify-start gap-[35px] text-black">
          <img
            className="relative w-[280px] h-[178px] object-cover"
            alt=""
            src="/rectangle-691@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[25px]">
            <div className="w-[662px] flex flex-col items-start justify-start gap-[15px]">
              <b className="relative leading-[26px] flex items-center w-[525px]">
                Evidence to Action for Peace
              </b>
              <div className="relative text-4xl leading-[154.9%] text-dimgray flex items-center w-[550px]">{`BEP addresses gaps in the knowledge base in the field of conflict resolution and brings `}</div>
            </div>
            <div className="flex flex-row items-start justify-start text-6xl text-cadetblue">
              <div className="flex flex-row items-center justify-center gap-[10px]">
                <div className="relative leading-[140.9%] font-semibold">
                  Explore
                </div>
                <img
                  className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                  alt=""
                  src="/biarrowup.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[35px]">
          <img
            className="relative w-[280px] h-[178px] object-cover"
            alt=""
            src="/rectangle-6911@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[25px]">
            <div className="w-[550px] flex flex-col items-start justify-start gap-[15px]">
              <b className="relative leading-[26px] flex items-center w-[577px]">
                Community Solution and Peacebuilding
              </b>
              <div className="relative text-4xl leading-[154.9%] text-dimgray flex items-center w-[550px]">{`BEP addresses gaps in the knowledge base in the field of conflict resolution and brings `}</div>
            </div>
            <div className="flex flex-row items-start justify-start text-6xl text-cadetblue">
              <div className="flex flex-row items-center justify-center gap-[10px]">
                <div className="relative leading-[140.9%] font-semibold">
                  Explore
                </div>
                <img
                  className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                  alt=""
                  src="/biarrowup1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[35px]">
          <img
            className="relative w-[280px] h-[178px] object-cover"
            alt=""
            src="/rectangle-691@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[25px]">
            <div className="flex flex-col items-start justify-start gap-[15px]">
              <b className="relative leading-[26px] flex items-center w-[550px]">
                Evidence to Action for Peace
              </b>
              <div className="relative text-4xl leading-[154.9%] text-dimgray flex items-center w-[550px]">{`BEP addresses gaps in the knowledge base in the field of conflict resolution and brings `}</div>
            </div>
            <div className="flex flex-row items-start justify-start text-6xl text-cadetblue">
              <div className="flex flex-row items-center justify-center gap-[10px]">
                <div className="relative leading-[140.9%] font-semibold">
                  Explore
                </div>
                <img
                  className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                  alt=""
                  src="/biarrowup.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[35px]">
          <img
            className="relative w-[280px] h-[178px] object-cover"
            alt=""
            src="/rectangle-691@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[25px]">
            <div className="flex flex-col items-start justify-start gap-[15px]">
              <b className="relative leading-[26px] flex items-center w-[425px]">
                Fall 2022 Peace Week
              </b>
              <div className="relative text-4xl leading-[154.9%] text-dimgray flex items-center w-[550px]">{`BEP addresses gaps in the knowledge base in the field of conflict resolution and brings `}</div>
            </div>
            <div className="flex flex-row items-start justify-start text-6xl text-cadetblue">
              <div className="flex flex-row items-center justify-center gap-[10px]">
                <div className="relative leading-[140.9%] font-semibold">
                  Explore
                </div>
                <img
                  className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                  alt=""
                  src="/biarrowup.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[943px] flex flex-row items-center justify-start gap-[35px]">
          <img
            className="relative w-[280px] h-[178px] object-cover"
            alt=""
            src="/rectangle-6911@2x.png"
          />
          <div className="w-[952px] flex flex-col items-start justify-start gap-[25px]">
            <div className="w-[588px] flex flex-col items-start justify-start gap-[15px]">
              <b className="relative leading-[26px] flex items-center w-[588px]">
                The Importance and Value of Local Peacemaking Initiatives:
                Lessons From Africa
              </b>
              <div className="relative text-4xl leading-[154.9%] text-dimgray flex items-center w-[550px]">{`BEP addresses gaps in the knowledge base in the field of conflict resolution and brings `}</div>
            </div>
            <div className="flex flex-row items-start justify-start text-6xl text-cadetblue">
              <div className="flex flex-row items-center justify-center gap-[10px]">
                <div className="relative leading-[140.9%] font-semibold">
                  Explore
                </div>
                <img
                  className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                  alt=""
                  src="/biarrowup1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[35px]">
          <img
            className="relative w-[280px] h-[178px] object-cover"
            alt=""
            src="/rectangle-6911@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[25px]">
            <div className="flex flex-col items-start justify-start gap-[15px]">
              <b className="relative leading-[26px] flex items-center w-[425px]">
                Keeping The Peace In Somalia (Puntland)
              </b>
              <div className="relative text-4xl leading-[154.9%] text-dimgray flex items-center w-[550px]">{`BEP addresses gaps in the knowledge base in the field of conflict resolution and brings `}</div>
            </div>
            <div className="flex flex-row items-start justify-start text-6xl text-cadetblue">
              <div className="flex flex-row items-center justify-center gap-[10px]">
                <div className="relative leading-[140.9%] font-semibold">
                  Explore
                </div>
                <img
                  className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                  alt=""
                  src="/biarrowup1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[192px] left-[293px] flex flex-col items-start justify-start text-base text-gray-300">
        <div className="flex flex-row items-center justify-start gap-[15px]">
          <div className="relative font-medium">Home</div>
          <img
            className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
            alt=""
            src="/eparrowdownbold.svg"
          />
          <div className="relative text-white">Search</div>
        </div>
      </div>
      <b className="absolute top-[228px] left-[calc(50%_-_400px)] text-[65px] flex items-center w-[930px]">
        <span className="[line-break:anywhere] w-full">
          {`Search Result “ `}
          <span className="[text-decoration:underline]">Peace</span>”
        </span>
      </b>
      <div className="absolute top-[455px] left-[196px] w-[249px] h-[996px] flex flex-col items-start justify-start gap-[50px] text-[28px] text-silver">
        <div className="relative font-semibold">60 results found</div>
        <div className="w-[365px] h-[929px] flex flex-col items-center justify-start gap-[50px] text-6xl text-gray-100">
          <div className="w-[383px] flex flex-col items-start justify-start gap-[40px]">
            <div className="flex flex-col items-start justify-start gap-[25px]">
              <div className="relative font-semibold">Media Type</div>
              <div className="flex flex-col items-start justify-start gap-[20px] text-xl">
                <div className="flex flex-row items-center justify-start gap-[20px]">
                  <div className="relative w-[30px] h-[30px]">
                    <div className="absolute top-[0px] left-[0px] bg-orange w-[30px] h-[30px]" />
                    <img
                      className="absolute top-[6px] left-[6px] w-[18px] h-[18px] overflow-hidden"
                      alt=""
                      src="/icbaselinedone.svg"
                    />
                  </div>
                  <div className="relative">Video</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[20px]">
                  <div className="relative box-border w-[30px] h-[30px] border-[1px] border-solid border-gainsboro-100" />
                  <div className="relative">Audio</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[20px]">
                  <div className="relative box-border w-[30px] h-[30px] border-[1px] border-solid border-gainsboro-100" />
                  <div className="relative">Written</div>
                </div>
              </div>
            </div>
            <div className="relative w-[280px] h-[169px] text-xl">
              <div className="absolute top-[56px] left-[12px]">2003</div>
              <div className="absolute top-[56px] left-[160px]">2023</div>
              <div className="absolute top-[0px] left-[0px] text-6xl font-semibold">
                Year Published
              </div>
              <div className="absolute top-[119px] left-[0px] w-[280px] h-[50px] text-lg">
                <div className="absolute top-[28px] left-[48px]">2003</div>
                <div className="absolute top-[28px] left-[167px]">2023</div>
                <img
                  className="absolute top-[0px] left-[0px] w-[280px] h-[21px]"
                  alt=""
                  src="/group-61.svg"
                />
              </div>
              <div className="absolute top-[44px] left-[0px] box-border w-[132.5px] h-[43px] border-[1px] border-solid border-gainsboro-100" />
              <div className="absolute top-[44px] left-[147.5px] box-border w-[132.5px] h-[43px] border-[1px] border-solid border-gainsboro-100" />
            </div>
            <div className="flex flex-col items-start justify-start gap-[25px] text-center">
              <div className="relative font-semibold">{`Language `}</div>
              <div className="flex flex-col items-start justify-start gap-[20px] text-left text-xl">
                <div className="flex flex-row items-center justify-start gap-[20px]">
                  <div className="relative w-[30px] h-[30px]">
                    <div className="absolute top-[0px] left-[0px] bg-orange w-[30px] h-[30px]" />
                    <img
                      className="absolute top-[6px] left-[6px] w-[18px] h-[18px] overflow-hidden"
                      alt=""
                      src="/icbaselinedone.svg"
                    />
                  </div>
                  <div className="relative">English</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[20px]">
                  <div className="relative box-border w-[30px] h-[30px] border-[1px] border-solid border-gainsboro-100" />
                  <div className="relative">Spanish</div>
                </div>
              </div>
            </div>
            <div className="relative w-[234px] h-[158.66px]">
              <div className="absolute top-[0px] left-[calc(50%_-_117px)] w-[234px] h-[25.68px] flex flex-row items-center justify-between">
                <div className="relative font-semibold">Region</div>
                <img
                  className="relative w-[15px] h-[15px] overflow-hidden shrink-0"
                  alt=""
                  src="/iconoirminus.svg"
                />
              </div>
              <div className="absolute top-[43.66px] left-[calc(50%_-_94px)] flex flex-col items-start justify-start gap-[20px] text-lgi">
                <div className="flex flex-row items-center justify-start gap-[20px]">
                  <div className="relative w-[25px] h-[25px]">
                    <div className="absolute top-[0px] left-[0px] bg-orange w-[25px] h-[25px]" />
                    <img
                      className="absolute top-[5px] left-[5px] w-[15px] h-[15px] overflow-hidden"
                      alt=""
                      src="/icbaselinedone1.svg"
                    />
                  </div>
                  <div className="relative">Africa</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[20px]">
                  <div className="relative box-border w-[25px] h-[25px] border-[1px] border-solid border-gainsboro-100" />
                  <div className="relative">South America</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[20px]">
                  <div className="relative box-border w-[25px] h-[25px] border-[1px] border-solid border-gainsboro-100" />
                  <div className="relative">Europe</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative [text-decoration:underline] leading-[140.9%] font-semibold">
            Reset filters
          </div>
        </div>
      </div>
      <img
        className="absolute top-[1970px] left-[193px] w-[439px] h-[133px] object-cover"
        alt=""
        src="/link--betterevidenceproject-rev-gold-widepng1@2x.png"
      />
      <div className="absolute top-[1840px] left-[862px] w-[367px] h-[75px] flex flex-row items-start justify-start gap-[15px] text-gray-100">
        <div className="relative w-[70px] h-[70px]">
          <div className="absolute top-[0px] left-[0px] box-border w-[70px] h-[70px] border-[1px] border-solid border-gray-100" />
          <div className="absolute top-[21px] left-[30.8px] inline-block w-[8.4px] h-7">
            1
          </div>
        </div>
        <div className="relative w-[70px] h-[70px]">
          <div className="absolute top-[0px] left-[0px] box-border w-[70px] h-[70px] border-[1px] border-solid border-gainsboro-100" />
          <div className="absolute top-[21px] left-[28px] inline-block w-3.5 h-7">
            2
          </div>
        </div>
        <div className="relative w-[70px] h-[70px]">
          <div className="absolute top-[0px] left-[0px] box-border w-[70px] h-[70px] border-[1px] border-solid border-gainsboro-100" />
          <div className="absolute top-[21px] left-[28px] inline-block w-3.5 h-7">
            3
          </div>
        </div>
        <div className="relative w-[70px] h-[70px]">
          <img
            className="absolute top-[21px] left-[21px] w-[26.6px] h-[26.6px] overflow-hidden"
            alt=""
            src="/biarrowup2.svg"
          />
          <div className="absolute top-[0px] left-[0px] box-border w-[70px] h-[70px] border-[1px] border-solid border-gainsboro-100" />
        </div>
      </div>
      <div
        className="absolute top-[46px] left-[1174px] rounded-8xs bg-white flex flex-row py-3 pr-3.5 pl-6 items-start justify-start cursor-pointer text-teal font-source-sans-pro"
        onClick={onBigButtonContainerClick}
      >
        <div className="relative leading-[20px] font-semibold">
          Get Involved
        </div>
      </div>
    </div>
  );
};

export default ResultPage;

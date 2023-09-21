FROM mono:3.10

RUN yum install -y logrotate sysstat lsof htop atop

RUN mkdir -p /usr/src/app/source /usr/src/app/build
WORKDIR /usr/src/app/source

COPY goldexchangescale/src /usr/src/app/source
RUN nuget restore -NonInteractive
RUN xbuild /property:Configuration=Release /property:OutDir=/usr/src/app/build/
WORKDIR /usr/src/app/build

CMD [ "mono",  "./ScaleService.exe" ]
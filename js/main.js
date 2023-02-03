(() => {
  let yOffset = 0; //window.pageYoffset 변수
  let prevScrollHeight = 0; //햔재 스크롤 위치보다 이전에 위치한 스크롤 섹션들의 높이값의 합
  let currentScene = 0; //현재 홠성화된(눈앞에 보고있는) 씬

  const sceneInfo = [
    {
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-0"),
      },
    }, //0
    {
      type: "normal",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-1"),
      },
    }, //1
    {
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-2"),
      },
    }, //2
    {
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-3"),
      },
    }, //3
  ];

  function settLayout() {
    //각 스크롤 섹션의 높이세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[
        i
      ].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }
  }

  function scrollLoop() {
    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }
    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      currentScene++;
    }
    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return;
      currentScene--;
    }

    console.log(currentScene);
  }

  window.addEventListener("resize", settLayout);
  window.addEventListener("scroll", () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });
  settLayout();
})();

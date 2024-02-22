// API 호출 
// 1. 호출 주소를 사용자 키값을 넣고 가져온다.
// 1.1 함수선언 : const getLatestNews = () =>() 
// 1.1.1  주소 가져온다. 키값 적용 const url = `주소`
// 2. 키값을 변수로 저장한다. const API_KEY = `키값`
// 2.1. 함수 호출 getLatestNews()
// 2.1.1 new URL 활용 / 자바스크립트 자체 제공 함수 / 인스턴스 생성
// 2.2.1.1 URL 객체 자동 분류 
// 3. 인출 시간차 문제로 async 함수를 사용한다.(fetch 동시)
// 4. API 표준에 따른 호출을 선언한다.
// 5. fectch 함수를 통해 뉴스를 가져온다.
// 6. await를 통해 함수를 기다린다.(비동기 함수)
// 7. 자료를 json(객체형) 형식으로 받아온다.
// 7.1 const response = await fetch(url) console /asyc 함수 추가
// 7.1.1. const getLatestNews = async () => {}
// 7.1.2. json 객체 형태로 자료 현출 const data = await response.json()
// 7.1.3. let news = data.articles
// 7.1.4. news를 전역 변수로 선언 
// 8. 변수 할당을 통해 뉴스를 호출하여 받아온다. news = data.articles;
// 9. 배포 문제로 URL 변경, 임시 API 활용 

// 자료 연계 및 현출
// 1. 화면구성 : 부트스트랩 설정, 컨테이너 사용 
// 2. 뉴욕타임즈 로고 및 메뉴 스타일 복사 활용, 해당 클릭 및 복사 
// 3. 헤드라인, 이미지 등 크기 및 위치 조정
// 3.1 상위 공간 조정 margin-top, 이미지 조정 width, 이미지 중앙 display:flex
// 3.1.1. display: flex; justify-content: center;
// 4. 메뉴 버튼, 메뉴 이름, 밑줄 등 스타일 뉴욕타임즈 복사 활용
// 4.1. 박스 선 border-top, border-bottom
// 4.1.1. 메뉴 버튼 border: none; background: none; margin: spx;
// 4.1.2 hover background-color: beige
// 5. 메인 내용 이지미와 글 위치 및 형식 설정 
// 5.1 img src="", <h2> 태그 제목 , <P> 태그 내용 <Div> 출처
// 6. 부트스트랩 그리드 사용, 스타일 조정
// 6.1 그리드 코드 복사 한줄안에 4대 8 비율로 나눠 놓다.
// 6.1.1 class="raw", class="col-lg-4", class= "col-lg-8"
// 6.2 news-img-size max-width: 100%, max-height:250px
// 6.3 flex wrap 알아서 매뉴를 감싸는 함수
// 6.4 뉴스 밑줄 .news border-bottom : 1px solid black
// 7. 뉴스를 받아오는 함수 사용 및 위치 지정
// 7.1 const render=()=>{} const newsHTML =`` 
// 7.2 document.getElementById(``).innerHTML=newsHTML
// 7.3 getLatestNews();
// 7.4 id = row news 를 `` 사이에 삽입 하기 위해 section에 id = "news-board"를 삽입
// 7.5 document.getElementById("news-board").innerHTML=newsHTML
// 8. 현출 : 어레인 함수안에 내용을 들고옴. news를 newsList로 변경
// 8.1 (중요) const render =() => {
// 8.2. const newsHTML =``; newsHTML=newsList.map(news=>`형식 폼을 복사`)
// 8.3. 바뀌야 할 부분을, 타이틀, 이미지 ${} 다이믹 하게 바꾼다. 태그는 API보고 쓴다.
// 8.4. ${urlToImage, title, desscription, source, publishshedat}
// 8.5. document.getElementById("news-border").innerHTML=newsHTML
// 8.6. 뉴스리스트가 확정되면 render함수 사용 render()
// 8.7. 함수 할당 오류 해결 const
// 8.8. 콤마 오류 해결, 배열 타입이라 콤마 문자열 전환 필요
// 8.9 콤마 지우기, array to string javascript (mdn web docs 활용)
// 8.10 console.log(elements.join()) 조인함수 사용

// 카테고리별 검색
// 1. APi 자료가 카테고리별 자료로 줄 수 있는지 확인(가능한 옵션/카테고리 확인)
// 2. 가능 제공한 카테고리로 축약, 버튼 삭제 (7개 카테고리 제공) 
// 3. 버튼에 클릭이벤트 주기
// 3.1 메뉴 버튼을 한번에 들고 오기  const menus = document.querySelectorAll(.menus)
// 3.2 배열함수 forEach를 사용해 메뉴 아이템을 하나하나 들고온다. menus.forEach(menu=>menu,addEventListner("click",(event)=>getNewsByCategory(event))=>))
// 3.2.1 들고 오면 클릭 이벤트를 실행해 준다. const getNewsByCategory=(event)=>
// 3.2.2 실행해주면 함수를 호출해 준다.
// 4. 이벤트 함수를 설정한다. const getNewsByCategory = (event) => {}; category()
// 5. 들고오는 URL를 만들어준다. (카테고리 추가) const url = 기존 주소에서 검색 쿼리 추가 &category=${category}
// 5. 이벤트 지정 클릭시 읽어온다. const category = event.target.textContent, console.log("category",category)
// 6. 함수를 통해 들고온 카테고리 명칭 소문자로 전환 
// 6.1 toLowerCase(), const category - event.target.textContent.toLowerCase()
// 7. 카테고리를 주소에 붙여 준다. &category=apiket=${API_KEY}
// 8. 기존 사용했던 호출 방식으로 불러 온다.
// 8.1 const response = await fetch(url), const data = await response.json()
// 9. 뉴스를 보여준다.
// 9.1 render() 를 통해 넣어준 데이터를 가져온다. 자료 재정립 필요 (newList=data.articles) 

// 검색어로 뉴스 가져오기 
// 1. 검색창, 입력창 만들어 주기 <input><botton>
// 1.1. 버튼, 입력 설정
// 1.2. 아이디를 부여하여, 버튼에 클릭 이벤트를 부여한다.
// 1.2.1 input id = "search-input", button onclick="getNewsBykeyword"
// 2. 함수 설정 const getNewsBykeyword=()=>{} 및 실행 확인
// 3. input창 키워드 들고 오기
// 3.1 const keyword = document.getElementById("search-input").value;
// 4. APi가 키워드별 자료를 제공하는지 확인 (q: 키워드)
// 5. 뉴스 불러오는 방식 그대로 사용 
// 5.0. const url = new URL(주소 + 쿼리)
// 5.1. 카테고리를 주소에 붙여 준다. &q=apikey=${API_KEY}
// 5.2. const response = await fetch(url), const data = await response.json()
// 5.3. 뉴스를 보여준다.
// 5.3.0 const  response = await fetch(url), const data = await response.json(); console.log("keyword data", data)newsList =data.articles; 
// 5.3.1 render() 를 통해 넣어준 데이터를 가져온다.(newList=data.articles) 
// 6. UI 변화 / 검색창 꾸미기 


// 코드 리펙토링, 코드를 중복 제거 
// 1. 문제 정의 : 동일한 방식으로 호출을 세번 한다. (전체, 카테로그, 키워드)
// 2. 반복되는 코드를 함수안에 깔끔하게 정리  
// 3. 긴 코드 전역변수로 전환 (url)
// 4. 함수 한번 정의하면 다음에 재활용 할 수 있다.


// 에러 처리 (사용자 전달 : 에러 핸들링)
// 1. try,catch 함수 사용 = 소스코드 쓴고 이안에서 에러가 발생하면 잡아준다.
// 2. console.log("내가 잡은 에로는",message) 예 : 내가 잡은 에러는 noona is not defined
// 3. 응답값이 에러인 상황이면 catch 실행 
// 3.1 status 401 에러인상황 / api 키값 오류
// 3.2 api 에러 상황 정리 , 번호 정리, 상황 구체적 정의
// 3.2.1 에러 메세지 응답 값 현출 
// 4. 에러 메세지 화면 전달 
// 4.1.  if(response.status===200), throw new Error(data,message)
// 5. 에러 메세지 보여주기 render (빨간색 음영)
// 6. 부트스트랩 빨간색 음영 표시 선정 복사
// 7. 메세지는 상황에 따라 변화해야 
// 7.1 class="alert-danger" role=alert">
// 7.2 ${errorMessage}, errorRender(error.message)
// 7.3 error HTML, document.getElementId("news-board").innerHTML=errorHTML
// 8. 검색되지 않을 경우, 메세지 표시 (result==0일 경우)
// 8.1 if(data.articles.length===o){throw new error("No result for this search")}

const API_KEY = "b1fe516cb2ff4032b010ec5773f3a973";
let articles = [];
let page = 1;
let totalPage = 1;
const PAGE_SIZE = 10;
// let url = new URL(
//   `https://newsapi.org/v2/top-headlines?country=kr&pageSize=${PAGE_SIZE}`
// );
let url = new URL(
  `https://noona-times-v2.netlify.app/top-headlines?country=kr&pageSize=${PAGE_SIZE}`
);
let menus = document.querySelectorAll("#menu-list button");
menus.forEach((menu) =>
  menu.addEventListener("click", (e) => getNewsByTopic(e))
);

const getNews = async () => {
  try {
    url.searchParams.set("page", page);
    console.log("Rrr", url);
    let response = await fetch(url);
    let data = await response.json();
    if (response.status == 200) {
      console.log("resutl", data);
      if (data.totalResults == 0) {
        page = 0;
        totalPage = 0;
        renderPagination();
        throw new Error("검색어와 일치하는 결과가 없습니다");
      }

      articles = data.articles;
      totalPage = Math.ceil(data.totalResults / PAGE_SIZE);
      render();
      renderPagination();
    } else {
      page = 0;
      totalPage = 0;
      renderPagination();
      throw new Error(data.message);
    }
  } catch (e) {
    errorRender(e.message);
    page = 0;
    totalPage = 0;
    renderPagination();
  }
};
const getLatestNews = () => {
  page = 1; // 9. 새로운거 search마다 1로 리셋
  // url = new URL(
  //   `https://newsapi.org/v2/top-headlines?country=kr&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`
  // );
  url = new URL(
    `https://noona-times-v2.netlify.app/top-headlines?country=kr&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`
  );
  getNews();
};

const getNewsByTopic = (event) => {
  const topic = event.target.textContent.toLowerCase();

  page = 1;
  // url = new URL(
  //   `https://newsapi.org/v2/top-headlines?country=kr&pageSize=${PAGE_SIZE}&category=${topic}&apiKey=${API_KEY}`
  // );
  url = new URL(
    `https://noona-times-v2.netlify.app/top-headlines?country=kr&pageSize=${PAGE_SIZE}&category=${topic}&apiKey=${API_KEY}`
  );
  getNews();
};

const openSearchBox = () => {
  let inputArea = document.getElementById("input-area");
  if (inputArea.style.display === "inline") {
    inputArea.style.display = "none";
  } else {
    inputArea.style.display = "inline";
  }
};

const getNewsByKeyword = () => {
  const keyword = document.getElementById("search-input").value;

  page = 1;
  // url = new URL(
  //   `https://newsapi.org/v2/top-headlines?q=${keyword}&country=kr&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`
  // );
  url = new URL(
    `https://noona-times-v2.netlify.app/top-headlines?q=${keyword}&country=kr&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`
  );
  getNews();
};

const render = () => {
  let resultHTML = articles
    .map((news) => {
      return `<div class="news row">
        <div class="col-lg-4">
            <img class="news-img"
                src="${
                  news.urlToImage ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
                }" />
        </div>
        <div class="col-lg-8">
            <a class="title" target="_blank" href="${news.url}">${
        news.title
      }</a>
            <p>${
              news.description == null || news.description == ""
                ? "내용없음"
                : news.description.length > 200
                ? news.description.substring(0, 200) + "..."
                : news.description
            }</p>
            <div>${news.source.name || "no source"}  ${moment(
        news.publishedAt
      ).fromNow()}</div>
        </div>
    </div>`;
    })
    .join("");

  document.getElementById("news-board").innerHTML = resultHTML;
};
const renderPagination = () => {
  let paginationHTML = ``;
  let pageGroup = Math.ceil(page / 5);
  let last = pageGroup * 5;
  if (last > totalPage) {
    last = totalPage;
  }
  let first = last - 4 <= 0 ? 1 : last - 4;
  if (first >= 6) {
    paginationHTML = `<li class="page-item" onclick="pageClick(1)">
                        <a class="page-link" href='#js-bottom'>&lt;&lt;</a>
                      </li>
                      <li class="page-item" onclick="pageClick(${page - 1})">
                        <a class="page-link" href='#js-bottom'>&lt;</a>
                      </li>`;
  }
  for (let i = first; i <= last; i++) {
    paginationHTML += `<li class="page-item ${i == page ? "active" : ""}" >
                        <a class="page-link" href='#js-bottom' onclick="pageClick(${i})" >${i}</a>
                       </li>`;
  }

  if (last < totalPage) {
    paginationHTML += `<li class="page-item" onclick="pageClick(${page + 1})">
                        <a  class="page-link" href='#js-program-detail-bottom'>&gt;</a>
                       </li>
                       <li class="page-item" onclick="pageClick(${totalPage})">
                        <a class="page-link" href='#js-bottom'>&gt;&gt;</a>
                       </li>`;
  }

  document.querySelector(".pagination").innerHTML = paginationHTML;
};

const pageClick = (pageNum) => {
  page = pageNum;
  window.scrollTo({ top: 0, behavior: "smooth" });
  getNews();
};
const errorRender = (message) => {
  document.getElementById(
    "news-board"
  ).innerHTML = `<h3 class="text-center alert alert-danger mt-1">${message}</h3>`;
};

const openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
};

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
};
getLatestNews();
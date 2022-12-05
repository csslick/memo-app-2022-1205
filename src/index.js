// index.js

// 입력시 실행될 함수
function handleAdd(content = '') {
  // memo 입력요소
  const memoEl = document.getElementById('memo');

  // li(문서객체) 생성
  const li = document.createElement('li');
  // p 생성
  const p = document.createElement('p');
  // console.log(li, p);

  // p요소에 입력값을 추가
  p.textContent = memoEl.value || content; // 둘 중에 값이 있는거 입력
  // console.log(p)
  memoEl.value = ''; // 입력 완료 후 내용 비움(초기화)

  // 삭제버튼
  const delBtn = document.createElement('button');
  delBtn.textContent = '삭제';
  
  // li에 p와 button 추가
  li.appendChild(p);
  li.appendChild(delBtn);
  // console.log(li);

  // class 추가
  li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  delBtn.classList.add('btn', 'btn-danger');

  // #memoList 목록에 li(글) 추가
  document.getElementById('memoList').appendChild(li);

  // 삭제버튼에 이벤트 등록
  delBtn.addEventListener('click', (event) => {
    // *** test code 
    const li = event.target.parentElement.parentElement.children;
    const li_idx = [...li].indexOf(event.target.parentElement)
    console.log(li.length, `index = ${li_idx}`)
    // *** test code end

    // event.target: 사용자가 선택한 요소
    console.log('event.target = ', event.target)

    // li(부모) 삭제(탐색)
    event.target.parentElement.remove();
  })
  
} // handAdd


// 입력(추가) 버튼 선택
const addBtn = document.getElementById('addBtn');

// 입력(추가)버튼 이벤트
addBtn.addEventListener('click', () => {
  handleAdd(); // 추가함수 호출
});


// 기본 데이터 추가
handleAdd('밥하기');
handleAdd('빨래하기');
handleAdd('다림질 하기');
handleAdd('강아지 산책 시키기');
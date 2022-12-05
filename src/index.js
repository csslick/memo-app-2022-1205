// index.js

// 입력시 실행될 함수
function handleAdd() {
  // memo 입력요소
  const memoEl = document.getElementById('memo');

  // li(문서객체) 생성
  const li = document.createElement('li');
  // p 생성
  const p = document.createElement('p');
  // console.log(li, p);

  // memo 입력값: value
  // console.log(memoEl.value);

  // p요소에 입력값을 추가
  p.textContent = memoEl.value;
  // console.log(p)
  memoEl.value = ''; // 입력 완료 후 내용 비움(초기화)

  // 삭제버튼
  const delBtn = document.createElement('button');
  delBtn.textContent = '삭제';
  
  // li에 p와 button 추가
  li.appendChild(p);
  li.appendChild(delBtn);
  console.log(li);

  // class 추가
  li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  delBtn.classList.add('btn', 'btn-danger');

  // #memoList 목록에 li(글) 추가
  document.getElementById('memoList').appendChild(li);
  
}


// 입력(추가) 버튼 선택
const addBtn = document.getElementById('addBtn');

// 입력(추가)버튼 이벤트
addBtn.addEventListener('click', () => {
  handleAdd(); // 추가함수 호출
});

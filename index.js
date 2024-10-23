function Fruits() {
    return (
        <>
            <h2 className= 'red'>구매한 과일 목록</h2>
            <ul>
            <li>오렌지</li>
            <li>파인애플</li>
            <li>사과</li>
            </ul>
        </>
    );
  }
  const y = ReactDOM.createRoot( document.getElementById('layout') );
  y.render(  <Fruits />  );
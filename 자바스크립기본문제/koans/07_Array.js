describe('Array에 대해서 학습합니다.', function () {
  it('Array의 기본을 확인합니다.', function () {
    const emptyArr = [];
    expect(typeof emptyArr === 'array').to.equal(false);
    expect(emptyArr.length).to.equal(0);

    const multiTypeArr = [
      0,
      1,
      'two',
      function () {
        return 3;
      },
      { value1: 4, value2: 5 },
      [6, 7],
    ];
    expect(multiTypeArr.length).to.equal(6);
    expect(multiTypeArr[0]).to.equal(0);
    expect(multiTypeArr[2]).to.equal('two');
    expect(multiTypeArr[3]()).to.equal(3);
    //  .valeu1 는 감싸지않아도 된다
    expect(multiTypeArr[4].value1).to.equal(4);
    // 잊지말자 객체의 key 문자열로 이루어져있기때문 브락켓 노테션을 사용할경우는 ""필수!
    expect(multiTypeArr[4]["value2"]).to.equal(5);
    expect(multiTypeArr[5][1]).to.equal(7);
  });

  it('Array의 요소(element)를 다루는 방법을 확인합니다.', function () {
    const arr = [];
    expect(arr).to.deep.equal([]);

    arr[0] = 1;
    expect(arr).to.deep.equal([1]);

    arr[1] = 2;
    expect(arr).to.deep.equal([1, 2]);

    arr.push(3);
    expect(arr).to.deep.equal([1,2,3]);

    // pop을 사용하면 원래의 값에서 삭제후 해당변수에 대입을해주것같다.
    // pop은 말그대로 삭제다. 삭제한 값만 변수에 넣어주는게아니다.!!!
    const poppedValue = arr.pop();
    expect(poppedValue).to.equal(3);
    expect(arr).to.deep.equal([1,2]);
  });

  it('Array 메소드 slice를 확인합니다.', function () {
    const arr = ['peanut', 'butter', 'and', 'jelly'];

    expect(arr.slice(1)).to.deep.equal(['butter', 'and', 'jelly']);
    expect(arr.slice(0, 1)).to.deep.equal(['peanut']);
    expect(arr.slice(0, 2)).to.deep.equal(['peanut', 'butter']);
    // 2에서 시작한건 맞으나 end에 자리는 적힌 인덱스번호보다 전의 값까지 출력한다.
    expect(arr.slice(2, 2)).to.deep.equal([]);
    // end에는 해당요소의 끝의 인덱스보다 많이적어도 오류는 발생하지않는다.
    expect(arr.slice(2, 20)).to.deep.equal(['and', 'jelly']);
    // 해당 경우도 비슷한경우가 아닐까? start 3 end 0 , end보다 start가 더크다.
    // 이렇게쓴다고 slice메서드가 반대로 출력해주지않는다. 반대로 출력을 원할경우 start,end는 음수로 적어주자
    expect(arr.slice(3, 0)).to.deep.equal([]);
    // 위 설명내용과 같다. 끝의 인덱스번호보다 많은 값을 적어도 에러없이 실행 된다, 그런데 저렇게 무의미한숫자는 적지말자
    expect(arr.slice(3, 100)).to.deep.equal(['jelly']);
    // 같은내용이다 이제는 손가락아프다... 위에거 이해하자
    expect(arr.slice(5, 1)).to.deep.equal([]);

    // arr.slice는 arr의 값을 복사하여 새로운 배열을 리턴합니다.
    // 아래의 코드는 arr 전체를 복사합니다. 자주 사용되니 기억하시기 바랍니다.
    expect(arr.slice(0)).to.deep.equal(['peanut', 'butter', 'and', 'jelly']);
  });

  it('Array를 함수의 전달인자로 전달할 경우, reference가 전달됩니다.', function () {
    // call(pass) by value와 call(pass) by reference의 차이에 대해서 학습합니다.
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five'];

    function passedByReference(refArr) {
      refArr[1] = 'changed in function';
    }
    passedByReference(arr);
    expect(arr[1]).to.equal('changed in function');

    const assignedArr = arr;
    assignedArr[5] = 'changed in assignedArr';
    expect(arr[5]).to.equal('changed in assignedArr');

    const copiedArr = arr.slice();
    copiedArr[3] = 'changed in copiedArr';
    expect(arr[3]).to.equal('three');
  });

  it('Array 메소드 shift와 unshift를 확인합니다.', function () {
    const arr = [1, 2];

    arr.unshift(3);
    expect(arr).to.deep.equal([3,1,2]);

    const shiftedValue = arr.shift();
    // 기억하자 pop과 동일하게 삭제한값을 가지고온거다 즉 [3]배열의 형태가아닌 값을의미한다.
    expect(shiftedValue).to.deep.equal(3);
    expect(arr).to.deep.equal([1,2]);
  });
});

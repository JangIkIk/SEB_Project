describe('Spread syntax에 대해 학습합니다.', function () {
  it('전개 문법(spread syntax)을 학습합니다.', function () {
    const spread = [1, 2, 3];
    // TODO: 전개 문법을 사용해 테스트 코드를 완성합니다. spread를 지우지 않고 해결할 수 있습니다.
    const arr = [0, spread, 4];
    expect(arr).to.deep.equal([0, [1, 2, 3], 4]);
  });

  it('빈 배열에 전개 문법을 사용할 경우, 아무것도 전달되지 않습니다.', function () {
    const spread = [];
    // TODO: 전개 문법을 사용해 테스트 코드를 완성합니다. spread를 지우지 않고 해결할 수 있습니다.
    const arr = [0, spread, 1];
    expect(arr).to.deep.equal([0,[],1]);
  });

  it('여러 개의 배열을 이어붙일 수 있습니다.', function () {
    const arr1 = [0, 1, 2];
    const arr2 = [3, 4, 5];
    const concatenated = [...arr1, ...arr2];
    expect(concatenated).to.deep.equal([0, 1, 2, 3, 4, 5]);
    // 아래 코드도 같은 동작을 수행합니다.
    //  arr1.concat(arr2);
  });

  it('여러 개의 객체를 병합할 수 있습니다.', function () {
    const fullPre = {
      cohort: 7,
      duration: 4,
      mentor: 'hongsik',
    };

    const me = {
      time: '0156',
      status: 'sleepy',
      todos: ['coplit', 'koans'],
    };

    const merged = { ...fullPre, ...me };
    // 변수 'merged'에 할당된 것은 'obj1'과 'obj2'의 value일까요, reference일까요?
    // 만약 값(value, 데이터)이 복사된 것이라면, shallow copy일까요, deep copy일까요?

    expect(merged).to.deep.equal({
      cohort: 7,
      duration: 4,
      mentor: 'hongsik',
      time: '0156',
      status: 'sleepy',
      todos: ['coplit', 'koans'],
    });
  });

  it('Rest Parameter는 함수의 전달인자를 배열로 다룰 수 있게 합니다.', function () {
    // 자바스크립트는 (named parameter를 지원하지 않기 때문에) 함수 호출 시 전달인자의 순서가 중요합니다.
    function returnFirstArg(firstArg) {
      return firstArg;
    }
    // 파라미터가 하나이기때문에 첫번째의 값을 받을수있음
    expect(returnFirstArg('first', 'second', 'third')).to.equal('first');

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }
    // 파라미터의 값이 전달인자보다 적어도 파라미터의 개수만큼 작동되지만 
    // 반대로 전달인자가 파라미터의 수보다 적을경우는 undefined가 나온다.
    expect(returnSecondArg('only give first arg')).to.equal(undefined);

    // rest parameter는 spread syntax를 통해 간단하게 구현됩니다.
    function getAllParamsByRestParameter(...args) {
      return args;
    }

    // arguments를 통해 '비슷하게' 함수의 전달인자들을 다룰 수 있습니다. (spread syntax 도입 이전)
    // arguments는 모든 함수의 실행 시 자동으로 생성되는 '객체'입니다. 
    function getAllParamsByArgumentsObj() {
      return arguments;
    }

    const restParams = getAllParamsByRestParameter('first', 'second', 'third');
    //  value값으로 들어간다 ????? key는 자동 넘버로 들어가진다!!!
    const argumentsObj = getAllParamsByArgumentsObj('first', 'second', 'third');

    expect(restParams).to.deep.equal(['first', 'second', 'third']);
    expect(Object.keys(argumentsObj)).to.deep.equal(["0",'1','2']);
    expect(Object.values(argumentsObj)).to.deep.equal(['first', 'second', 'third']);

    // arguments와 rest parameter를 통해 배열로 된 전달인자(args)의 차이를 확인하시기 바랍니다.
    expect(restParams === argumentsObj).to.deep.equal(false);
    // 함수를 받는건데 오브젝트인가? 배열도 object가 맞다
    expect(typeof restParams).to.deep.equal("object");
    //  arguments는 자동으로 생성되는 객체!! object
    expect(typeof argumentsObj).to.deep.equal("object");
    // rest문법은 전달인자를 파라미터 배열로받는다.
    expect(Array.isArray(restParams)).to.deep.equal(true);
    // 해당코드는 spread,문법이아니므로 배열이아니다
    expect(Array.isArray(argumentsObj)).to.deep.equal(false);
    // Array.isArray는 배열인지 아닌지 여부를 판단함!


    // Array.from https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    // Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니
    const argsArr = Array.from(argumentsObj);
    expect(Array.isArray(argsArr)).to.deep.equal(true);
    expect(argsArr).to.deep.equal(['first', 'second', 'third']);
    // .from으로 복사를했는데 false인 이유는 ?? 복사개념인것같다.... 왜??@@@@@@@@@@@@@2
    expect(argsArr === restParams).to.deep.equal(false);
  });

  it('Rest Parameter는 전달인자의 수가 정해져 있지 않은 경우에도 유용하게 사용할 수 있습니다.', function () {
    function sum(...nums) {
      let sum = 0;
      for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
      }
      return sum;
    }
    expect(sum(1, 2, 3)).to.equal(6);
    expect(sum(1, 2, 3, 4)).to.equal(10);
  });

  it('Rest Parameter는 전달인자의 일부에만 적용할 수도 있습니다.', function () {
    // rest parameter는 항상 배열입니다.
    function getAllParams(required1, required2, ...args) {
      return [required1, required2, args];
    }
    // 해당문제는 답은 맞췄으나 첫번째 인자는 123 두번째는 인자가 없어서 undefined 다음은 rest문법은로 빈배열을 보낸다.
    // 주의하자 전달인자가 파라미터보다 적다고 에러가 나느것이아니고 undefined를 출력한다.
    expect(getAllParams(123)).to.deep.equal([123,undefined,[]]);

    function makePizza(dough, name, ...toppings) {
      const order = `You ordered ${name} pizza with ${dough} dough and ${toppings.length} extra toppings!`;
      return order;
    }
    expect(makePizza('original')).to.equal(`You ordered undefined pizza with original dough and 0 extra toppings!`);
    expect(makePizza('thin', 'pepperoni')).to.equal(`You ordered pepperoni pizza with thin dough and 0 extra toppings!`);
    expect(makePizza('napoli', 'meat', 'extra cheese', 'onion', 'bacon')).to.equal(`You ordered meat pizza with napoli dough and 3 extra toppings!`);
  });
});

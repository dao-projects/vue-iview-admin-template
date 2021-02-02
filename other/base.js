/**
 * 防抖(执行间隔保持一致)
 * @param func
 * @param ms
 * @example
 *    const task = () => console.log("debounce: run task");
 *    const debounceTask = debounce(task, 1000);
 *    window.addEventListener("scroll", debounceTask);
 */
function debounce(func, ms = 1000) {
  let timer;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
}

/**
 * 节流(单位时间内只执行一次)
 * @param func
 * @param ms
 * @example
 *    const task = () => console.log("throttle: run task");
 *    const throttleTask = throttle(task,1000)
 *    window.addEventListener("scroll", throttleTask);
 */
function throttle(func, ms = 1000) {
  let canRun = true;
  return function(...args) {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      func.apply(this, args);
      canRun = true;
    }, ms);
  };
}

/**
 * 自定义new
 * @param func
 * @param args
 * @example
 *    function Person(name) { this.name = name;}
 *    Person.prototype.sayName = function() {  console.log(`My name is ${this.name}`);};
 *    const me = createNew(Person, "Mark");
 *    me.sayName();
 *    console.log(me);
 */
function createNew(Func, ...args) {
  const instance = {};
  if (Func.prototype) {
    Object.setPrototypeOf(instance, Func.prototype);
  }
  const res = Func.apply(instance, args);
  if (typeof res === "function" || (typeof res === "object" && res !== null)) {
    return res;
  }
  return instance;
}

/**
 * 深拷贝
 * @param obj
 * @param cache
 * @example
 *    const source = {
 *      name: "Mark",
 *      userinfo: {
 *          age: 18,
 *          birth: new Date("1991-11-11"),
 *          ary: [1, 2, { a: 1, b: { c: 3 } }],
 *          say() {console.log("Hello ") }
 *      }
 *    };
 *    //source.source = source;
 *    const newObj = deepCopy(source);
 *    newObj["name"] = "Jack";
 *    console.log(source, newObj);
 */
function deepCopy(obj, cache = new WeakMap()) {
  if (!obj instanceof Object) return obj;
  //防止循环引用
  if (cache.get(obj)) return cache.get(obj);
  //支持函数
  if (obj instanceof Function) {
    return function() {
      obj.apply(this, arguments);
    };
  }
  // 支持日期
  if (obj instanceof Date) return new Date(obj);
  //支持正则表达式
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);
  //还可以增加其他对象（如：Map,Set等）
  // 数组key为数字素银的特殊对象
  const res = Array.isArray(obj) ? [] : {};
  //缓存copy的对象，用于处理循环引用的情况
  cache.set(obj, res);
  Object.keys(obj).forEach(key => {
    if (obj[key] instanceof Object) {
      res[key] = deepCopy(obj[key], cache);
    } else {
      res[key] = obj[key];
    }
  });
  return res;
}

/**
 * 柯里化 （只传递給函数一部分参数来调用它，让它返回一个函数去处理剩下的参数）
 * @param func
 * @returns {function(...[*])}
 * @example
 *      function sum(a, b, c) {  return a + b + c;}
 *      const curriedSum = curry(sum);
 *      console.log(curriedSum(1, 2, 3));
 *      console.log(curriedSum(1)(2, 3));
 *      console.log(curriedSum(1)(2)(3));
 */
function curry(func) {
  return function curried(...args) {
    // function.length 用来获取函数的形参个数
    // arguments.length 用来获取实参个数
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

/**
 * 异步并发控制
 *    1. new Promise 创建后立即执行
 *    2. 使用Promise.resolve().then可以把任务添加到微任务队列，防止立即执行迭代方法
 *    3. 微任务处理过程中，产生新的微任务，会在同一事件循环内，追加到微任务队列里
 *    4。使用race在某个任务完成时，继续添加任务，保持任务按照最大并发数进行执行
 *    5. 任务完成后，需要从doingTasks中移除
 * @param count
 * @param array
 * @param iterateFunc
 * @example
 *    const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));
 *    limit(2, [100, 102, 103, 104], timeout).then(res => console.log(res));
 */
function limit(count, array, iterateFunc) {
  const tasks = [];
  const doingTasks = [];
  let i = 0;
  const enqueue = () => {
    if (i === array.length) {
      return Promise.resolve();
    }
    const task = Promise.resolve().then(() => iterateFunc(array[i++]));
    tasks.push(task);
    const doing = task.then(() => doingTasks.splice(doingTasks.indexOf(doing), 1));
    doingTasks.push(doing);
    const res = doingTasks.length >= count ? Promise.race(doingTasks) : Promise.resolve();
    return res.then(enqueue);
  };
  return enqueue().then(() => Promise.all(tasks));
}

/**
 * 数组扁平化(方案1：recursionFlat)
 * @param ary
 * @returns {[]}
 * @example
 *    const source = [1, 2, [3, 4, [5, 6]], '7']
 *    console.log(recursionFlat(source))
 */
function recursionFlat(ary = []) {
  const res = [];
  ary.forEach(item => {
    if (Array.isArray(item)) {
      res.push(...recursionFlat(item));
    } else {
      res.push(item);
    }
  });
  return res;
}

/**
 * 数组扁平化(方案2：reduceFlat)
 * @param ary
 * @returns {*}
 * @example
 *    const source = [1, 2, [3, 4, [5, 6]], '7']
 *    console.log(reduceFlat(source))
 */
function reduceFlat(ary = []) {
  return ary.reduce((res, item) => res.concat(Array.isArray(item) ? reduceFlat(item) : item), []);
}

/**
 * 对象扁平化
 * @param obj
 * @returns {{}}
 * @example
 *    const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } };
 *    console.log(objectFlat(source));
 */
function objectFlat(obj = {}) {
  const res = {};
  function flat(item, preKey = "") {
    Object.entries(item).forEach(([key, val]) => {
      const newKey = preKey ? `${preKey}.${key}` : key;
      if (val && typeof val === "object") {
        flat(val, newKey);
      } else {
        res[newKey] = val;
      }
    });
  }
  flat(obj);
  return res;
}

/**
 * 图片懒加载
 * @param el
 * @returns {boolean}
 * @example
 *    <img src="default.png" data-src="https://xxxx/real.png">
 *    window.addEventListener("load", imageLazyLoad);
 *    window.addEventListener("scroll", imageLazyLoad);
 *    window.addEventListener("scroll", throttle(imageLazyLoad, 1000));
 */
function isVisible(el) {
  const position = el.getBoundingClientRect();
  const windowHeight = document.documentElement.clientHeight;
  // 顶部边缘可见
  const topVisible = position.top > 0 && position.top < windowHeight;
  // 底部边缘可见
  const bottomVisible = position.bottom < windowHeight && position.bottom > 0;
  return topVisible || bottomVisible;
}

function imageLazyLoad() {
  const images = document.querySelectorAll("img");
  for (let img of images) {
    const realSrc = img.dataset.src;
    if (!realSrc) continue;
    if (isVisible(img)) {
      img.src = realSrc;
      img.dataset.src = "";
    }
  }
}
// ****************************************************************************
/**
 * 事件总线 - 发布订阅模式
 * @example
 *   const eventBus = new EventEmitter();
 *   const task1 = () => console.log("task1");
 *   const task2 = () => console.log("task2");
 *   eventBus.on("task", task1);
 *   eventBus.on("task", task2);
 *   setTimeout(() => eventBus.emit("task"), 3000);
 */
class EventEmitter {
  constructor() {
    this.cache = {};
  }

  // 监听
  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn);
    } else {
      this.cache[name] = [fn];
    }
  }

  // 销毁
  off(name, fn) {
    const tasks = this.cache[name];
    if (tasks) {
      const index = tasks.findIndex(f => f === fn || f.callback === fn);
      if (index >= 0) {
        tasks.splice(index, 1);
      }
    }
  }

  // 提交事件
  emit(name, once = false) {
    if (this.cache[name]) {
      //创建副本，如果回掉函数内继续注册相同事件，会造成死循环
      const tasks = this.cache[name].slice();
      for (let fn of tasks) {
        fn();
      }
      if (once) {
        delete this.cache[name];
      }
    }
  }
}

/**
 * 自定义Promise
 * 建议阅读 [Promises/A+ 标准](https://promisesaplus.com/)
 * @example
 * new daoPromise(resolve => setTimeout(() => resolve(1), 500))
 *    .then(res => {
 *      console.log(res);
 *      return new daoPromise(resolve => setTimeout(() => resolve(2), 500));
 *    })
 *      .then(res => {
 *      console.log(res);
 *      throw new Error("a error");
 *    })
 *    .catch(err =>  console.log("==>", err));
 */
class daoPromise {
  constructor(func) {
    this.status = "pending";
    this.value = null;
    this.resolvedTasks = [];
    this.rejectedTasks = [];
    this._resolve = this._resolve.bind(this);
    this._reject = this._reject.bind(this);
    try {
      func(this._resolve, this._reject);
    } catch (error) {
      this._reject(error);
    }
  }

  _resolve(value) {
    setTimeout(() => {
      this.status = "fulfilled";
      this.value = value;
      this.resolvedTasks.forEach(t => t(value));
    });
  }

  _reject(reason) {
    setTimeout(() => {
      this.status = "reject";
      this.value = reason;
      this.rejectedTasks.forEach(t => t(reason));
    });
  }

  then(onFulfilled, onRejected) {
    return new daoPromise((resolve, reject) => {
      this.resolvedTasks.push(value => {
        try {
          const res = onFulfilled(value);
          if (res instanceof daoPromise) {
            res.then(resolve, reject);
          } else {
            resolve(res);
          }
        } catch (error) {
          reject(error);
        }
      });
      this.rejectedTasks.push(value => {
        try {
          const res = onRejected(value);
          if (res instanceof daoPromise) {
            res.then(resolve, reject);
          } else {
            reject(res);
          }
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// ****************************************************************************
/**
 * 自定义bind (原生为bind,自定义为daoBind)
 * @example
 *    const me = { name: "Mark" };
 *    const to = { name: "Json" };
 *    function say() {  console.log(`My name is ${this.name || "default"}`);}
 *    const meSay = say.daoBind(me);
 *    meSay();
 *    const toSay = say.daoBind(to);
 *    toSay();
 */
Function.prototype.daoBind = function(context = globalThis) {
  const fn = this;
  const args = Array.from(arguments).slice(-1);
  const newFunc = function() {
    const newArgs = args.concat(...arguments);
    if (this instanceof newFunc) {
      //通过new调用，绑定this为实例对象
      fn.apply(this, newArgs);
    } else {
      //通过普通函数形式调用，绑定context
      fn.apply(context, newArgs);
    }
  };
  newFunc.prototype = Object.create(fn.prototype);
  return newFunc;
};

/**
 * 自定义call (原生为call,自定义为daoCall)
 * @example
 *    const me = { name: "Mark" };
 *    function say() { console.log(`My name is ${this.name || "default"}`)}
 *    say.daoCall(me);
 */
Function.prototype.daoCall = function(context = globalThis) {
  //关键步骤，在context上调用方法，触发this绑定context,使用Symbol防止原有属性的覆盖
  const key = Symbol("key");
  context[key] = this;
  let args = [].slice.call(arguments, 1);
  let res = context[key](...args);
  delete context[key];
  return res;
};
/**
 * 自定义apply(原生为apply,自定义为daoApply)
 * @example
 *    const me = { name: "Mark" };
 *    function say() {  console.log(`My name is ${this.name || "default"}`);}
 *    say.daoApply(me);
 */
Function.prototype.daoApply = function(context = globalThis) {
  //关键步骤，在context上调用方法，触发this绑定context,使用Symbol防止原有属性的覆盖
  const key = Symbol("key");
  context[key] = this;
  let res;
  if (arguments[1]) {
    res = context[key](...arguments[1]);
  } else {
    res = context[key]();
  }
  delete context[key];
  return res;
};
// ****************************************************************************
// export default {
//   debounce,
//   throttle,
//   createNew,
//   deepCopy,
//   curry,
//   limit,
//   recursionFlat,
//   reduceFlat,
//   objectFlat,
//   imageLazyLoad,
//   EventEmitter,
//   daoPromise
// };

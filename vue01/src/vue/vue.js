/*
    vue核心原理
*/

(function() {
    class Vue {
        constructor(options) {
            this.data = options.data;
            // 数据劫持
            Observe(this.data);
            // 模板编译
            Compile(options.el, this);
        }
    }
    class Dep {
        constructor() {
            this.subList = [];
        }
        addSubList(watch) {
            this.subList.add(watch);
        }
        notify() {
            this.subList.forEach(watch => {
                watch.update();
            })
        }   
    }

    class Watch {
        constructor(vm, key, cb) {
            this.cb = cb;
            this.key = key;
            this.vm = vm;
            Dep.target = this;
            // 这里循环获取vm中key的值，会触发数据劫持中的get方法，在get方法中，添加到Dep发布器中
            key.split('.').reduce((newObj, key) => {
                return newObj[key];
            }, vm);
            Dep.target = null;
        }
        update() {
            const value = this.key.split('.').reduce((newObj, keys) => {newObj[keys]}, this.vm);
            this.cb(value);
        }
    }


    function Observe(obj) {
        if (!obj || typeof obj !== 'object') {
            return
        }
        const dep = new Dep();
        // 使用object.defineProperty，进行数据劫持
        Object.keys(obj).forEach(key => {
            let value = obj[key];
            // 递归处理多层级
            Observe(value);
            Object.defineProperty(obj, key, {
                configurable: true,
                enumerable: true,
                get() {
                    if (Dep.target) {
                        dep.addSubList(Dep.target);
                    }
                    return value;
                },
                set(newVal) {
                    value = newVal;
                    Observe(value);
                    dep.notify();
                }
            })
        })
    }

    function Compile(el, vm) {
        vm.$el = document.querySelector(el);
        // 文档碎片的形式，进行模板编译后的替换
        const childNode = document.createDocumentFragment();
        if (firstChildNode = vm.$el.firstChildNode) {
            childNode.appendChild(firstChildNode);
        }
        replace(childNode);
        vm.$el.appendChild(childNode);
        // 模板编译
        function replace(node) {
            // 差值表达式匹配正则
            const reglx = /\{\{\s*(\S+)\s*\}\}/;
            // 文本节点，解析差值表达式
            if (node.nodeType == 3) {
                const text = node.textContent;
                const execResult = reglx.exec(text);
                if (execResult) {
                    // 这里获取vm.data中，初始化设置的值
                    const value = execResult(1).split('.').reduce((newObj, key) => {newObj[key]}, vm.data);
                    // 将data中的值，替换到差值表达式中
                    node.textContent = text.replace(reglx, value);
                    new Watch(vm, execResult(1), newVal => {
                        node.textContent = text.replace(reglx, newVal);
                    });
                }
                return;
            }
            node.childNodes.forEach((child) => {
                replace(child);
            })
        }
    }
})()
export default {
    install(Vue) {
        //全局过滤器
        Vue.filter('mySlice', function(value) {
            return value.slice(0, 4);
        })

        //全局自定义指令
        Vue.directive('full-bind', {
            //指令与元素成功绑定时（一上来）
            bind(element, binding) {
                //虚拟dom，写样式，属性，value，跟页面无关的操作
                element.value = binding.value;
            },
            //指令所在元素被插入页面时
            inserted(element, binding) {
                //元素被放入页面后，获取焦点，拿到父元素，等必须要元素加入页面后操作
                element.value = binding.value;
                element.focus();
            },
            //指令所在的模板被重新解析时
            update(element, binding) {
                //真实dom
                element.value = binding.value;
            }
        })

        //全局混合
        Vue.mixin({
            methods: {
                showName() {
                    alert(this.name)
                }
            }
        })

        //给Vue原型上添加一个方法
        Vue.prototype.hello = () => {alert('你好啊')}
    }
}
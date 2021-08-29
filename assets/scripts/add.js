class Create {
    constructor() {

    }
    fn() {
        console.log('es6 语法的初始化');
        document.getElementsByTagName('body').onclick = yd.throttle(function() {
            console.log(123)
        }, 1500);
    }
}

export default Create;
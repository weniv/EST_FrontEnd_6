describe('클릭이벤트와 이를 통한 뷰 관리 매니저', () => {
    it('textManager 가 viewManager에 잘 전달되는지 확인합니다.', () => {
        const textManager = null;
        const button = document.createElement('button');
        const input = document.createElement('input');
        const strong = document.createElement('strong');

        const actual = () => new ViewManager(textManager, { button, input, strong });

        expect(actual).toThrowError();
    });

    it('viewManager 인스턴스를 만들 때 요소들이 잘 전달 되는지 확인합니다.', () => {

        const textManager = new TextManager();
        const button = null;
        const input = document.createElement('input');
        const strong = document.createElement('strong');

        const actual = () => new ViewManager(textManager, { button, input, strong });

        expect(actual).toThrowError();
    });


    const textManager = new TextManager();
    const button = document.createElement('button');
    const input = document.createElement('input');
    const strong = document.createElement('strong');

    const viewManager = new ViewManager(textManager, { button, input, strong });


    it('click 이벤트가 발생했을 때 changeValue 함수가 잘 호출되는지 확인합니다.', () => {

        spyOn(viewManager, 'changeValue');

        button.click();

        expect(viewManager.changeValue).toHaveBeenCalled();
    });

    it('changeValue 함수를 호출했을 때 updateView 함수가 잘 호출되는지 확인합니다.', () => {
        spyOn(viewManager, 'updateView');

        viewManager.changeValue();

        expect(viewManager.updateView).toHaveBeenCalled();
    });
});
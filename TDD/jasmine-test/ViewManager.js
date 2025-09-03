class ViewManager {
    constructor(textManager, options) {
        if (!(textManager instanceof TextManager)) {
            throw Error('textManager 인스턴스 객체가 전달되지 않았습니다.');
        }

        if (!options.button || !options.input || !options.strong) {
            throw Error('전달 받지 목한 요소가 존재합니다.');
        }

        this.textManager = textManager;
        this.input = options.input;
        this.strong = options.strong;

        options.button.addEventListener('click', () => {
            this.changeValue();
        });
    }

    changeValue() {
        this.textManager.setValue({ data: this.input.value });
        this.updateView();
    }

    updateView() {
        this.strong.textContent = this.textManager.getValue();
    }

}

// const viewManager = new ViewManager(textManager, {strong, input, button});
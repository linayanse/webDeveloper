$.fn.pressEnter = function() {
    var e = $.Event('keypress');

    e.keyCode = 13;
    $(this).trigger(e);
};

beforeEach(function() {
    var fixtures = jasmine.getFixtures();

    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
    fixtures.load('todo.html');
});

describe('initialize', function () {
    it('should have been defined', function() {
        expect($.fn.todoify).toBeDefined();
    });

    it('should be chainable after invoke', function() {
        var jq = $.fn.todoify();

        expect(jq.jquery).toBeDefined();
    });
});

describe('with static data', function () {
    it('should render an one-item list', function() {
        $('input').todoify({
            data: ['one-item'],
            to: '#todo-container'
        });

        expect($('#todo-container').find('.todo').length).toBe(1);
        expect($('#todo-container').find('.todo').text()).toBe('one-item');
    });

    it('should render multiple items', function () {
        $('input').todoify({
            data: ['one-item', 'two-item', 'three-item'],
            to: '#todo-container'
        });

        expect($('#todo-container').find('.todo').length).toBe(3);
    });
});

describe('manipulate todos', function () {
    it('should be able to add new item to empty list', function () {
        $('input').todoify({
            data: [],
            to: '#todo-container'
        });

        expect($('#todo-container').find('.todo').length).toBe(0);
        $('input').val('new item').pressEnter();
        expect($('#todo-container').find('.todo').length).toBe(1);
        expect($('#todo-container').find('.todo').text()).toBe('new item');
    });

    it('should be able to add new item to list has items', function () {
        $('input').todoify({
            data: ['one-item'],
            to: '#todo-container'
        });

        expect($('#todo-container').find('.todo').length).toBe(1);
        $('input').val('new item').pressEnter();
        expect($('#todo-container').find('.todo').length).toBe(2);
    });
});
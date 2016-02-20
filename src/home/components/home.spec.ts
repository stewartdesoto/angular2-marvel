import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {HomeComponent} from './home';

export function main() {
  describe('Home component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let homeDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(homeDOMEl, 'h1')[0].textContent).toEqual('Howdy!');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [HomeComponent],
  template: '<home></home>'
})
class TestComponent {}

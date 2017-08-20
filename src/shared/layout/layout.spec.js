import { template as _ } from 'lodash';

import logo from '../../assets/images/touch/ms-touch-icon-144x144-precomposed.png';

import template from './layout.html';
import style from './layout.css';
import data from './layout.json';

import { layout } from './layout';

describe('Layout', () => {
  describe('Template', () => {
    it('should be `fixed-header`', () => {
      expect(template).toMatch(/mdc-toolbar--fixed"/);
    });
  });

  // describe('Style', () => {
  //   it('should be `style.content`', () => {
  //     expect(template).toMatch(/style.content/);
  //   });
  // });

  describe('Data', () => {
    it('should be `TITLE` and `LINK`', () => {
      expect(JSON.stringify(data)).toMatch(/TITLE/);
      expect(JSON.stringify(data)).toMatch(/LINK/);
    });
  });

  it('should be defined', () => {
    expect(layout).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof layout).toBe('function');
  });

  it('should be able to work', () => {
    const dummyElement = document.createElement('div');
    document.querySelector = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

    const imports = { style, image: { logo } };
    document.querySelector('#app').innerHTML = _(template, { imports })(data);
    document.querySelector('#content').innerHTML = `<p>Content</p>`;
  });
});
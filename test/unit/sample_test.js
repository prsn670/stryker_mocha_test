import React from 'react';
import {describe, it, beforeEach} from 'mocha';
import {expect} from 'chai';
import App from '../../src/App.js';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

describe('<App />', function () {
    let wrapper;
    beforeEach(function () {
        wrapper = shallow(<App />);
    });

    it('should be true', function () {
       expect(true).to.equal(true) ;
    });

    it('expect wrapper to exist', function () {
       expect(wrapper.exists()).to.equal(true);
    });
});
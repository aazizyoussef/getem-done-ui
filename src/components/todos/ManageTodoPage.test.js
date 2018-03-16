import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageTodoPage} from './ManageTodoPage';

describe ('Manage Todo Page', () => {
  it.skip('sets error message upon blur of empty title field', () => {
    const props = {
      authors: [],
      actions: { saveTodo: () => { return Promise.resolve(); }},
      todo: {userId: '', description: ''}
    };
    const wrapper = mount(<ManageTodoPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit'); //assure we found the submit.
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});

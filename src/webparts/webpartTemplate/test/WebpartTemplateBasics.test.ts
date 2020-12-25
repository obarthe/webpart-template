/// <reference types="jest" />

import * as React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import WebpartTemplate from '../components/WebpartTemplate';
import { IWebpartTemplateProps } from '../components/IWebpartTemplateProps';

describe('Enzyme basics', () => {

  let reactComponent: ReactWrapper<IWebpartTemplateProps,{}>;
  let description : "This is a Michelin WebPart Template";

  beforeEach(() => {
    reactComponent = mount(React.createElement(
      WebpartTemplate,
      {
        description: description
      }
    ));
  });

  afterEach(() => {
    reactComponent.unmount();
  });

  it('should has the correct title', () => {

    // Arrange
    // define contains/like css selector
    let cssSelector: string = 'h1';

    // Act
    // find the elemet using css selector
    const text = reactComponent.find(cssSelector).text();

    // Assert
    expect(text).toBe("Welcome to SharePoint!");
  });

  it('Description is displayed properly ', () => {
    expect(reactComponent.props().description).toBe(description);
  });
});

// Usefull links:
// https://reactjs.org/docs/test-renderer.html
// https://github.com/airbnb/enzyme

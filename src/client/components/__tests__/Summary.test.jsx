import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Summary from '../Summary';

describe('Review component', () => {
  test('it should render without throwing an error', () => {
    expect(shallow(<Summary />)
      .contains(
        <div className="review">
          <h3>Review from Chris</h3>
          <p>This is a review summary</p>
        </div>,
      )).toBe(true);
  });

  test('it should be selectable by class "review"', () => {
    expect(shallow(<Summary />).is('.review')).toBe(true);
  });

  test('it should mount in a full DOM', () => {
    expect(mount(<Summary />).find('.review').length).toBe(1);
  });

  test('it should render to static HTML', () => {
    expect(render(<Summary />).text()).toEqual('Review from ChrisThis is a review summary');
  });
});

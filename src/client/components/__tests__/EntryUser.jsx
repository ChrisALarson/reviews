import React from 'react';
import { shallow, mount, render } from 'enzyme';
import EntryText from '../EntryText';

describe('Review component', () => {
  test('it should render without throwing an error', () => {
    expect(shallow(<EntryText />)
      .contains(
        <div className="review">
          <h3>Review from Chris</h3>
          <p>This is a review summary</p>
        </div>,
      )).toBe(true);
  });

  test('it should be selectable by class "review"', () => {
    expect(shallow(<EntryText />).is('.review')).toBe(true);
  });

  test('it should mount in a full DOM', () => {
    expect(mount(<EntryText />).find('.review').length).toBe(1);
  });

  test('it should render to static HTML', () => {
    expect(render(<EntryText />).text()).toEqual('Review from ChrisThis is a review summary');
  });
});
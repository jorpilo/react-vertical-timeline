import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const VerticalTimeline = ({ animate, className, layout, children, lineColor, lineWidth }) => {
  return (
    <div
      className={classNames(className, 'vertical-timeline', {
        'vertical-timeline--animate': animate,
        'vertical-timeline--two-columns': layout === '2-columns',
        'vertical-timeline--one-column-left':
          layout === '1-column' || layout === '1-column-left',
        'vertical-timeline--one-column-right': layout === '1-column-right',
      })}
      style={{"--line-color": lineColor, "--line-width": lineWidth}}
    >
      {children}
    </div>
  )
}

VerticalTimeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  animate: PropTypes.bool,
  lineColor: PropTypes.string,
  lineWidth: PropTypes.string,
  layout: PropTypes.oneOf([
    '1-column-left',
    '1-column',
    '2-columns',
    '1-column-right',
  ]),
  lineHeight: PropTypes.string
};

VerticalTimeline.defaultProps = {
  animate: true,
  className: '',
  layout: '2-columns',
  lineColor: "white",
  lineWidth: "4px"
};

export default VerticalTimeline;

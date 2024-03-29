import React, {memo} from 'react';
import PropTypes from 'prop-types';

/** 로딩바 컴포넌트 */
// --> https://mhnpd.github.io/react-loader-spinner/
import {Blocks} from 'react-loader-spinner';

const Spinner = memo(({loading, width, height}) => {
  return (
    <Blocks
        visible={loading}
        height={width}
        width={height}
        ariaLabel="blocks-loading"
        wrapperStyle={{
            position:'fixed',
            zIndex:9999,
            left:'50%',
            top:'50%',
            transform: 'translate(-50%, -50%)'
        }}
        wrapperClass='blocks-wrapper'
    />
  );
});

Spinner.defaultProps = {
    visible: false,
    width:100,
    height:100
};

Spinner.propTypes = {
    visible: PropTypes.bool.isRequired,
    width:PropTypes.number,
    height:PropTypes.number
};

export default Spinner;

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var blinkAnimation = 'code-slide-control-helpers-blink';
var shakeAnimation = 'code-slide-control-helpers-shake';

var getContainerTransform = function getContainerTransform() {
  var extraTransform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return 'translate(-100%, -100%) ' + extraTransform;
};

var styles = {
  container: {
    position: 'fixed',
    bottom: '-15%',
    transform: getContainerTransform()
  },
  controlKey: {
    height: '50px',
    width: '50px',
    backgroundColor: 'white',
    color: 'black',
    margin: '15px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    border: 'solid 1px rgba(0, 0, 0, 0.4)',
    opacity: 0.3
  },
  controlKeyActive: {
    animation: '2.5s ease-in-out infinite alternate ' + blinkAnimation + ' '
  },
  containerPristine: {
    animation: '2.5s ease-in-out infinite 1s alternate ' + shakeAnimation
  }
};

var CodeSlideControlHelpers = function (_React$Component) {
  _inherits(CodeSlideControlHelpers, _React$Component);

  function CodeSlideControlHelpers() {
    _classCallCheck(this, CodeSlideControlHelpers);

    return _possibleConstructorReturn(this, (CodeSlideControlHelpers.__proto__ || Object.getPrototypeOf(CodeSlideControlHelpers)).apply(this, arguments));
  }

  _createClass(CodeSlideControlHelpers, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          hasNextRange = _props.hasNextRange,
          pristine = _props.pristine;

      return React.createElement(
        'div',
        { style: { position: 'relative' } },
        React.createElement(
          'div',
          { style: { position: 'absolute', left: '99%' } },
          React.createElement(
            'div',
            {
              style: _extends({}, styles.container, pristine ? styles.containerPristine : {})
            },
            React.createElement(
              'style',
              null,
              '\n              @keyframes ' + blinkAnimation + ' {\n                0%, 35% {\n                  opacity: 1;\n                }\n                50% {\n                  opacity: 0.5;\n                }\n                65%, 100% {\n                  opacity: 1;\n                }\n              }\n              @keyframes ' + shakeAnimation + ' {\n                0%, 40% {\n                  transform: ' + getContainerTransform() + ';\n                }\n                45% {\n                  transform: ' + getContainerTransform('translateX(3px)') + ';\n                }\n                50% {\n                  transform: ' + getContainerTransform('translateX(-5px)') + ';\n                }\n                55% {\n                  transform: ' + getContainerTransform('translateX(4px)') + ';\n                }\n                60%, 100% {\n                  transform: ' + getContainerTransform() + ';\n                }\n              }\n            '
            ),
            React.createElement(
              'div',
              { style: styles.controls },
              React.createElement(
                'div',
                { style: styles.controlKey },
                '\u2191'
              ),
              React.createElement(
                'div',
                {
                  style: _extends({}, styles.controlKey, hasNextRange ? styles.controlKeyActive : {})
                },
                '\u2193'
              )
            )
          )
        )
      );
    }
  }]);

  return CodeSlideControlHelpers;
}(React.Component);

module.exports = CodeSlideControlHelpers;
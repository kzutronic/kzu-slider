module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KzuSlider = function (_Component) {
  _inherits(KzuSlider, _Component);

  function KzuSlider(props) {
    _classCallCheck(this, KzuSlider);

    var _this = _possibleConstructorReturn(this, (KzuSlider.__proto__ || Object.getPrototypeOf(KzuSlider)).call(this, props));

    _this.state = {
      slide: 0,
      slides: 0,
      players: [],
      backwards: false,
      touchDownX: 0,
      swipeX: 0,
      imgPosition: 0,
      width: 0,
      loading: true
    };
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    _this.handleNextClick = _this.handleNextClick.bind(_this);
    _this.handlePreviousClick = _this.handlePreviousClick.bind(_this);
    return _this;
  }

  _createClass(KzuSlider, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          slides = _props.slides,
          auto = _props.auto,
          slide = _props.slide;


      if (slides && slides.length > 0) {
        this.setState({ slide: 1, slides: slides.length });
      }
      if (slide) {
        this.setState({ slide: slide });
      }
      if (auto) {
        this.AutoPlay();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.slide) {
        this.setState({ slide: nextProps.slide });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
      window.addEventListener("resize", this.updateWindowDimensions);
      this.updateWindowDimensions();

      this.setState({
        loading: false
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      this.setState({ width: window.innerWidth });
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      if (this.props.parallax) {
        this.setState({
          imgPosition: window.pageYOffset
        });
      }
    }
  }, {
    key: "height",
    value: function height() {
      var h = 500;
      var height = this.props.height;

      if (height && height > 0 && height < 1000) {
        h = height;
      }
      if (height === "full") {
        h = "100vh";
      }
      return h;
    }
  }, {
    key: "duration",
    value: function duration() {
      var duration = this.props.duration;

      var time = 6000;
      if (duration && duration > 0) {
        time = duration;
      }
      return time;
    }
  }, {
    key: "handlePreviousClick",
    value: function handlePreviousClick() {
      if (this.state.slide === 1) {
        this.setState({ slide: this.state.slides, backwards: true });
      } else {
        this.setState({ slide: this.state.slide - 1, backwards: true });
      }
    }
  }, {
    key: "handleNextClick",
    value: function handleNextClick() {
      if (this.state.slide === this.state.slides) {
        this.setState({ slide: 1, backwards: false });
      } else {
        this.setState({ slide: this.state.slide + 1, backwards: false });
      }
    }
  }, {
    key: "AutoPlay",
    value: function AutoPlay() {
      var _this2 = this;

      var player = void 0;
      player = setInterval(function () {
        _this2.handleNextClick();
      }, this.duration());

      var players = this.state.players;
      players.push(player);
      this.setState({ players: players });
    }
  }, {
    key: "stopAutoPlay",
    value: function stopAutoPlay() {
      if (this.state.players && this.state.players.length > 0) {
        this.state.players.forEach(function (p) {
          clearInterval(p);
        });
        this.setState({ players: [] });
      }
    }
  }, {
    key: "classes",
    value: function classes() {
      var classes = ["image-slider-container"];

      if (this.props.className) {
        classes.push(this.props.className);
      }

      return classes.join(" ");
    }
  }, {
    key: "contentClasses",
    value: function contentClasses(slide) {
      var containerClasses = ["slide-contents-container"];
      if (slide.align === "center") {
        containerClasses.push("slide-contents-align-center");
      } else if (slide.align === "right") {
        containerClasses.push("slide-contents-align-right");
      } else {
        containerClasses.push("slide-contents-align-left");
      }

      return containerClasses.join(" ");
    }
  }, {
    key: "slideClasses",
    value: function slideClasses() {
      var slideClasses = ["slide-single"];
      return slideClasses.join(" ");
    }
  }, {
    key: "singleSlide",
    value: function singleSlide(slide, index) {
      var _props2 = this.props,
          contentPadding = _props2.contentPadding,
          parallax = _props2.parallax,
          contentWidth = _props2.contentWidth;

      var mobile = false;
      if (this.state.width < 820) {
        mobile = true;
      }
      // console.log(parallax);

      return _react2.default.createElement(
        "div",
        {
          key: index,
          className: this.slideClasses(),
          style: {
            // backgroundImage: slide.youtubeKey ? null : `url(${slide.background})`
            //backgroundAttachment: parallax ? "fixed" : "scroll"
            // top: parallax ? this.state.imgPosition : 0
          }
        },
        _react2.default.createElement("div", {
          className: "slide-image-img",
          style: {
            backgroundImage: slide.youtubeKey ? null : "url(" + (mobile && slide.backgroundMobile ? slide.backgroundMobile : slide.background) + ")"
            // transform: `translateY(${parallax ? this.state.imgPosition : 0}px) `,
            //top: parallax ? this.state.imgPosition : 0
            //backgroundAttachment: parallax ? "fixed" : "scroll"
          }
        }),
        slide.shades && slide.shades.length > 0 && slide.shades.map(function (shade, shi) {
          return _react2.default.createElement("div", {
            key: shi,
            className: "slide-shade",
            style: {
              background: "linear-gradient(" + (shade.angle || 0) + "deg, " + (shade.from || "rgba(0,0,0,0)") + "," + (shade.to || "rgba(0,0,0,0)") + ")"
            }
          });
        }),
        slide.youtubeKey && _react2.default.createElement(
          "div",
          { className: "slide-video-container" },
          _react2.default.createElement("iframe", {
            id: slide.youtubeKey,
            title: slide.youtubeKey,
            style: {
              height: (slide.videoSize || 100) + "%",
              top: (-(slide.videoSize - 100) / 2 || 0) + "%"
            },
            src: "https://www.youtube.com/embed/" + slide.youtubeKey + "?rel=0&controls=0&showinfo=0&autoplay=1&mute=" + (slide.mute === false ? 0 : 1),
            frameBorder: "0",
            allow: "autoplay; encrypted-media"
          })
        ),
        _react2.default.createElement(
          "div",
          {
            className: this.contentClasses(slide),
            style: {
              backgroundColor: slide.contentBg,
              width: (contentWidth || 80) + "%",
              paddingLeft: (contentPadding && contentPadding.left || 40) + "px",
              paddingRight: (contentPadding && contentPadding.right || 40) + "px",
              paddingTop: (contentPadding && contentPadding.top || 24) + "px",
              paddingBottom: (contentPadding && contentPadding.bottom || 24) + "px"
            }
          },
          slide.title && _react2.default.createElement(
            "div",
            {
              className: "slide-single-title",
              style: {
                color: slide.contentColor
              }
            },
            slide.title
          ),
          slide.subtitle && _react2.default.createElement(
            "div",
            {
              className: "slide-single-subtitle",
              style: {
                color: slide.contentColor
              }
            },
            slide.subtitle
          ),
          slide.content && _react2.default.createElement(
            "div",
            {
              className: "slide-single-content",
              style: {
                color: slide.contentColor
              }
            },
            slide.content
          ),
          slide.buttons && slide.buttons.length > 0 && _react2.default.createElement(
            "div",
            { className: "slide-single-buttons" },
            slide.buttons.map(function (b, i) {
              return _react2.default.createElement(
                "div",
                {
                  key: i,
                  className: "slide-button",
                  onClick: b.onClick,
                  onTouchStart: function onTouchStart(e) {
                    e.stopPropagation();
                    b.onClick();
                  },
                  style: {
                    backgroundColor: b.color ? b.color : "#fff",
                    color: b.textColor ? b.textColor : "#000"
                  }
                },
                _react2.default.createElement("div", { className: "slide-button-overlay" }),
                _react2.default.createElement(
                  "div",
                  { className: "slide-button-title" },
                  b.title
                )
              );
            })
          )
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props3 = this.props,
          slides = _props3.slides,
          auto = _props3.auto,
          hideArrows = _props3.hideArrows,
          hideDots = _props3.hideDots,
          transition = _props3.transition,
          disableTouch = _props3.disableTouch;


      var transitionActive = this.state.slide === 1 && !this.state.backwards || this.state.slide === slides.length && slides.length > 2 || slides.length === 2 && this.state.slide === slides.length && this.state.backwards ? true : false;

      return this.state.loading ? _react2.default.createElement("div", { className: "loading" }) : _react2.default.createElement(
        "div",
        {
          className: this.classes(),
          style: _extends({
            height: this.height()
          }, this.props.style),
          onTouchStart: function onTouchStart(e) {
            //e.preventDefault();

            auto && _this3.stopAutoPlay();
            _this3.setState({
              touchDownX: e.touches[0].clientX
            });
          },
          onTouchMove: function onTouchMove(e) {
            //e.preventDefault();
            var swipeLenght = e.touches[0].clientX - _this3.state.touchDownX;
            if (!disableTouch && _this3.state.touchDownX) {
              if (swipeLenght > 40 || swipeLenght < -40) {
                _this3.setState({
                  swipeX: e.touches[0].clientX - _this3.state.touchDownX
                });
              }
            }
          },
          onTouchEnd: function onTouchEnd(e) {
            if (!disableTouch) {
              //e.preventDefault();

              if (_this3.state.swipeX > 100) {
                _this3.handlePreviousClick();
              }
              if (_this3.state.swipeX < -100) {
                _this3.handleNextClick();
              }
              auto && _this3.AutoPlay();
              _this3.setState({
                touchDownX: 0,
                swipeX: 0
              });
            }
          }
        },
        _react2.default.createElement(
          "div",
          { className: "image-slider" },
          slides && slides.length > 0 ? _react2.default.createElement(
            "div",
            {
              className: "slides-screen"

              // onMouseDown={e => {
              //   // console.log("mouse down", e.screenX);
              //   auto && this.stopAutoPlay();
              //   this.setState({ mouseDownX: e.screenX, mouseMoveX: e.screenX });
              // }}
              // onMouseMove={e => {
              //   //console.log("mouse move", e.screenX);
              //   if (this.state.mouseDownX) {
              //     this.setState({ mouseMoveX: e.screenX });
              //   }
              // }}
              // onMouseUp={e => {
              //   console.log(this.state.mouseMoveX - this.state.mouseDownX);
              //   if (this.state.mouseMoveX - this.state.mouseDownX > 150) {
              //     this.handlePreviousClick();
              //   }
              //   if (this.state.mouseMoveX - this.state.mouseDownX < -150) {
              //     this.handleNextClick();
              //   }
              //   auto && this.AutoPlay();
              //   this.setState({
              //     mouseDownX: 0,
              //     mouseMoveX: 0,
              //     mouseUpX: 0
              //   });
              // }}
            },
            _react2.default.createElement(
              "div",
              {
                className: "slides-container-actual",
                style: {
                  width: slides.length * 100 + "%",
                  transform: "translateX(calc(" + (this.state.slide - 1) * -(100 / slides.length) + "% + " + this.state.swipeX + "px))",
                  transition: this.state.touchDownX ? null : "transform " + (transition ? transition / 1000 : 1) + "s "
                }
              },
              slides.map(function (s, i) {
                return _this3.singleSlide(s, i);
              })
            ),
            _react2.default.createElement(
              "div",
              {
                className: "slides-container-transition",
                style: {
                  width: (slides.length + 2) * 100 + "%",
                  transform: "" + (this.state.slide === 1 ? "translateX(calc(" + -100 / (slides.length + 2) + "% + " + this.state.swipeX + "px ))" : this.state.slide === slides.length ? "translateX(calc(0% + " + this.state.swipeX + "px ))" : "translateX(calc(" + 100 / (slides.length + 2) + "% + " + this.state.swipeX + "px ))"),
                  zIndex: transitionActive ? 10 : -10,
                  transition: this.state.touchDownX ? null : "transform " + (transition ? transition / 1000 : 1) + "s "
                }
              },
              this.singleSlide(slides[slides.length - 1], "last"),
              this.singleSlide(slides[0], "first"),
              slides.map(function (s, i) {
                return _react2.default.createElement("div", { className: "slide-single", key: i });
              })
            )
          ) : _react2.default.createElement(
            "div",
            { className: "kzu-slider" },
            _react2.default.createElement(
              "span",
              null,
              "kzu slider"
            )
          ),
          !hideArrows && slides && slides.length > 1 && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              "div",
              {
                className: "previous-slide-button slide-nav-button",
                onMouseOver: function onMouseOver() {
                  auto && _this3.stopAutoPlay();
                },
                onMouseLeave: function onMouseLeave() {
                  auto && _this3.AutoPlay();
                },
                onClick: function onClick() {
                  return _this3.handlePreviousClick();
                }
                // onTouchStart={e => {
                //   e.preventDefault();
                //   this.handlePreviousClick();
                // }}
              },
              _react2.default.createElement(
                "svg",
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" },
                _react2.default.createElement("path", { d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" })
              )
            ),
            _react2.default.createElement(
              "div",
              {
                className: "next-slide-button slide-nav-button",
                onMouseOver: function onMouseOver() {
                  auto && _this3.stopAutoPlay();
                },
                onMouseLeave: function onMouseLeave() {
                  auto && _this3.AutoPlay();
                },
                onClick: function onClick() {
                  return _this3.handleNextClick();
                }
                // onTouchStart={e => {
                //   e.preventDefault();
                //   this.handleNextClick();
                // }}
              },
              _react2.default.createElement(
                "svg",
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" },
                _react2.default.createElement("path", { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" })
              )
            )
          ),
          !hideDots && slides && slides.length > 0 && _react2.default.createElement(
            "div",
            {
              className: "slide-navigation-dots",
              onMouseOver: function onMouseOver() {
                auto && _this3.stopAutoPlay();
              },
              onMouseLeave: function onMouseLeave() {
                auto && _this3.AutoPlay();
              }
            },
            slides && slides.length > 0 && slides.map(function (s, i) {
              var classes = ["slide-navigation-dot"];
              if (i + 1 === _this3.state.slide) {
                classes.push("slide-navigation-dot-active");
              }

              return _react2.default.createElement("div", {
                key: i,
                className: classes.join(" "),
                onClick: function onClick(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  if (_this3.state.slide !== i + 1) {
                    _this3.setState({
                      slide: i + 1,
                      backwards: _this3.state.slide === 2 ? true : false
                    });
                  }
                }
              });
            })
          )
        )
      );
    }
  }]);

  return KzuSlider;
}(_react.Component);

exports.default = KzuSlider;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(3);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!./kzuSlider.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!./kzuSlider.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".image-slider-container {\n  box-sizing: border-box;\n  overflow: hidden;\n  font-family: inherit;\n  /*font-family: \"Open Sans\", sans-serif;*/\n}\n\n.kzu-slider {\n  position: absolute;\n  z-index: -25;\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  font-size: 32px;\n  font-weight: 500;\n  color: rgba(100, 100, 100, 0.25);\n}\n\n.image-slider {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.slides-screen {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n\n.slides-container-actual {\n  position: relative;\n  height: 100%;\n  display: flex;\n  /*transition: margin-left 1s ease-in-out;*/\n  opacity: 1;\n}\n\n.slides-container-transition {\n  position: absolute;\n  top: 0px;\n  height: 100%;\n  display: flex;\n  /*transition: margin-left 1s ease-in-out;*/\n}\n\n.slide-single {\n  height: 100%;\n  width: 100%;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  position: relative;\n}\n\n.slide-single .slide-image-img {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.single-slide-parallax {\n}\n\n.slide-contents-container {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding: 24px 32px;\n  border-radius: 2px;\n  position: relative;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.slide-contents-align-left {\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-align-content: flex-start;\n  -ms-flex-line-pack: start;\n  align-content: flex-start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  text-align: left;\n}\n\n.slide-contents-align-center {\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-align-content: stretch;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  text-align: center;\n}\n\n.slide-contents-align-right {\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-align-content: flex-end;\n  -ms-flex-line-pack: end;\n  align-content: flex-end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  text-align: right;\n}\n\n.slide-single-title {\n  font-size: 54px;\n  line-height: 62px;\n}\n.slide-single-subtitle {\n  font-size: 24px;\n  margin-bottom: 8px;\n}\n.slide-single-content {\n  font-size: 14px;\n}\n\n.slide-single-buttons {\n  margin-top: 16px;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n}\n\n.slide-nav-button {\n  box-sizing: border-box;\n  position: absolute;\n  z-index: 30;\n  top: calc(50% - 24px);\n  height: 48px;\n  width: 48px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  background: rgba(180, 180, 180, 0.2);\n  transition: background 0.2s;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.slide-nav-button:hover {\n  background: rgba(180, 180, 180, 0.5);\n  transition: background 0.2s;\n}\n\n.slide-nav-button svg {\n  width: 20px;\n  height: 20px;\n  fill: rgba(255, 255, 255, 0.8);\n}\n\n.slide-nav-button:hover svg {\n  fill: #fff;\n  transition: fill 0.2s;\n}\n\n.previous-slide-button {\n  padding-right: 2px;\n  left: 8px;\n}\n\n.next-slide-button {\n  padding-left: 2px;\n  right: 8px;\n}\n\n.slide-button {\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 0.5px;\n  margin: 0px 8px;\n  padding: 10px 20px;\n  border-radius: 2px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  color: #fff;\n}\n\n.slide-button:hover {\n  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);\n}\n\n.slide-button:hover .slide-button-overlay {\n  opacity: 1;\n  transition: opacity 0.1s;\n}\n\n.slide-button:nth-child(1) {\n  margin-left: 0px;\n}\n\n.slide-button:nth-last-child(1) {\n  margin-right: 0px;\n}\n\n.slide-button-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  opacity: 0;\n  z-index: 1;\n  transition: opacity 0.1s;\n}\n\n.slide-button-title {\n  position: relative;\n  z-index: 2;\n}\n\n.text-wrap {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.slide-navigation-dots {\n  position: absolute;\n  width: 100%;\n  bottom: 16px;\n  z-index: 99;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-align-content: center;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.slide-navigation-dot {\n  height: 8px;\n  width: 8px;\n  border-radius: 4px;\n  background-color: rgba(210, 210, 210, 0.8);\n  margin: 4px;\n  cursor: pointer;\n}\n\n.slide-navigation-dot-active {\n  background: rgba(255, 255, 255, 0.9);\n}\n\n.slide-navigation-dot:hover {\n  background-color: rgba(200, 200, 255, 0.9);\n  margin: 4px;\n  cursor: pointer;\n}\n\n.slide-video-container {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.slide-video-container iframe {\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  min-height: 100%;\n}\n\n.slide-shade {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0px;\n  top: 0px;\n  z-index: 0;\n}\n\n@media screen and (max-width: 820px) {\n  .slide-contents-container {\n    width: 75%;\n    padding: 16px 24px !important;\n  }\n  .slide-single {\n    /*background-attachment: scroll !important;*/\n  }\n  .slide-single-title {\n    font-size: 24px;\n    line-height: 32px;\n  }\n  .slide-single-subtitle {\n    font-size: 16px;\n    margin-bottom: 4px;\n  }\n  .slide-single-content {\n    font-size: 12px;\n    line-height: 16px;\n  }\n\n  .slide-single-buttons {\n    margin-top: 12px;\n  }\n  .slide-button {\n    font-size: 11px;\n    margin: 0px 4px;\n    padding: 6px 8px;\n  }\n  .slide-nav-button {\n    top: calc(50% - 14px);\n    height: 28px;\n    width: 28px;\n  }\n  .slide-nav-button svg {\n    width: 14px;\n    height: 14px;\n  }\n  .slide-single-parallax {\n  }\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
import React, { Component, Fragment } from "react";

import "./kzuSlider.css";

class KzuSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
      slides: 0,
      players: [],
      backwards: false,
      touchDownX: 0,
      swipeX: 0
    };
  }

  height() {
    let h = 500;
    const { height } = this.props;
    if (height && height > 0 && height < 1000) {
      h = height;
    }
    if (height === "full") {
      h = "100vh";
    }
    return h;
  }

  duration() {
    const { duration } = this.props;
    let time = 6000;
    if (duration && duration > 0) {
      time = duration;
    }
    return time;
  }

  handlePreviousClick() {
    if (this.state.slide === 1) {
      this.setState({ slide: this.state.slides, backwards: true });
    } else {
      this.setState({ slide: this.state.slide - 1, backwards: true });
    }
  }

  handleNextClick() {
    if (this.state.slide === this.state.slides) {
      this.setState({ slide: 1, backwards: false });
    } else {
      this.setState({ slide: this.state.slide + 1, backwards: false });
    }
  }

  AutoPlay() {
    let player;
    player = setInterval(() => {
      this.handleNextClick();
    }, this.duration());

    let players = this.state.players;
    players.push(player);
    this.setState({ players });
  }

  stopAutoPlay() {
    if (this.state.players && this.state.players.length > 0) {
      this.state.players.forEach(p => {
        clearInterval(p);
      });
      this.setState({ players: [] });
    }
  }

  componentWillMount() {
    const { slides, auto } = this.props;

    if (slides && slides.length > 0) {
      this.setState({ slide: 1, slides: slides.length });
    }

    if (auto) {
      this.AutoPlay();
    }
  }

  classes() {
    let classes = ["image-slider-container"];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    return classes.join(" ");
  }

  contentClasses(slide) {
    let containerClasses = ["slide-contents-container"];
    if (slide.align === "center") {
      containerClasses.push("slide-contents-align-center");
    } else if (slide.align === "right") {
      containerClasses.push("slide-contents-align-right");
    } else {
      containerClasses.push("slide-contents-align-left");
    }

    return containerClasses.join(" ");
  }

  singleSlide(slide, index) {
    const { parallax, contentWidth, contentPadding } = this.props;

    return (
      <div
        key={index}
        className="slide-single"
        style={{
          backgroundImage: slide.youtubeKey ? null : `url(${slide.background})`,
          backgroundAttachment: parallax ? "fixed" : "scroll"
        }}
      >
        {slide.shades &&
          slide.shades.length > 0 &&
          slide.shades.map((shade, shi) => {
            return (
              <div
                key={shi}
                className="slide-shade"
                style={{
                  background: `linear-gradient(${shade.angle ||
                    0}deg, ${shade.from || "rgba(0,0,0,0)"},${shade.to ||
                    "rgba(0,0,0,0)"})`
                }}
              />
            );
          })}

        {slide.youtubeKey && (
          <div className="slide-video-container">
            <iframe
              id={slide.youtubeKey}
              title={slide.youtubeKey}
              style={{
                height: `${slide.videoSize || 100}%`,
                top: `${-(slide.videoSize - 100) / 2 || 0}%`
              }}
              src={`https://www.youtube.com/embed/${
                slide.youtubeKey
              }?rel=0&controls=0&showinfo=0&autoplay=1&mute=${
                slide.mute === false ? 0 : 1
              }`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
            />
          </div>
        )}
        <div
          className={this.contentClasses(slide)}
          style={{
            backgroundColor: slide.contentBg,
            width: `${contentWidth || 80}%`,
            paddingLeft: `${(contentPadding && contentPadding.left) || 40}px`,
            paddingRight: `${(contentPadding && contentPadding.right) || 40}px`,
            paddingTop: `${(contentPadding && contentPadding.top) || 24}px`,
            paddingBottom: `${(contentPadding && contentPadding.bottom) ||
              24}px`
          }}
        >
          {slide.title && (
            <div
              className="slide-single-title"
              style={{
                color: slide.contentColor
              }}
            >
              {slide.title}
            </div>
          )}
          {slide.subtitle && (
            <div
              className="slide-single-subtitle"
              style={{
                color: slide.contentColor
              }}
            >
              {slide.subtitle}
            </div>
          )}
          {slide.content && (
            <div
              className="slide-single-content"
              style={{
                color: slide.contentColor
              }}
            >
              {slide.content}
            </div>
          )}
          {slide.buttons &&
            slide.buttons.length > 0 && (
              <div className="slide-single-buttons">
                {slide.buttons.map((b, i) => {
                  return (
                    <div
                      key={i}
                      className="slide-button"
                      onClick={b.onClick}
                      onTouchStart={e => {
                        e.stopPropagation();
                        b.onClick();
                      }}
                      style={{
                        backgroundColor: b.color ? b.color : "#fff",
                        color: b.textColor ? b.textColor : "#000"
                      }}
                    >
                      <div className="slide-button-overlay" />
                      <div className="slide-button-title">{b.title}</div>
                    </div>
                  );
                })}
              </div>
            )}
        </div>
      </div>
    );
  }

  render() {
    console.log(this.state.swipeX);
    const {
      slides,
      auto,
      hideArrows,
      hideDots,
      contentWidth,
      transition
    } = this.props;
    return (
      <div
        className={this.classes()}
        style={{
          height: this.height(),
          ...this.props.style
        }}
        onTouchStart={e => {
          e.preventDefault();

          auto && this.stopAutoPlay();
          this.setState({
            touchDownX: e.touches[0].clientX
          });
        }}
        onTouchMove={e => {
          e.preventDefault();
          const swipeLenght = e.touches[0].clientX - this.state.touchDownX;
          if (this.state.touchDownX) {
            if (swipeLenght > 40 || swipeLenght < -40) {
              this.setState({
                swipeX: e.touches[0].clientX - this.state.touchDownX
              });
            }
          }
        }}
        onTouchEnd={e => {
          e.preventDefault();
          console.log(this.state.swipeX);
          if (this.state.swipeX > 100) {
            this.handlePreviousClick();
          }
          if (this.state.swipeX < -100) {
            this.handleNextClick();
          }
          auto && this.AutoPlay();
          this.setState({
            touchDownX: 0,
            swipeX: 0
          });
        }}
      >
        <div className="image-slider">
          {slides && slides.length > 0 ? (
            <div
              className="slides-screen"

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
            >
              <div
                className="slides-container-actual"
                style={{
                  width: `${slides.length * 100}%`,
                  marginLeft: `calc(${(this.state.slide - 1) * -100}% + ${
                    this.state.swipeX
                  }px)`,
                  transition: this.state.touchDownX
                    ? null
                    : `margin-left ${
                        transition ? transition / 500 : 1
                      }s ease-in-out`
                }}
              >
                {slides.map((s, i) => {
                  return this.singleSlide(s, i);
                })}
              </div>
              <div
                className="slides-container-transition"
                style={{
                  width: `${(slides.length + 2) * 100}%`,
                  marginLeft: `${
                    this.state.slide === 1
                      ? `calc(${-100}% + ${this.state.swipeX}px )`
                      : this.state.slide === slides.length
                        ? `calc(0% + ${this.state.swipeX}px )`
                        : `calc(${100}% + ${this.state.swipeX}px )`
                  }`,
                  zIndex:
                    (this.state.slide === 1 && !this.state.backwards) ||
                    (this.state.slide === slides.length && slides.length > 2) ||
                    (slides.length === 2 &&
                      this.state.slide === slides.length &&
                      this.state.backwards)
                      ? 10
                      : -10,
                  transition: this.state.touchDownX
                    ? null
                    : `margin-left ${
                        transition ? transition / 500 : 1
                      }s ease-in-out`
                }}
              >
                {this.singleSlide(slides[slides.length - 1], "last")}
                {this.singleSlide(slides[0], "first")}
                {slides.map((s, i) => {
                  return <div className="slide-single" key={i} />;
                })}
              </div>
            </div>
          ) : (
            <div className="kzu-slider">
              <span>kzu slider</span>
            </div>
          )}

          {!hideArrows &&
            slides &&
            slides.length > 1 && (
              <Fragment>
                <div
                  className="previous-slide-button slide-nav-button"
                  onMouseOver={() => {
                    auto && this.stopAutoPlay();
                  }}
                  onMouseLeave={() => {
                    auto && this.AutoPlay();
                  }}
                  onClick={() => this.handlePreviousClick()}
                  onTouchStart={e => {
                    e.preventDefault();
                    this.handlePreviousClick();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
                  </svg>
                </div>
                <div
                  className="next-slide-button slide-nav-button"
                  onMouseOver={() => {
                    auto && this.stopAutoPlay();
                  }}
                  onMouseLeave={() => {
                    auto && this.AutoPlay();
                  }}
                  onClick={() => this.handleNextClick()}
                  onTouchStart={e => {
                    e.preventDefault();
                    this.handleNextClick();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                  </svg>
                </div>
              </Fragment>
            )}
          {!hideDots &&
            slides &&
            slides.length > 0 && (
              <div
                className="slide-navigation-dots"
                onMouseOver={() => {
                  auto && this.stopAutoPlay();
                }}
                onMouseLeave={() => {
                  auto && this.AutoPlay();
                }}
              >
                {slides &&
                  slides.length > 0 &&
                  slides.map((s, i) => {
                    let classes = ["slide-navigation-dot"];
                    if (i + 1 === this.state.slide) {
                      classes.push("slide-navigation-dot-active");
                    }

                    return (
                      <div
                        key={i}
                        className={classes.join(" ")}
                        onClick={e => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (this.state.slide !== i + 1) {
                            this.setState({
                              slide: i + 1,
                              backwards: this.state.slide === 2 ? true : false
                            });
                          }
                        }}
                      />
                    );
                  })}
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default KzuSlider;

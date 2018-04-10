import React, { Component, Fragment } from "react";

import "./kzuSlider.css";

class KzuSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { slide: 0, slides: 0, players: [], backwards: false };
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
          <div
            className="slide-single-title"
            style={{
              color: slide.contentColor
            }}
          >
            {slide.title}
          </div>
          <div
            className="slide-single-subtitle"
            style={{
              color: slide.contentColor
            }}
          >
            {slide.subtitle}
          </div>
          <div
            className="slide-single-content"
            style={{
              color: slide.contentColor
            }}
          >
            {slide.content}
          </div>
          <div className="slide-single-buttons">
            {slide.buttons &&
              slide.buttons.length > 0 &&
              slide.buttons.map((b, i) => {
                return (
                  <div
                    key={i}
                    className="slide-button"
                    onClick={b.onClick}
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
        </div>
      </div>
    );
  }

  render() {
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
        onMouseLeave={() => {
          auto && this.AutoPlay();
        }}
      >
        <div className="image-slider">
          {slides && slides.length > 0 ? (
            <div
              className="slides-screen"
              onMouseOver={() => {
                this.stopAutoPlay();
              }}
            >
              <div
                className="slides-container-actual"
                style={{
                  width: `${slides.length * 100}%`,
                  marginLeft: `${(this.state.slide - 1) * -100}%`,
                  transition: `margin-left ${
                    transition ? transition / 1000 : 1
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
                      ? `${-100}%`
                      : this.state.slide === slides.length ? "0%" : `${100}%`
                  }`,
                  zIndex:
                    (this.state.slide === 1 && !this.state.backwards) ||
                    (this.state.slide === slides.length && slides.length > 2) ||
                    (slides.length === 2 &&
                      this.state.slide === slides.length &&
                      this.state.backwards)
                      ? 10
                      : -10,
                  transition: `margin-left ${
                    transition ? transition / 1000 : 1
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
                  onClick={() => this.handlePreviousClick()}
                  style={{
                    width: `${contentWidth ? (100 - contentWidth) / 2 : 10}%`
                  }}
                >
                  <div>{"<"}</div>
                </div>
                <div
                  className="next-slide-button slide-nav-button"
                  onMouseOver={() => {
                    auto && this.stopAutoPlay();
                  }}
                  onClick={() => this.handleNextClick()}
                  style={{
                    width: `${contentWidth ? (100 - contentWidth) / 2 : 10}%`
                  }}
                >
                  <div>{">"}</div>
                </div>
              </Fragment>
            )}
          {!hideDots &&
            slides &&
            slides.length > 0 && (
              <div className="slide-navigation-dots">
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
                        onClick={() => {
                          this.setState({
                            slide: i + 1,
                            backwards: this.state.slide === 2 ? true : false
                          });
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
